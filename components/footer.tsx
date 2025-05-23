"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useState, useEffect } from 'react';

function useIsMobile(maxWidth = 1200) {
    const [isMobile, setIsMobile] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < maxWidth);
        };

        checkScreen();
        setHasMounted(true);

        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, [maxWidth]);

    return { isMobile, hasMounted };
}

const Footer = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const { isMobile, hasMounted } = useIsMobile(1200);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };
    const year = new Date().getFullYear();

    if (!hasMounted) return null;
    
    return (
        <div className="max-w-full m-0 min-w-0 text-xs">
            <footer>
                <div className="bg-[rgb(14,90,167)] lg:py-6 p-0">
                    {isMobile ? (
                        <div className="m-auto max-w-[1232px] flex flex-col flex-wrap">
                            <div className="box-border m-0 min-w-0 px-4 py-3 flex flex-col xs:px-6 xs:flex-row justify-between basis-[20%]">
                                <Logo />
                                <div className="box-border mt-3 mb-0 min-w-0 flex items-center xs:mt-0">
                                    <div className="box-border m-[8px_16px_8px_0px] min-w-0 text-white">
                                        Stay in touch with us
                                    </div>
                                    <div className="flex flex-wrap gap-2.5 max-w-[200px] mt-1.25">
                                        <Link href="#">
                                            <picture>
                                                <source media="(max-width: 576px)" />
                                                <img src="/assets/images/social/facebook.svg" width="24" loading="lazy" decoding="async" />
                                            </picture>
                                        </Link>
                                        <Link href="#">
                                            <picture>
                                                <source media="(max-width: 576px)" />
                                                <img src="/assets/images/social/twitter.svg" width="24" loading="lazy" decoding="async" />
                                            </picture>
                                        </Link>
                                        <Link href="#">
                                            <picture>
                                                <source media="(max-width: 576px)" />
                                                <img src="/assets/images/social/instagram.svg" width="24" loading="lazy" decoding="async" />
                                            </picture>
                                        </Link>
                                        <Link href="#">
                                            <picture>
                                                <source media="(max-width: 576px)" />
                                                <img src="/assets/images/social/youtube.svg" width="24" loading="lazy" decoding="async" />
                                            </picture>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col">
                                <div onClick={() => toggleMenu('services')} className="cursor-pointer flex text-sm font-normal bg-[#0E5AA7] text-white border-t border-white p-[14px_16px] justify-between xs:px-6">
                                    <span>Customer service</span>
                                    <div className="relative" style={{
                                        transform: openMenu === 'services' ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease-in-out',
                                        top: '-4px',
                                    }}>
                                        <svg id="ArrowDown" viewBox="0 0 22 14" className="w-[16px] h-[16px]">
                                            <path fill="none" stroke="#fff" strokeLinejoin="round" d="M22 7.19l-9.873 9.873L2 6.937"></path>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="bg-[#0A437C] text-sm leading-1 p-0 border-0">
                                    {openMenu === 'services' && (
                                        <div className="bg-white">
                                            <div className="p-0">
                                                <ul className="bg-[#0A437C] max-h-[500px] pt-4 pb-4 list-none">
                                                    <li className="m-0 min-w-0 p-[4px_16px] xs:px-6">
                                                        <Link href="#" title="Service and Warranty" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                            Service and Warranty
                                                        </Link>
                                                    </li>
                                                    <li className="m-0 min-w-0 p-[4px_16px] xs:px-6">
                                                        <Link href="#" title="Returns and Exchanges" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                            Returns and Exchanges
                                                        </Link>
                                                    </li>
                                                    <li className="m-0 min-w-0 p-[4px_16px] xs:px-6">
                                                        <Link href="#" title="Secured Online Payment" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                            Secured Online Payment
                                                        </Link>
                                                    </li>
                                                    <li className="m-0 min-w-0 p-[4px_16px] xs:px-6">
                                                        <Link href="#" title="Shipping & Delivery" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                            Shipping & Delivery
                                                        </Link>
                                                    </li>
                                                    <li className="m-0 min-w-0 p-[4px_16px] xs:px-6">
                                                        <Link href="#" title="Cash on Delivery" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                            Cash on Delivery
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div onClick={() => toggleMenu('about')} className="cursor-pointer flex text-sm font-normal bg-[#0E5AA7] text-white border-t border-white p-[14px_16px] justify-between xs:px-6">
                                    <span>About Us</span>
                                    <div className="relative" style={{
                                        transform: openMenu === 'about' ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease-in-out',
                                        top: '-4px',
                                    }}>
                                        <svg id="ArrowDown" viewBox="0 0 22 14" className="w-[16px] h-[16px]">
                                            <path fill="none" stroke="#fff" strokeLinejoin="round" d="M22 7.19l-9.873 9.873L2 6.937"></path>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="bg-[#0A437C] text-sm leading-1 p-0 border-0">
                                    {openMenu === 'about' && (
                                        <div className="bg-white">
                                            <div className="p-0">
                                                <ul className="bg-[#0A437C] max-h-[500px] pt-4 pb-4 list-none">
                                                    <li className="m-0 min-w-0 p-[4px_16px] xs:px-6">
                                                        <Link href="#" title="About Bodega" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                            About Bodega
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div onClick={() => toggleMenu('support')} className="cursor-pointer flex text-sm font-normal bg-[#0E5AA7] text-white border-t border-white p-[14px_16px] justify-between xs:px-6">
                                    <span>Help & Support</span>
                                    <div className="relative" style={{
                                        transform: openMenu === 'support' ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease-in-out',
                                        top: '-4px',
                                    }}>
                                        <svg id="ArrowDown" viewBox="0 0 22 14" className="w-[16px] h-[16px]">
                                            <path fill="none" stroke="#fff" strokeLinejoin="round" d="M22 7.19l-9.873 9.873L2 6.937"></path>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="bg-[#0A437C] text-sm leading-1 p-0 border-0">
                                    {openMenu === 'support' && (
                                        <div className="bg-white">
                                            <div className="p-0">
                                                <ul className="bg-[#0A437C] max-h-[500px] pt-4 pb-4 list-none">
                                                    <li className="m-0 min-w-0 p-[4px_16px] xs:px-6">
                                                        <Link href="#" title="Terms & Conditions" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                            Terms & Conditions
                                                        </Link>
                                                    </li>
                                                    <li className="m-0 min-w-0 p-[4px_16px] xs:px-6">
                                                        <Link href="#" title="Contact Us" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                            Contact Us
                                                        </Link>
                                                    </li>
                                                    <li className="m-0 min-w-0 p-[4px_16px] xs:px-6">
                                                        <Link href="#" title="FAQs" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                            FAQs
                                                        </Link>
                                                    </li>
                                                    <li className="m-0 min-w-0 p-[4px_16px] xs:px-6">
                                                        <Link href="#" title="Privacy Policy" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                            Privacy Policy
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="m-auto max-w-[1232px] flex  flex-wrap">
                            <div className="flexm-0 min-w-0 flex-col xs:flex-row lg:flex-col lg:justify-start flex-[0_0_20%]">
                                <Logo />
                                <div className="mt-3 min-w-0 flex items-center xs:mt-0 lg:items-start lg:flex-col lg:mt-8">
                                    <div className="m-2 mr-4 mt-2 ml-0 min-w-0 text-white">Stay in touch with us</div>
                                    <div className="flex flex-wrap gap-2.5 max-w-[200px] mt-1.5">
                                        <Link href="#">
                                            <picture>
                                                <source media="(max-width: 576px)" />
                                                <img src="/assets/images/social/facebook.svg" width="24" loading="lazy" decoding="async" />
                                            </picture>
                                        </Link>
                                        <Link href="#">
                                            <picture>
                                                <source media="(max-width: 576px)" />
                                                <img src="/assets/images/social/twitter.svg" width="24" loading="lazy" decoding="async" />
                                            </picture>
                                        </Link>
                                        <Link href="#">
                                            <picture>
                                                <source media="(max-width: 576px)" />
                                                <img src="/assets/images/social/instagram.svg" width="24" loading="lazy" decoding="async" />
                                            </picture>
                                        </Link>
                                        <Link href="#">
                                            <picture>
                                                <source media="(max-width: 576px)" />
                                                <img src="/assets/images/social/youtube.svg" width="24" loading="lazy" decoding="async" />
                                            </picture>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap flex-[1_1_0%] justify-between gap-5">
                                <div className="box-border m-0 min-w-0 flex flex-col basis-[23%]">
                                    <div className="box-border mb-4 min-w-0 font-medium text-white text-[14px]">
                                        Customer service
                                    </div>
                                    <ul>
                                        <li className="mb-2">
                                            <Link href="#" title="Service and Warranty" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                Service and Warranty
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link href="#" title="Returns and Exchanges" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                Returns and Exchanges
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link href="#" title="Secured Online Payment" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                Secured Online Payment
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link href="#" title="Shipping & Delivery" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                Shipping & Delivery
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link href="#" title="Cash on Delivery" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                Cash on Delivery
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-border m-0 min-w-0 flex flex-col basis-[23%]">
                                    <div className="box-border mb-4 min-w-0 font-medium text-white text-[14px]">
                                        About Us
                                    </div>
                                    <ul>
                                        <li className="mb-2">
                                            <Link href="#" title="About Bodega" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                About Bodega
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-border m-0 min-w-0 flex flex-col basis-[23%]">
                                    <div className="box-border mb-4 min-w-0 font-medium text-white text-[14px]">
                                        Help & Support
                                    </div>
                                    <ul>
                                        <li className="mb-2">
                                            <Link href="#" title="Terms & Conditions" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                Terms & Conditions
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link href="#" title="Contact Us" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link href="#" title="FAQs" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                FAQs
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link href="#" title="Privacy Policy" className="no-underline hover:underline text-[12px] leading-[16px] block text-white">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>)}
                </div>
                <p className="py-2 text-black text-[11px] text-center block">
                    <span>© {year} Bodega. All rights reserved.</span>
                </p>
            </footer>
        </div>
    );
};

export default Footer;