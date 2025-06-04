"use client";
import React, { useEffect, useState, useRef } from "react";
import useCart from "@/hooks/use-cart";

export default function AddToCart({ product }) {

    const { addItem, removeItem, itemExists, getItemQuantity, loading, getItemTotalPrice } = useCart();
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const toggleDropdown = () => setOpen((prev) => !prev);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Render placeholder or nothing on server and during hydration
        return null;
    }
    const quantityInCart = getItemQuantity(product) || 0;
    const maxQuantity = product?.unit?.max ?? 10;

    const isAtMaxQuantity = quantityInCart >= maxQuantity;

    return (
        <>
            <div className="m-0 min-w-0 rounded-sm mb-4 bg-gray-100 p-0 xs:p-4">
                <div>
                    <div className="m-0 min-w-0">
                        <div className="m-0 min-w-0 fixed bottom-0 right-0 w-full bg-white shadow-[0_-2px_6px_0_rgba(0,0,0,0.1)] p-5 flex z-[2] xs:static xs:bg-transparent xs:shadow-none xs:p-0">
                            <div className="m-0 min-w-0 inline-block w-full md:flex">
                                <div className="relative w-full">
                                    {loading && <div className="m-0 min-w-0 bg-[#F8F8F8] absolute left-0 top-0 w-full h-full z-[1] before:absolute before:top-1/2 before:left-1/2 before:h-[18px] before:w-[18px] before:border-[0.2em] before:border-[#0E5AA7] before:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:h-[18px] after:w-[18px] after:rounded-full after:border-[0.2em] after:border-white after:border-t-transparent after:border-r-transparent after:animate-loading-spin">

                                    </div>}
                                    <div className="m-0 min-w-0 relative flex justify-between items-center">
                                        {itemExists(product) ? (
                                            <div className="m-0 min-w-0 flex flex-grow justify-between rounded-[18px] text-white max-w-inherit">
                                                <button className="bg-[#0e5aa7] flex items-center justify-center rounded-md text-white border-0 uppercase outline-none transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] p-0 w-[37px] h-[37px] text-[35px] leading-[26px]" onClick={() => removeItem(product)} disabled={loading}>
                                                    {quantityInCart === 1 ? (<svg data-testid="Trash" viewBox="0 0 16 16" className="W-[22px] h-[15px]">
                                                        <title>icon_trash</title>
                                                        <desc>Created with Sketch.</desc>
                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                            <g>
                                                                <rect fillOpacity="0" fill="#D8D8D8" x="0" y="0" width="16" height="16"></rect>
                                                                <g transform="translate(2.500000, 1.000000)" stroke="#FFFFFF">
                                                                    <path d="M8.8817842e-16,1.9921875 L11,1.9921875" strokeWidth="1.5" strokeLinecap="square"></path>
                                                                    <path d="M0.53125,2.3671875 L0.53125,13.2836914" strokeWidth="1.5" strokeLinecap="square"></path>
                                                                    <path d="M4.13125,5.46875 L4.13125,9.58649812" strokeWidth="1.5" strokeLinecap="square"></path>
                                                                    <path d="M7.3046875,5.46875 L7.3046875,9.58649812" strokeWidth="1.5" strokeLinecap="square"></path>
                                                                    <path d="M10.53125,2.3671875 L10.53125,12.2836914 C10.53125,12.8359762 10.0835347,13.2836914 9.53125,13.2836914 L3.81315104,13.2836914" strokeWidth="1.5" strokeLinecap="square"></path>
                                                                    <path d="M3.37548828,1.48828125 L7.66878255,1.48828125" strokeWidth="2.5" strokeLinecap="round"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>) : (<>-</>)}
                                                </button>
                                                <div className="min-w-0 static m-0 flex-1 h-[37px] w-[100px] xs:w-[157px]">
                                                    <div className="inline-block h-[37px] border-none p-1 text-center bg-transparent w-[68px] min-w-full rounded xs:w-[157px]">
                                                        <div className="m-0 min-w-0 flex items-center justify-center w-full text-[#4d4d4d] cursor-pointer bg-transparent h-[27px] rounded-[2px] right-0 static p-0">
                                                            <span className="text-[#4d4d4d] overflow-hidden leading-normal whitespace-nowrap w-auto text-[12px] font-bold">
                                                                {quantityInCart}
                                                                ({product.price.currency} {getItemTotalPrice(product)})
                                                                <span></span>
                                                            </span>
                                                            <div className="cursor-pointer rotate-0 mb-[3px]">
                                                                <svg id="ArrowDown" viewBox="0 0 22 14" className="h-[10px] w-[10px] ml-1 mr-1"><path fill="none" stroke="#4d4d4d" strokeLinejoin="round" d="M22 7.19l-9.873 9.873L2 6.937"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className={`text-[#fafafa] flex items-center justify-center ${isAtMaxQuantity ? '!bg-[rgb(230,230,230)] opacity-50' : 'bg-[#0e5aa7]'} rounded line-height-[26px] border-0 uppercase outline-none transition-[box-shadow,background-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] p-0 w-[37px] h-[37px] text-[35px]`} onClick={() => addItem(product)} disabled={loading || isAtMaxQuantity}>+</button>
                                            </div>
                                        ) : (<>
                                            <div className="m-0 min-w-0 flex-none static h-[37px] w-1/3 max-w-inherit">
                                                <div className="inline-block h-[37px] w-[100px] min-w-full p-1 text-center bg-white border border-[#E6E6E6] rounded sm:w-[51px]">
                                                    <div className="m-0 min-w-0 flex items-center justify-center w-full text-[#4d4d4d] cursor-pointer bg-transparent h-[27px] rounded-[2px] p-0">
                                                        <span className="text-[#4D4D4D] overflow-hidden leading-normal whitespace-nowrap text-[12px] font-bold transition-colors duration-300 ease-linear">
                                                            1
                                                            <span></span>
                                                        </span>
                                                        <div className="cursor-pointer rotate-0 mb-[3px]">
                                                            <svg id="ArrowDown" viewBox="0 0 22 14" className="h-[10px] w-[10px] ml-1 mr-1"><path fill="none" stroke="#4d4d4d" strokeLinejoin="round" d="M22 7.19l-9.873 9.873L2 6.937"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="m-0 min-w-0 max-w-full w-[64%] h-[37px] leading-[37px] xs:max-w-[262px]">
                                                <button className="pdp_add_to_cart w-full h-full cursor-pointer bg-[#0E5AA7] rounded font-bold leading-[37px] px-[10px] py-0 text-[16px] text-white lg:text-[14px] min-w-[63.61px]" id="add_to_cart_button" type="button" onClick={() => addItem(product)} disabled={loading}>ADD TO CART</button>
                                            </div>
                                        </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative m-0 min-w-0">
                <div className="m-0 min-w-0 text-[#000408] hidden lg:flex justify-between">
                    <a className="m-0 min-w-0 flex items-center text-[12px] cursor-pointer">
                        <span className="m-0 min-w-0 px-[11px] pt-[11px] pb-[8px] bg-[#F4F4F4] rounded-full">
                            <svg height="14px" width="14px" viewBox="0 0 24 24"><g style={{ transform: 'translate(-5px, -5px)' }}><path fill="#747474" d="M8.49743121,5.33333333 L23.4893381,5.33773333 C25.2508927,5.35463963 26.6663089,6.79433264 26.6532581,8.55592 L26.6532581,14.01104 L25.3452581,14.01104 L25.3452581,8.55592 C25.3526284,7.52267359 24.5224808,6.67831442 23.4892581,6.66814667 L8.49735121,6.66374667 C7.46415155,6.67394361 6.63403999,7.51829638 6.64141786,8.55152 L6.64141786,24.7818133 C6.63403999,25.815037 7.46415155,26.6593897 8.49735121,26.6695867 L18.6565647,26.6695867 L18.6566447,28 L8.49743121,28 C6.73587662,27.9830937 5.32046041,26.5434007 5.33342164,24.7818133 L5.33342164,8.55152 C5.32046041,6.78993264 6.73587662,5.35023963 8.49743121,5.33333333 Z M25.0281847,15.1118774 C25.8061078,15.5560541 26.3676017,16.3000832 26.5813813,17.1700002 C26.7603379,18.713241 26.2482184,20.2566904 25.1822213,21.3868533 C23.9330766,22.8586486 22.5843826,24.2429685 21.145648,25.5300531 C20.9917902,25.6814131 20.8385236,25.8334709 20.685848,25.9862264 C20.737488,25.9154397 18.8923947,24.2095998 18.7546747,24.0750132 C17.0082214,22.3682266 14.0831281,19.8794267 14.7706747,17.1073068 C15.118158,15.8951807 16.1258595,14.9869292 17.3674479,14.7668092 C18.6090363,14.5466892 19.8675535,15.053165 20.6105547,16.0719602 C20.6351147,16.1058002 20.6590169,16.1401069 20.6822613,16.1748802 C20.606048,16.0609069 21.330488,15.4372936 21.4218613,15.3667602 C21.7355741,15.1252706 22.0890162,14.9403691 22.466288,14.8203736 C23.324114,14.5623195 24.2502617,14.6677006 25.0281847,15.1118774 Z M13.6423412,21.3222796 C13.9451761,21.8013485 14.291315,22.2516303 14.6764078,22.6674663 L14.6764078,22.6674663 L10.0167274,22.6727907 L10.0167274,22.6727907 C9.64474036,22.6727912 9.34380786,22.3718587 9.34380786,22.0006396 C9.34380786,21.6288585 9.6449465,21.3273385 10.0167273,21.326868 L10.0167273,21.326868 Z M13.8665679,15.9997603 C13.4253749,16.3571027 13.0817355,16.8202344 12.8676212,17.346067 L12.8676212,17.346067 L10.008954,17.3493048 L10.008954,17.3493048 C9.63696996,17.3493052 9.33603446,17.0483697 9.33603446,16.677147 C9.33603446,16.3053963 9.63720359,16.0039301 10.0089541,16.0035635 L10.0089541,16.0035635 Z M22.0106483,10.6770401 C22.3823065,10.6770401 22.683595,10.9783286 22.683595,11.3499868 C22.683595,11.721645 22.3823065,12.0229335 22.0106483,12.0229335 L9.99008791,12.0229335 C9.61842971,12.0229335 9.31714122,11.721645 9.31714122,11.3499868 C9.31714122,10.9783286 9.61842971,10.6770401 9.99008791,10.6770401 L22.0106483,10.6770401 Z"></path><path d="M24.6275299,16.3073401 C23.6256996,15.7165017 22.3358979,16.0252524 21.7101965,17.0056868 C21.4819032,17.2803535 21.2701965,17.6756068 20.9039965,17.7819135 C20.3431432,17.9447001 20.0127299,17.3422068 19.7258765,16.9731935 C19.0993685,16.0068444 17.8190248,15.712085 16.8330365,16.3072068 C14.9189432,17.6929135 16.7463699,20.2476868 17.9097565,21.4028868 C18.8276899,22.3143801 19.7772232,23.1945401 20.7196632,24.1351001 C21.2202365,23.6322201 21.7307432,23.1389268 22.2369965,22.6417668 C23.050181,21.917438 23.8045528,21.1296679 24.4929965,20.2858868 C25.3086632,19.1785268 25.9778232,17.2364868 24.6275299,16.3073401 Z" fill="#FFFFFF"></path></g></svg>
                        </span>
                        <span className="hidden mx-2.5 min-w-0 box-border xl:inline-flex">
                            Add to wishlist
                        </span>
                    </a>
                    <a className="m-0 min-w-0 flex items-center text-[12px] cursor-pointer hover:text-[#0E5AA7]" onClick={toggleDropdown}>
                        <span className="m-0 min-w-0 px-[11px] pt-[11px] pb-[8px] bg-[#F4F4F4] rounded-full">
                            <svg height="14px" width="14px" viewBox="0 0 24 24"><g fill="#747474"><path d="M16.97945,17.43133l-.04987-.029a3.12081,3.12081,0,0,0-.497.86938l.043.0249Z"></path><path d="M19.36324,16.21746a3.1153,3.1153,0,0,0-2.43366,1.18482l.04987.029-.00592.01025L7.76375,12.0678c.00079-.029.00867-.05639.00867-.08569a3.16863,3.16863,0,1,0-.21637,1.12329l8.87323,5.178a3.10855,3.10855,0,0,0-.20179,1.07568,3.13623,3.13623,0,1,0,3.13575-3.1416Z"></path><path d="M7.11543,12.84881a2.59876,2.59876,0,0,0,.11127-.40918l-.20624.354Z"></path><path d="M19.36324,1.49969a3.14186,3.14186,0,0,0-3.13575,3.1416,3.10707,3.10707,0,0,0,.17408.98779l-7.55689,4.354.5.86718,7.519-4.33227a3.13335,3.13335,0,1,0,2.49958-5.01831Z"></path><path d="M17.27339,6.28191l-.04681-.08129a2.66215,2.66215,0,0,1-.34094-.59131l-.11225-.19458-.37182.21435a3.12123,3.12123,0,0,0,.46209.88892Z"></path><path d="M17.22658,6.20062l-.34094-.59131A2.66215,2.66215,0,0,0,17.22658,6.20062Z"></path></g><g fill="#F4F4F4"><path d="M19.36324,6.78289a2.14161,2.14161,0,1,0-2.13575-2.1416A2.142,2.142,0,0,0,19.36324,6.78289Z"></path><path d="M19.36324,17.21746a2.14112,2.14112,0,1,0,2.13671,2.1416A2.14119,2.14119,0,0,0,19.36324,17.21746Z"></path><path d="M4.63667,9.84051a2.14112,2.14112,0,1,0,2.13575,2.1416A2.142,2.142,0,0,0,4.63667,9.84051Z"></path></g></svg>
                        </span>
                        <span className="hidden mx-2.5 min-w-0 box-border xl:inline-flex">
                            Share
                        </span>
                    </a>
                </div>
                {open && (<div className="m-0 min-w-0 absolute right-0 top-[100px] md:top-[50px] text-[#4d4d4d] flex flex-wrap bg-white w-[284px] rounded-md z-[2] shadow-md" ref={dropdownRef}>
                    <div className="m-0 min-w-0 text-[16px] p-2 w-1/2 flex flex-col cursor-pointer">
                        <div className="m-0 min-w-0 inline-flex">
                            <svg width="24" height="24" viewBox="0 0 24 24"><g transform="translate(-224.000000, -175.000000)"><g transform="translate(224.000000, 175.000000)"><rect fill="#0A437C" x="0" y="0" width="24" height="24" rx="12"></rect><g transform="translate(4.000000, 4.000000)" fill="#FFFFFF"><g opacity="0"><rect x="0" y="0" width="16" height="16"></rect></g><path d="M6.83745583,14 L6.83745583,8.53003534 L5,8.53003534 L5,6.39575972 L6.83745583,6.39575972 L6.83745583,4.81978799 C6.83745583,2.99646643 7.9540636,2 9.5795053,2 C10.3568905,2 11.0282686,2.0565371 11.2261484,2.08480565 L11.2261484,3.99293286 L10.1024735,3.99293286 C9.21908127,3.99293286 9.04240283,4.40989399 9.04240283,5.03180212 L9.04240283,6.39575972 L11.1625442,6.39575972 L10.8869258,8.53003534 L9.04240283,8.53003534 L9.04240283,14 L6.83745583,14 Z"></path></g></g></g></svg>
                            <div className="mx-2 my-0 min-w-0 text-[#4d4d4d] pt-[2px]">Facebook</div>
                        </div>
                    </div>
                    <div className="m-0 min-w-0 text-[16px] p-2 w-1/2 flex flex-col cursor-pointer">
                        <div className="m-0 min-w-0 inline-flex">
                            <svg width="24" height="24" viewBox="0 0 24 24"><g transform="translate(-270.000000, -210.000000)"><g transform="translate(270.000000, 210.000000)"><rect fill="#0A437C" x="0" y="0" width="24" height="24" rx="12"></rect><g transform="translate(6.000000, 7.000000)" fill="#FFFFFF"><path d="M4.2728,9.9285714 C8.7944,9.9285714 11.2712,6.3000562 11.2712,3.1633858 C11.2712,3.0613048 11.2712,2.9592238 11.2712,2.8571429 C11.7512,2.5230596 12.164,2.0961755 12.5,1.62289089 C12.0584,1.80849269 11.5784,1.93841395 11.0792,1.99409449 C11.588,1.7064117 11.9816,1.23312711 12.164,0.67632171 C11.6936,0.95472441 11.1656,1.1496063 10.5992,1.25168729 C10.148,0.78768279 9.5144,0.5 8.804,0.5 C7.4504,0.5 6.3464,1.56721035 6.3464,2.8849831 C6.3464,3.0705849 6.3656,3.2469066 6.404,3.4232283 C4.3592,3.3304274 2.5448,2.3745782 1.3352,0.93616423 C1.124,1.28880765 0.9992,1.69713161 0.9992,2.1332958 C0.9992,2.9592238 1.4408,3.692351 2.0936,4.1192351 C1.6904,4.1006749 1.316,3.9985939 0.98,3.8222722 L0.98,3.8501125 C0.98,5.0008436 1.8344,5.965973 2.9576,6.1886952 C2.7464,6.2443757 2.5352,6.272216 2.3048,6.272216 C2.1512,6.272216 1.9976,6.2536558 1.844,6.2258155 C2.1608,7.1723847 3.0728,7.8591114 4.148,7.8776715 C3.3032,8.5179978 2.2376,8.8984814 1.0856,8.8984814 C0.8936,8.8984814 0.692,8.8892013 0.5,8.8706412 C1.5848,9.5388076 2.8808,9.9285714 4.2728,9.9285714"></path></g></g></g></svg>
                            <div className="mx-2 my-0 min-w-0 text-[#4d4d4d] pt-[2px]">Twitter</div>
                        </div>
                    </div>
                    <div className="m-0 min-w-0 text-[16px] p-2 w-1/2 flex flex-col cursor-pointer">
                        <div className="m-0 min-w-0 inline-flex">
                            <svg width="24" height="24" viewBox="0 0 24 24"><g transform="translate(-64.000000, 0.000000)"><g transform="translate(64.000000, 0.000000)"><rect fill="#0A437C" x="0" y="0" width="24" height="24" rx="12"></rect><g transform="translate(5.000000, 4.000000)" fill="#FFFFFF"><g opacity="0"><rect x="0" y="0" width="15" height="15"></rect></g><path d="M10.3625,8.7375 C10.20625,8.6625 9.44375,8.2875 9.3,8.2375 C9.15625,8.1875 9.05,8.15625 8.95,8.3125 C8.84375,8.46875 8.54375,8.81875 8.45625,8.91875 C8.3625,9.025 8.275,9.0375 8.11875,8.95625 C7.9625,8.88125 7.4625,8.71875 6.86875,8.19375 C6.40625,7.78125 6.09375,7.275 6.00625,7.11875 C5.9125,6.9625 5.99375,6.88125 6.06875,6.80625 C6.14375,6.73125 6.225,6.625 6.30625,6.53125 C6.38125,6.44375 6.40625,6.375 6.4625,6.275 C6.5125,6.16875 6.4875,6.08125 6.45,6 C6.40625,5.925 6.1,5.1625 5.96875,4.85625 C5.84375,4.55 5.7125,4.59375 5.61875,4.5875 C5.525,4.58125 5.425,4.58125 5.31875,4.58125 C5.21875,4.58125 5.05,4.61875 4.90625,4.775 C4.7625,4.93125 4.3625,5.30625 4.3625,6.06875 C4.3625,6.83125 4.91875,7.5625 4.99375,7.66875 C5.075,7.76875 6.09375,9.3375 7.65,10.00625 C8.025,10.1625 8.3125,10.2625 8.5375,10.33125 C8.9125,10.45 9.25,10.43125 9.51875,10.39375 C9.81875,10.35 10.4375,10.01875 10.56875,9.65625 C10.7,9.29375 10.7,8.9875 10.65625,8.91875 C10.61875,8.85625 10.51875,8.81875 10.3625,8.7375 Z M7.525,12.59375 L7.51875,12.59375 C6.59375,12.59375 5.68125,12.35 4.8875,11.875 L4.7,11.76875 L2.74375,12.275 L3.2625,10.375 L3.14375,10.18125 C2.625,9.3625 2.35,8.41875 2.35,7.44375 C2.35,4.60625 4.675,2.29375 7.525,2.29375 C8.90625,2.29375 10.20625,2.83125 11.18125,3.80625 C12.15625,4.78125 12.7,6.06875 12.6938033,7.45 C12.6938033,10.2875 10.375,12.59375 7.525,12.59375 Z M11.925,3.06875 C10.75,1.89375 9.1875,1.25 7.525,1.25 C4.09375,1.25 1.3,4.025 1.3,7.44375 C1.3,8.5375 1.5875,9.6 2.13125,10.5375 L1.25,13.75 L4.55,12.8875 C5.45625,13.38125 6.48125,13.64375 7.51875,13.64375 L7.525,13.64375 C10.95625,13.64375 13.74375,10.8625 13.75,7.45 C13.75,5.79375 13.1,4.2375 11.925,3.06875 L11.925,3.06875 Z"></path></g></g></g></svg>
                            <div className="mx-2 my-0 min-w-0 text-[#4d4d4d] pt-[2px]">Whatsapp</div>
                        </div>
                    </div>
                    <div className="m-0 min-w-0 text-[16px] p-2 w-1/2 flex flex-col cursor-pointer">
                        <div className="m-0 min-w-0 inline-flex">
                            <svg width="24" height="24" viewBox="0 0 24 24"><defs><path d="M11.4674133,0.02074 L0.47214,0.02074 C0.431487247,0.0237115294 0.391382858,0.0318802783 0.352806667,0.0450466667 L5.35718,3.33971333 L5.98613333,3.73457333 L11.66526,0.0627533333 C11.6029257,0.0352190642 11.5355578,0.0209133027 11.4674133,0.02074 Z" id="path-1"></path></defs><g transform="translate(-96.000000, 0.000000)"><g transform="translate(96.000000, 0.000000)"><rect fill="#0A437C" x="0" y="0" width="24" height="24" rx="12"></rect><g transform="translate(4.000000, 4.000000)"><path d="M13.50696,3.33645333 C14.1487986,3.33896294 14.6675389,3.86044378 14.6666667,4.50228667 L14.6666667,4.50228667 L14.6668678,11.5038867 C14.6677389,12.1457296 14.1489986,12.6672104 13.50716,12.6697267 L13.50716,12.6697267 L3.33552,12.6697267 L3.33552,12.00612 L13.50716,12.00612 C13.7836101,12.0050615 14.0069881,11.7803382 14.0063867,11.5038867 L14.0063867,11.5038867 L14.0061933,4.63618667 L8.18831333,8.39801333 C8.13512611,8.43254241 8.07305908,8.45088924 8.00964667,8.45082667 C7.94526211,8.45074502 7.88229038,8.43194407 7.8284,8.39671333 L7.8284,8.39671333 L2.01209333,4.56798 L1.99381333,12.6664867 L1.33333333,12.6697267 L1.35133333,4.50390667 C1.34983544,3.86129071 1.86907353,3.33887549 2.51168667,3.33645333 L2.51168667,3.33645333 Z M13.4674133,4.02074 L2.47214,4.02074 C2.43148725,4.02371153 2.39138286,4.03188028 2.35280667,4.04504667 L7.35718,7.33971333 L7.98613333,7.73457333 L13.66526,4.06275333 C13.6029257,4.03521906 13.5355578,4.0209133 13.4674133,4.02074 Z" fill="#FFFFFF"></path><g opacity="0.3" transform="translate(2.000000, 4.000000)"></g><g opacity="0" fill="#FFFFFF"><rect x="0" y="0" width="16" height="16"></rect></g></g></g></g></svg>
                            <div className="mx-2 my-0 min-w-0 text-[#4d4d4d] pt-[2px]">Email</div>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    )
}