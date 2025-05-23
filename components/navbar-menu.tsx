'use client';
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import debounce from "lodash.debounce";
import { useMenu } from "@/providers/menu-provider";

// Types
type MenuItem = {
    id?: string;
    title: string;
    url: string;
    styleAttribute?: string;
    mainImage?: string;
    images?: string[] | string;
    items?: any[]; // You can define this better if needed
    children?: MenuItem[];
};

const initialMenuProp: MenuItem = {
    id: '',
    title: '',
    url: '',
    images: '',
    items: [],
    styleAttribute: '',
    children: []
};

const NavbarMenu = () => {
    const [menuProp, setMenuProp] = useState<MenuItem>(initialMenuProp);
    const [hoveredSubChild, setHoveredSubChild] = useState<MenuItem | null>(null);
    const { menuData } = useMenu();

    const setMenuPropDebounce = useRef(
        debounce((value: MenuItem) => {
            setMenuProp(value);

            if (value.styleAttribute === "allCategories") {
                setHoveredSubChild(value.children[0]);
            } else if (value.children?.length && value.styleAttribute !== "allCategories") {
                setHoveredSubChild(value);
            }
        })
    ).current;

    const isMegaMenu = !!menuProp.id;
    const isAllMegaMenu = menuProp.styleAttribute === "allCategories";

    const isActiveItem = (item: MenuItem) =>
        menuProp.id === item.id || (isAllMegaMenu && item.styleAttribute === "allCategories");

    // Cleanup debounce on unmount
    useEffect(() => {
        return () => {
            setMenuPropDebounce.cancel();
        };
    }, []);

    // Optional: Escape key to close the menu
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMenuProp(initialMenuProp);
                setHoveredSubChild(null);
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    // Helper to render third-level menu
    const renderSubMenu = () => {
        if (!hoveredSubChild?.children) return null;

        return hoveredSubChild.children.map((subItem, subIdx) => (
            <li key={subIdx} className="text-[12px] relative whitespace-nowrap leading-[14px] list-none min-w-[230px]">
                <Link href={`/c/${subItem.id}`} rel={subItem.title} className="cursor-pointer display-inherit no-underline capitalize align-baseline bg-transparent" onClick={() => setMenuProp(initialMenuProp)}>
                    <p className="text-[#4d4d4d] display-inherit text-[12px] leading-[15px] font-medium capitalize whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-500 px-6 py-3">{subItem.title}</p>
                </Link>
                {subItem.children?.length > 0 && (
                    <div className="bg-white">
                        <ul className="bg-white relative left-0 opacity-100 mb-[18px] z-[1] pointer-events-auto p-0 border-0 flex-[1_1_75%] flex flex-col flex-wrap justify-start overflow-auto h-full">
                            {subItem.children.map((thirdItem, idx) => (
                                <li key={idx} className="text-[12px] relative whitespace-nowrap leading-[14px] list-none min-w-[230px]">
                                    <Link href={`/c/${thirdItem.id}`} className="cursor-pointer no-underline capitalize align-baseline inherit bg-transparent" onClick={() => setMenuProp(initialMenuProp)}><p className="text-gray-600 text-ellipsis capitalize text-xs leading-[15px] whitespace-nowrap transition-all duration-500 p-[4px_24px] max-w-[265px] hover:text-[#0e5aa7] hover:font-medium">{thirdItem.title}</p></Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </li>
        ));
    };

    return (
        <>
            {menuData && menuData.length > 0 &&
                <div
                    className="lg:flex box-border min-w-0 hidden flex-wrap items-center justify-between mx-auto max-w-screen-2xl relative"
                    onMouseLeave={() => {
                        setMenuPropDebounce(initialMenuProp);
                        setHoveredSubChild(null);
                    }}
                >
                    <div className="flex flex-1 flex-row overflow-x-auto scrollbar-none">
                        <span className="pt-3 bg-[#0E5AA7]">
                            <svg id="FourSquares" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                <path d="M10.5 4.5H4.5V10.5H10.5V4.5Z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.5 4.5H13.5V10.5H19.5V4.5Z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.5 13.5H4.5V19.5H10.5V13.5Z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.5 13.5H13.5V19.5H19.5V13.5Z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        {menuData.map((item) => (
                            <div
                                key={item.id || item.styleAttribute}
                                className={`relative flex flex-col transition-all duration-300 bg-[#0E5AA7] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:mx-auto ${isActiveItem(item) ? 'after:w-full' : 'after:w-0'
                                    }`}
                                onMouseEnter={() => setMenuPropDebounce(item)}
                            >
                                <Link
                                    rel="menu"
                                    id={item.title.toLowerCase().replace(/\s+/g, '-')}
                                    href={`/c/${item.id}`}
                                    className="p-[16px_20px_15px_16px] cursor-pointer no-underline capitalize align-baseline bg-transparent"
                                    onClick={() => setMenuProp(initialMenuProp)}
                                >
                                    <div className="box-border m-0 min-w-0 flex">
                                        <p className="text-white text-ellipsis capitalize leading-[15px] whitespace-nowrap transition-all duration-500 text-[12px] font-bold">
                                            {item.title}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {(isMegaMenu || isAllMegaMenu) && (
                        <div className="box-border m-0 min-w-0 flex bg-white flex-row absolute top-full left-0 w-full h-[650px] before:content-[''] before:fixed before:z-[-1] before:bg-black/50 before:left-0 before:right-0 before:w-full before:h-screen before:pointer-events-none before:opacity-100 before:scale-100 before:transition-opacity before:duration-300">
                            {isAllMegaMenu && (
                                <ul className="block bg-[#FAFAFA] py-[10px] flex-[1_1_25%] h-full overflow-y-auto">
                                    {menuProp.children?.map((child, idx) => (
                                        <li
                                            key={idx}
                                            onMouseEnter={() => setHoveredSubChild(child)}
                                            className="text-[12px] relative whitespace-nowrap leading-[14px] list-none min-w-[230px]"
                                        >
                                            <Link href={`/c/${child.id}`} className={`cursor-pointer no-underline capitalize display-inherit ${hoveredSubChild?.id === child.id ? 'bg-[#e6e6e6]' : 'bg-transparent'}`} onClick={() => setMenuProp(initialMenuProp)}>
                                                <p className={`${hoveredSubChild?.id === child.id ? 'font-bold' : 'font-normal'} text-[#4d4d4d] truncate capitalize whitespace-nowrap transition-all duration-500 px-3 py-2 text-[12px] relative leading-[14px]`}>
                                                    {child.title}
                                                </p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <ul className="bg-white flex relative left-0 opacity-100 mb-[18px] z-[1] pointer-events-auto p-0 border-0 flex-[1_1_75%] flex-col flex-wrap justify-start overflow-auto h-full">
                                {renderSubMenu()}
                            </ul>
                        </div>
                    )}
                </div>
            }
        </>
    );
};

export default NavbarMenu;