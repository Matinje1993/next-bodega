"use client";

import { useMenu } from "@/providers/menu-provider";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
    const [allOpen, setAllOpen] = useState(false);
    const { menuData, isOpen, closeMenu } = useMenu();
    const [openNodes, setOpenNodes] = useState<Record<string, boolean>>({});
    const toggleNode = (path: string) => {
        setOpenNodes(prev => {
            const isCurrentlyOpen = !!prev[path];

            if (isCurrentlyOpen) {
                // Close the node and all of its children
                const newState: { [key: string]: boolean } = {};
                for (const key in prev) {
                    if (!key.startsWith(path)) {
                        newState[key] = prev[key];
                    }
                }
                return newState;
            } else {
                // Open the node
                return { ...prev, [path]: true };
            }
        });
    };
    const isNodeOpen = (path: string) => !!openNodes[path];

    const renderNodes = (nodes: any[], path: string = '') => {
        return nodes.map((node, index) => {
            const currentPath = path ? `${path}-${index}` : `${index}`;
            const hasChildren = Array.isArray(node.children) && node.children.length > 0;
            const level = currentPath.split('-').length - 1;
            const isLastLevel = !node.children || node.children.length === 0;
            return (
                <div key={index}>
                    {isLastLevel ? (<>
                        <div key={currentPath} className="border-b border-[rgb(245,245,245)] border-solid p-0">
                            <div className="bg-[rgb(255,255,255)]">
                                <div className="p-0">
                                    <div className="bg-[rgb(250,250,250)]">
                                        <Link href={`/c/${node.id}`} className="block no-underline pt-[20px] pr-[16px] pb-[20px] pl-[44px]">
                                            <p className="text-[rgb(77,77,77)] font-normal text-sm">{node.title}</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>) : (
                        <div key={currentPath} className="w-full flex flex-col">
                            <div onClick={() => toggleNode(currentPath)} className={`bg-[rgb(255,255,255)] cursor-pointer flex font-semibold text-[14px] items-center justify-between ${level === 0 ? 'p-[16px]' : 'py-4 px-8'}`}>
                                <span>{node.title}</span>
                                <div className="relative" style={{ transition: 'transform 0.3s ease', transform: isNodeOpen(currentPath) ? 'rotate(180deg)' : 'rotate(0deg)', top: '-1px' }}>
                                    {isNodeOpen(currentPath) ? (<svg id="Minus" viewBox="0 0 120 120" className="w-[16px] h-[16px]">
                                        <g>
                                            <rect height="6" width="100" x="10" y="54"></rect>
                                        </g>
                                    </svg>) : (<svg id="Plus" viewBox="-1 -1 26 26" className="w-[16px] h-[16px]">
                                        <g>
                                            <polygon points="12.5,2 11.5,2 11.5,11.5 2,11.5 2,12.5 11.5,12.5 11.5,22 12.5,22 12.5,12.5 22,12.5 22,11.5 12.5,11.5 " strokeWidth="2">
                                            </polygon>
                                        </g>
                                    </svg>)}
                                </div>
                            </div>
                            <div className="border-b border-[rgb(245,245,245)] border-solid p-0">
                                {hasChildren && isNodeOpen(currentPath) &&
                                    <div className="bg-[rgb(255,255,255)]">
                                        <div className="p-0">
                                            {renderNodes(node.children, currentPath)}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    )}
                </div>
            );
        });
    };
    return (
        <>
            {menuData && isOpen &&
                <div className="fixed inset-0 z-[1040]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="xs:w-1/2 fixed inset-y-0 left-0 w-full max-h-full bg-white shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)] rounded-none m-0 p-0 flex flex-col font-montserrat" style={{ transform: 'translate3d(0vw, 0px, 0px)' }}>
                        <div className="box-border m-0 min-w-0 p-0 flex-grow overflow-hidden overflow-y-auto" style={{ paddingBottom: '0px !important' }}>
                            {allOpen ? (
                                <div className="flex fixed top-0 w-full z-[2] bg-white border-b border-gray-200 py-6 px-4 justify-between">
                                    <div className="box-border m-0 min-w-0 flex items-center justify-between" onClick={() => setAllOpen(false)}>
                                        <span className="pt-0 pb-0 pr-2 pl-0 mt-1">
                                            <svg id="ArrowLeft" viewBox="0 0 24 24" className="w-[24px] h-[24px]">
                                                <path d="M17.2,2.4l-0.7-0.7l-9.9,9.9c-0.2,0.2-0.2,0.5,0,0.7c0,0,0,0,0,0l10.1,10.1l0.7-0.7l-9.8-9.8L17.2,2.4z"></path>
                                            </svg>
                                        </span>
                                        <p className="text-[rgb(77,77,77)] text-sm">All Categories</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="box-border m-0 min-w-0 flex justify-end p-[20px_16px_16px_24px] fixed w-full z-[2] bg-white top-0">
                                    <span className="pr-[10px] pt-0 pb-0 pl-0 mt-[6px] relative cursor-pointer" onClick={closeMenu}>
                                        <svg id="Cross" viewBox="0 0 22 22" className="w-[24px] h-[24px]"><polygon points="15.266 1.266 14.734 0.734 8 7.469 1.266 0.734 0.734 1.266 7.469 8 0.734 14.734 1.266 15.266 8 8.531 14.734 15.266 15.266 14.734 8.531 8 15.266 1.266"></polygon></svg>
                                    </span>
                                </div>)
                            }
                            <div className="text-[rgb(77,77,77)] fixed w-full z-[2] bg-white top-[66px]">
                                <Link href="/login" className="p-6 font-normal inline-flex items-center h-[40px] bg-[0px_center] border-0 text-none relative">
                                    <svg id="User" viewBox="0 0 20 22" className="w-[24px] h-[24px]">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g transform="translate(-1164.000000, -55.000000)">
                                                <g>
                                                    <g transform="translate(1162.000000, 54.000000)">
                                                        <g>
                                                            <g transform="translate(2.000000, 1.000000)">
                                                                <path d="M9.98556522,10.6258238 C8.40991304,10.6258238 7.13165217,9.33074371 7.13165217,7.73435927 C7.13165217,6.13709382 8.40991304,4.84201373 9.98556522,4.84201373 C11.5612174,4.84201373 12.8394783,6.13709382 12.8394783,7.73435927 C12.8394783,9.33074371 11.5612174,10.6258238 9.98556522,10.6258238 M9.98556522,1.3215103 C4.71165217,1.3215103 0.435130435,5.65342105 0.435130435,10.9976087 C0.435130435,14.0820137 1.86382609,16.8228261 4.08208696,18.5945309 C4.0786087,18.5046682 4.06817391,18.4165675 4.06817391,18.3249428 C4.06817391,15.014119 6.71773913,12.3305721 9.98556522,12.3305721 C13.2533913,12.3305721 15.9029565,15.014119 15.9029565,18.3249428 C15.9029565,18.4165675 15.8925217,18.5046682 15.8890435,18.5945309 C18.1073043,16.8228261 19.536,14.0820137 19.536,10.9976087 C19.536,5.65342105 15.2594783,1.3215103 9.98556522,1.3215103" fill="#B7CEE5"></path>
                                                                <path d="M9.98556522,10.1853204 C8.65165217,10.1853204 7.56643478,9.0858238 7.56643478,7.73435927 C7.56643478,6.38289474 8.65165217,5.28251716 9.98556522,5.28251716 C11.3194783,5.28251716 12.4046957,6.38289474 12.4046957,7.73435927 C12.4046957,9.0858238 11.3194783,10.1853204 9.98556522,10.1853204 M9.98556522,4.4015103 C8.17165217,4.4015103 6.69686957,5.89657895 6.69686957,7.73435927 C6.69686957,9.57125858 8.17165217,11.0663272 9.98556522,11.0663272 C11.7994783,11.0663272 13.2742609,9.57125858 13.2742609,7.73435927 C13.2742609,5.89657895 11.7994783,4.4015103 9.98556522,4.4015103" id="Fill-3" fill="#0E5AA7"></path>
                                                                <path d="M16.3026087,17.6468318 C15.9669565,14.4161796 13.2617391,11.890333 9.98521739,11.890333 C6.70956522,11.890333 4.00347826,14.4161796 3.66869565,17.6468318 C1.87913043,15.9086053 0.869565217,13.5316487 0.869565217,10.997873 C0.869565217,5.90477231 4.95913043,1.76227803 9.98521739,1.76227803 C15.0121739,1.76227803 19.1017391,5.90477231 19.1017391,10.997873 C19.1017391,13.5316487 18.0921739,15.9086053 16.3026087,17.6468318 M9.98521739,0.881271167 C4.47913043,0.881271167 0,5.41933753 0,10.997873 C0,11.0207792 0.00347826087,11.0428043 0.00434782609,11.0665915 C0.00347826087,11.0736396 0,11.0789256 0,11.0859737 C0,16.6636281 4.47913043,21.2025755 9.98521739,21.2025755 C11.22,21.2025755 12.426087,20.9761568 13.5686957,20.5312483 C13.7930435,20.4440286 13.9043478,20.1885366 13.8191304,19.9612368 C13.7330435,19.7348181 13.4834783,19.6220492 13.2565217,19.7083879 C12.213913,20.115413 11.1130435,20.3215686 9.98521739,20.3215686 C7.92869565,20.3215686 6.03565217,19.6194062 4.50869565,18.4511911 C4.50695652,18.4097838 4.50347826,18.3674954 4.50347826,18.3252071 C4.50347826,15.2628272 6.9626087,12.7713398 9.98521739,12.7713398 C13.0086957,12.7713398 15.4678261,15.2628272 15.4678261,18.3252071 C15.4678261,18.3692574 15.4643478,18.4133078 15.4617391,18.4564771 L15.453913,18.5780561 C15.4486957,18.7489714 15.5408696,18.9093146 15.6921739,18.9868432 C15.753913,19.0194405 15.8217391,19.0352986 15.8886957,19.0352986 C15.9852174,19.0352986 16.08,19.0027014 16.1582609,18.9401499 C18.5808696,17.0045778 19.9713043,14.1095892 19.9713043,10.997873 C19.9713043,5.41933753 15.4913043,0.881271167 9.98521739,0.881271167" id="Fill-5" fill="#0E5AA7"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="text-[rgb(14,90,167)] text-[12px] font-medium whitespace-nowrap ml-[10px] block">
                                        <div className="text-[rgb(14,90,167)] text-[14px] font-medium">Login & Register</div>
                                    </span>
                                </Link>
                                <div className="box-border m-0 min-w-0 border-b-8 border-[rgb(245,245,245)] border-solid"></div>
                            </div>
                            <div className={`box-border m-0 min-w-0 flex flex-row relative items-stretch justify-between transition-all duration-300 transform ${allOpen ? '-translate-x-full' : 'translate-x-0'} pt-[116px]`}>
                                <div className="box-border m-0 min-w-0 flex flex-col w-full relative">
                                    <div className="box-border m-0 min-w-0 pl-[24px] pr-[24px] flex flex-col"></div>
                                    {menuData.map((menu, index) => {
                                        const isLast = index === menuData.length - 1;
                                        return menu?.styleAttribute === 'allCategories' ? (
                                            <div key={index}>
                                                <Link href={`/c/${menu.id}`} className="relative block p-[24px_16px_20px_24px] text-none" onClick={() => setAllOpen(true)}>
                                                    <div className="box-border m-0 min-w-0 flex justify-between">
                                                        <p className="font-medium text-[rgb(77,77,77)]">{menu.title}</p>
                                                        <svg id="RightArrow" viewBox="0 0 16 16" className="w-[16px] h-[16px]">
                                                            <path d="M4.89844.73411l-.53125.53125,6.64648,6.64551L4.19043,14.73411l.53125.53125L11.80957,8.1765a.37783.37783,0,0,0,0-.53125Z"></path>
                                                        </svg>
                                                    </div>
                                                </Link>
                                                <div className="box-border min-w-0 border-b border-[rgb(234,234,234)] border-solid w-[86%] m-auto"></div>
                                                <div className="flex flex-col absolute w-full left-full top-0">
                                                    {renderNodes(menu.children)}
                                                </div>
                                            </div>
                                        ) : (
                                            <div key={index}>
                                                <Link href={`/c/${menu.id}`} className="relative block p-[24px_16px_20px_24px] text-none">
                                                    <p className="font-medium text-[rgb(77,77,77)] inherit text-ellipsis capitalize whitespace-nowrap transition-all duration-500 leading-[15px] text-[12px]">
                                                        <span className="font-medium text-[14px] text-[rgb(77,77,77)]">{menu.title}</span>
                                                    </p>
                                                </Link>
                                                {!isLast && (
                                                    <div className="box-border min-w-0 border-b border-[rgb(234,234,234)] border-solid w-[86%] m-auto"></div>
                                                )}
                                            </div>
                                        );
                                    })}

                                    <div className="box-border m-0 min-w-0 border-b-8 border-[rgb(245,245,245)] border-solid"></div>
                                    <div className="box-border m-0 min-w-0 pb-[50px] pl-[24px] pr-[24px] flex flex-col">
                                        <div className="box-border m-0 min-w-0 flex border-b border-[rgb(234,234,234)] border-solid p-[24px_0px_20px] cursor-pointer">
                                            <p className="font-medium text-[14px] text-[rgb(77,77,77)]">
                                                Need Help? (254712345678)
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default MobileMenu;