'use client';
import { useState, useRef, useEffect } from 'react';

interface ReadMoreProps {
    html: string;              // HTML string from editor
    collapsedHeight?: number; // in px
}

export default function Highlights({ html, collapsedHeight = 130 }: ReadMoreProps) {
    const [expanded, setExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = contentRef.current;
        if (el && el.scrollHeight > collapsedHeight) {
            setIsOverflowing(true);
        }
    }, [html, collapsedHeight]);

    return (<>
        <section className="xs:pt-4 m-0 min-w-0 text-[#000408] mt-4">
            <div className="m-0 min-w-0 text-[#000408] font-bold pb-2 uppercase xs:font-semibold">highlights</div>
            <div ref={contentRef} className={`m-0 min-w-0 leading-[26px] ${expanded ? '!h-[240px] !overflow-visible !overflow-y-scroll' : 'h-[130px] overflow-hidden'}`} dangerouslySetInnerHTML={{ __html: html }} />
            {isOverflowing && (
                <div className="m-0 min-w-0 font-semibold pt-3 flex text-[#0e5aa7] cursor-pointer" onClick={() => setExpanded(!expanded)}>
                    {expanded ? (<><div className="m-0 min-w-0">Show less</div>
                        <div className="m-0 ml-1 min-w-0">
                            <svg height="14" width="25" viewBox="0 0 28 4"><path d="M0.632627 7.03823L7.47859 0.276189C7.76677 -0.00872871 8.23235 -0.00872875 8.52128 0.276189L15.3672 7.03823C15.7842 7.44954 15.7842 8.11873 15.3672 8.53076C14.9503 8.94207 14.2737 8.94207 13.8567 8.53076L7.99956 2.74621L2.14389 8.53076C1.72621 8.94207 1.04955 8.94207 0.632627 8.53076C0.215702 8.11873 0.215702 7.44954 0.632627 7.03823Z" fill="#0E5AA7"></path></svg>
                        </div></>) : (<><div className="m-0 min-w-0">Show more</div>
                            <div className="m-0 ml-1 min-w-0">
                                <svg height="14" width="25" viewBox="0 0 22 11"><path d="M13.2715 5.9999L8.70755 10.5079C8.51543 10.6979 8.20505 10.6979 8.01243 10.5079L3.44845 5.9999C3.1705 5.7257 3.1705 5.27957 3.44845 5.00488C3.7264 4.73068 4.17751 4.73068 4.45546 5.00488L8.36024 8.86125L12.264 5.00488C12.5425 4.73068 12.9936 4.73068 13.2715 5.00488C13.5495 5.27957 13.5495 5.7257 13.2715 5.9999Z" fill="#0E5AA7"></path></svg>
                            </div>
                        </>)}
                </div>)}

        </section>
    </>);
}