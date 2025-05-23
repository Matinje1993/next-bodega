"use client";

import { ToastProvider } from "@/providers/toast-provider";
import MobileMenu from "@/components/mobile-menu";
import { useMenu } from "@/providers/menu-provider";

export default function Body({ children }: { children: React.ReactNode }) {
    const { isOpen } = useMenu();
    const bodyStyle = isOpen ? { overflow: "hidden" } : {};

    return (
        <body style={bodyStyle} >
            {children}
            < ToastProvider />
            <MobileMenu />
        </body>
    );
}