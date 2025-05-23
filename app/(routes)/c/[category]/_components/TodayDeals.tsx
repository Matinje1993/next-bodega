"use client";
import { useMemo } from 'react';

export default function TodayDeals({
    filter,
    onChangeFilter
}: {
    filter: string;
    onChangeFilter: (newFilter: string) => void;
}) {
    const filterParts = useMemo(() => filter.split('&').filter(Boolean), [filter]);
    const isActive = filterParts.includes('deal:true');

    const toggleDeal = () => {
        const newParts = filterParts.filter(p => p !== 'deal:true');
        if (!isActive) {
            newParts.push('deal:true');
        }
        onChangeFilter(newParts.join('&'));
    };

    return (
        <div className="bg-white">
            <div className="pt-0 px-4 pb-4">
                <div className="w-full flex items-center overflow-hidden bg-white text-black text-xs sm:text-sm leading-[1.2] py-0 pb-4 last:pb-0 m-auto cursor-default pointer-events-auto">
                    {isActive && (
                        <div className="mr-2 min-w-0 flex h-5 w-5">
                            <svg
                                id="CheckDark"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="w-[20px] h-[20px]"
                            >
                                <circle cx="10" cy="10" r="10" fill="#0e5aa7"></circle>
                                <path
                                    d="M5 9.5L9 13.5L16 6.5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                ></path>
                            </svg>
                        </div>
                    )}
                    <div className="m-0 min-w-0 w-full flex items-center justify-between">
                        <a
                            className="cursor-pointer inline no-underline"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDeal();
                            }}
                        >
                            <div className="text-black text-base font-normal font-montserrat">
                                Today's Deals
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}