"use client";
import useCart from "@/hooks/use-cart";
import Link from "next/link";
import React from "react";

const NavbarMiniCart = () => {
    const cart = useCart();
    const filteredShop = cart?.items?.map((item) => item.quantity);

    const shopCount = filteredShop?.reduce((a, b) => {
        return a + b;
    }, 0);

    const productCount = cart?.items?.length ?? 0;

    return (
        <div id="miniCart" className="box-border m-0 min-w-0 flex-shrink-0 relative ml-4">
            <Link href="/app/cart" className="not-italic inline-flex items-center h-10 bg-transparent border-0 no-underline relative" style={{ position: 'relative' }}>
                <svg id="CartInverse" viewBox="0 0 24 24" className="w-6 h-6 text-primary-blue sm:text-white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.75 20C6.7165 20 7.5 20.7835 7.5 21.75C7.5 22.7165 6.7165 23.5 5.75 23.5C4.7835 23.5 4 22.7165 4 21.75C4 20.7835 4.7835 20 5.75 20ZM19.75 20C20.7165 20 21.5 20.7835 21.5 21.75C21.5 22.7165 20.7165 23.5 19.75 23.5C18.7835 23.5 18 22.7165 18 21.75C18 20.7835 18.7835 20 19.75 20ZM4.5 0V4H21.7106L19.3356 13.5H4.5V14.75C4.5 15.3972 4.99187 15.9295 5.62219 15.9935L5.75 16H22.5V17.5H5.75C4.28747 17.5 3.0916 16.3583 3.00502 14.9175L3 14.75V1.5H0V0H4.5ZM19.789 5.5H4.5V12H18.164L19.789 5.5Z" fill="currentColor"></path>
                </svg>
                {productCount > 0 && <span id="header_item_cart" className="animate-popup bg-[#ee2527] rounded-full text-white text-[10px] h-[17px] min-w-[17px] leading-[17px] pl-[1px] absolute right-[-8px] top-0 text-center">{productCount}</span>}
            </Link>
        </div>
    );
};

export default NavbarMiniCart;