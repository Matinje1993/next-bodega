"use client";
import React, { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";

export default function AddToCart({ product }) {

    const { addItem, removeItem, itemExists, getItemQuantity, loading, getItemTotalPrice } = useCart();
    const [mounted, setMounted] = useState(false);
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
                                                <button className="bg-[#0e5aa7] flex items-center justify-center rounded-md text-white border-0 uppercase outline-none transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] p-0 w-[37px] h-[37px] text-[35px] leading-[26px]" onClick={() => removeItem(product)} disabled={loading}>-</button>
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
                                                <button className={`text-[#fafafa] flex items-center justify-center ${isAtMaxQuantity ? '!bg-[rgb(230,230,230)] opacity-50':'bg-[#0e5aa7]'} rounded line-height-[26px] border-0 uppercase outline-none transition-[box-shadow,background-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] p-0 w-[37px] h-[37px] text-[35px]`} onClick={() => addItem(product)} disabled={loading || isAtMaxQuantity}>+</button>
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
                    <a className="m-0 min-w-0 flex items-center text-[12px] cursor-pointer">
                        <span className="m-0 min-w-0 px-[11px] pt-[11px] pb-[8px] bg-[#F4F4F4] rounded-full">
                            <svg height="14px" width="14px" viewBox="0 0 24 24"><g fill="#747474"><path d="M16.97945,17.43133l-.04987-.029a3.12081,3.12081,0,0,0-.497.86938l.043.0249Z"></path><path d="M19.36324,16.21746a3.1153,3.1153,0,0,0-2.43366,1.18482l.04987.029-.00592.01025L7.76375,12.0678c.00079-.029.00867-.05639.00867-.08569a3.16863,3.16863,0,1,0-.21637,1.12329l8.87323,5.178a3.10855,3.10855,0,0,0-.20179,1.07568,3.13623,3.13623,0,1,0,3.13575-3.1416Z"></path><path d="M7.11543,12.84881a2.59876,2.59876,0,0,0,.11127-.40918l-.20624.354Z"></path><path d="M19.36324,1.49969a3.14186,3.14186,0,0,0-3.13575,3.1416,3.10707,3.10707,0,0,0,.17408.98779l-7.55689,4.354.5.86718,7.519-4.33227a3.13335,3.13335,0,1,0,2.49958-5.01831Z"></path><path d="M17.27339,6.28191l-.04681-.08129a2.66215,2.66215,0,0,1-.34094-.59131l-.11225-.19458-.37182.21435a3.12123,3.12123,0,0,0,.46209.88892Z"></path><path d="M17.22658,6.20062l-.34094-.59131A2.66215,2.66215,0,0,0,17.22658,6.20062Z"></path></g><g fill="#F4F4F4"><path d="M19.36324,6.78289a2.14161,2.14161,0,1,0-2.13575-2.1416A2.142,2.142,0,0,0,19.36324,6.78289Z"></path><path d="M19.36324,17.21746a2.14112,2.14112,0,1,0,2.13671,2.1416A2.14119,2.14119,0,0,0,19.36324,17.21746Z"></path><path d="M4.63667,9.84051a2.14112,2.14112,0,1,0,2.13575,2.1416A2.142,2.142,0,0,0,4.63667,9.84051Z"></path></g></svg>
                        </span>
                        <span className="hidden mx-2.5 min-w-0 box-border xl:inline-flex">
                            Share
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}