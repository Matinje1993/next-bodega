"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import {
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Link from "next/link";

interface Component {
    __component: string;
    id: number;
    title: string | null;
    subtitle: string | null;
    ctaUrlWeb: string;
    ctaUrlApp: string;
    mediaWeb: string;
    mediaMobile: string;
    name: string;
    fontColor: string | null;
}

interface PageData {
    id: number;
    title: string;
    components: Component[];
}

interface PropType {
    pageId: number; // The ID that will be passed in as a prop
}

const OffersCarousel: React.FC<PropType> = ({ pageId }) => {
    const [pageData, setPageData] = useState<PageData | null>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });
    const isReady = !!emblaApi;

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    useEffect(() => {
        // Fetch the data using the provided pageId
        const fetchData = async () => {
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            const res = await fetch(`${baseUrl}/frame/page-components?ids=${pageId}`, {
                cache: 'no-store',
            });
            const json = await res.json();
            const matched = json.data.find((item: any) => item.id === pageId); // <- match by id

            if (!matched) {
                throw new Error('Page with the given ID not found.');
            }

            setPageData(matched);
        };

        fetchData();
    }, [pageId]);

    if (!isReady || !pageData) {
        return (
            <>
                <section className="min-w-0 mx-4 mt-6 xs:mx-6 md:mx-10 md:mt-8 lg:mx-0">
                    <div className="flex min-w-0 m-0">
                        <div className="w-full relative">
                            <div className="carousel-inner-wrapper relative">
                                <div className="carousel-viewpoint overflow-hidden" ref={emblaRef}>
                                    <div className="carousel-container m-0 min-w-0 flex select-none tap-transparent will-change-transform">
                                        <div className="pl-0 mr-5 min-w-0 rounded-lg h-[392px] w-[240px] flex-shrink-0 animate-shimmer bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-[length:200px_100%] bg-no-repeat xs:flex-shrink-1 xs:h-[392px] xs:w-[240px] sm:h-[392px] sm:w-[240px]">
                                        </div>
                                        <div className="mr-5 min-w-0 rounded-lg h-[392px] w-[240px] flex-shrink-0 animate-shimmer bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-[length:200px_100%] bg-no-repeat xs:flex-shrink-1 xs:h-[392px] xs:w-[240px] sm:h-[392px] sm:w-[240px]">
                                        </div>
                                        <div className="mr-5 min-w-0 rounded-lg h-[392px] w-[240px] flex-shrink-0 animate-shimmer bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-[length:200px_100%] bg-no-repeat xs:flex-shrink-1 xs:h-[392px] xs:w-[240px] sm:h-[392px] sm:w-[240px]">
                                        </div>
                                        <div className="mr-5 min-w-0 rounded-lg h-[392px] w-[240px] flex-shrink-0 animate-shimmer bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-[length:200px_100%] bg-no-repeat xs:flex-shrink-1 xs:h-[392px] xs:w-[240px] sm:h-[392px] sm:w-[240px]">
                                        </div>
                                        <div className="mr-5 min-w-0 rounded-lg h-[392px] w-[240px] flex-shrink-0 animate-shimmer bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-[length:200px_100%] bg-no-repeat xs:flex-shrink-1 xs:h-[392px] xs:w-[240px] sm:h-[392px] sm:w-[240px]">
                                        </div>
                                        <div className="pr-0 mr-5 min-w-0 rounded-lg h-[392px] w-[240px] flex-shrink-0 animate-shimmer bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-[length:200px_100%] bg-no-repeat xs:flex-shrink-1 xs:h-[392px] xs:w-[240px] sm:h-[392px] sm:w-[240px]">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    return (
        <>
            <section className="min-w-0 mx-4 mt-6 xs:mx-6 md:mx-10 md:mt-8 lg:mx-0">
                <div className="mt-8 min-w-0 offers-carousel">
                    <div className="mb-3 min-w-0 font-montserrat font-bold flex justify-between items-center whitespace-nowrap text-black text-base sm:text-2xl">
                        <div className="m-0 min-w-0 flex items-center gap-2">
                            <span className="truncate">{pageData.title}</span>
                        </div>
                    </div>
                    <div className="w-full relative">
                        <div className="carousel-inner-wrapper relative">
                            <div className="carousel-viewpoint overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                                <div className="carousel-container m-0 min-w-0 flex select-none tap-transparent will-change-transform">
                                    {pageData.components.map((component, index) => (
                                        <Link href={component.ctaUrlWeb} key={index} className="min-w-[260px] max-w-[260px] h-[392px] relative pr-5 inline-block rounded-[12px] text-black no-underline">
                                            <div className={`m-0 min-w-0 w-full h-full rounded-[12px] shadow-[0_0_16px_-12px_rgb(0,0,0)] bg-no-repeat bg-center bg-[length:100%_100%]`} style={{ backgroundImage: `url(${component.mediaWeb})` }}>
                                                <div className="m-0 min-w-0 pt-5 px-4 pb-0">
                                                    <h3 className="m-0 min-w-0 text-base font-bold text-black mb-1.5 text-left overflow-hidden text-ellipsis line-clamp-2 leading-[1.2] max-h-[38px] direction-ltr"></h3>
                                                    <p className="m-0 min-w-0 text-base font-bold text-black mb-1.5 text-left overflow-hidden text-ellipsis line-clamp-2 leading-[1.2] max-h-[38px] direction-ltr"></p>
                                                </div>
                                            </div>
                                        </Link>))}
                                </div>
                            </div>
                            <button className="prev-button absolute top-1/2 left-[-24px] z-[1] text-white uppercase text-[14px] outline-none p-0 bg-white border border-[#4d4d4d] rounded-full h-12 w-12 flex items-center transition-[box-shadow,border-color] duration-200 transform -translate-y-1/2 disabled:border-[rgb(178,178,178)] disabled:cursor-not-allowed" type="button" onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
                                <div className="absolute inset-0 flex items-center justify-center h-full w-full left-0 top-0">
                                    <svg id="ArrowDown" viewBox="0 0 22 14" className="relative left-1 -top-px w-6 h-6 rotate-90">
                                        <path fill="none" strokeLinejoin="round" d="M22 7.19l-9.873 9.873L2 6.937"></path>
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                    </svg>
                                </div>
                            </button>
                            <button className="next-button uppercase text-[rgb(102,102,102)] outline-none text-sm flex items-center p-0 absolute top-1/2 -translate-y-1/2 transition-[box-shadow,border-color] duration-200 z-[1] bg-white border border-[rgb(77,77,77)] rounded-full w-12 h-12 right-[-24px] disabled:border-[rgb(178,178,178)] disabled:cursor-not-allowed" type="button" onClick={onNextButtonClick} disabled={nextBtnDisabled}>
                                <div className="flex items-center justify-center absolute inset-0 h-full w-full">
                                    <svg id="ArrowDown" viewBox="0 0 22 14" className="relative right-1 top-px rotate-[-90deg] w-6 h-6">
                                        <path fill="none" strokeLinejoin="round" d="M22 7.19l-9.873 9.873L2 6.937"></path>
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OffersCarousel;