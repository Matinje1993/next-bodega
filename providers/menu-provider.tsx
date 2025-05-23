"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface MenuContextType {
    isOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
    menuData: any | null;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface ProviderProps {
    children: ReactNode;
}

export const MenuProvider: React.FC<ProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuData, setMenuData] = useState<any | null>(null);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch(`/api/v1/menu`, {
                    cache: 'no-store',
                });
                const data = await response.json();
                setMenuData(data);
            } catch (error) {
                console.error("Error fetching menu data:", error);
            }
        };

        fetchMenuData();
    }, []);

    return (
        <MenuContext.Provider value={{ isOpen, toggleMenu, closeMenu, menuData }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
};