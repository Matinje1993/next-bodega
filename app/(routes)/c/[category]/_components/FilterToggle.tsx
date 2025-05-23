"use client";
import { useState } from 'react';

export default function FilterToggle({ title, children }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <div className="bg-white cursor-pointer flex items-center justify-between px-4 py-4 text-black font-bold text-[14px] md:text-[16px] capitalize" onClick={() => setIsOpen(!isOpen)}>
                <div className="ml-0">
                    <div className="m-0 min-w-0 flex items-center">
                        <span>{title}</span>
                    </div>
                </div>
                <div className={`relative transition-all duration-300 ease-in-out ${isOpen ? "top-0 rotate-180" : "top-[-1px] rotate-0"}`}>
                    {isOpen ? (<svg id="Minus" viewBox="0 0 120 120" className="w-4 h-4">
                        <g>
                            <rect height="6" width="100" x="10" y="54"></rect>
                        </g>
                    </svg>) : (<svg id="Plus" viewBox="-1 -1 26 26" className="w-4 h-4">
                        <g>
                            <polygon points="12.5,2 11.5,2 11.5,11.5 2,11.5 2,12.5 11.5,12.5 11.5,22 12.5,22 12.5,12.5 22,12.5 22,11.5 12.5,11.5 " strokeWidth="2"></polygon>
                        </g>
                    </svg>)}
                </div>
            </div>
            <div className="border-b border-[#f5f5f5]">
                {isOpen && children}
            </div>
        </>
    );
}