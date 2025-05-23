"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Link from "next/link";

type SlideType = {
    desktop_background_image: string;
    mobile_background_image: string;
    redirect_url: string;
    placement_id: string;
};

type PropType = {
    slides?: SlideType[]; // changed to string[]
    options?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
};

const SlimHeroBanner: React.FC<PropType> = (props) => {
    const { slides = [], options = { loop: true }, plugins = [] } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    const isReady = !!emblaApi;

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    if (!isReady || slides.length === 0) {
        return (
            <>
                <div className="m-0 min-w-0 mt-8 mb-8" ref={emblaRef}>
                    <div className="m-0 min-w-0 bg-[#EBF0F3] bg-gradient-to-r from-[#EBF0F3] via-[#f5f5f5] to-[#EBF0F3] bg-[length:200px_100%] bg-no-repeat rounded-lg shrink-0 h-[110px] md:h-[360px] xl:h-[288px] animate-shimmer"></div>
                </div>
            </>
        )
    }

    return (
        <>
            <section className="mt-6 mx-4 xs:mx-6 xs:mt-6 md:mx-10 md:mt-8 lg:mx-0">
                <div className="mt-8 mx-0 mb-0 min-w-0">
                    <div id="hero-banner" className="box-border min-w-0 flex max-w-[1232px] mx-auto relative w-full">
                        <div className="ltr relative w-full">
                            <div className="carousel-inner-wrapper relative">
                                <div className="carousel-viewpoint lg:rounded-lg cursor-grab active:cursor-grabbing overflow-hidden" ref={emblaRef}>
                                    <div className="carousel-container m-0 min-w-0 flex select-none tap-transparent will-change-transform">
                                        {slides.map((slide, index) => (
                                            <div key={index} className="banner-slide flex-none relative w-full ltr">
                                                <div className="grid gap-2 md:gap-4 transition-transform duration-200 ease-in-out h-full banner-slide">
                                                    <Link href="#" className="bg-center overflow-hidden transition-opacity duration-300 lg:aspect-custom-banner bg-white rounded-lg flex no-underline position-inherit">
                                                        <picture>
                                                            <source media="(min-width : 576px)" srcSet={slide.desktop_background_image} />
                                                            <img className="block max-w-full h-auto" src={slide.desktop_background_image} />
                                                        </picture>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button className="prev-button group text-white border-0 uppercase outline-none rounded-md text-sm flex items-center p-0 absolute top-1/2 transform -translate-y-1/2 transition-shadow duration-250 z-[1] bg-transparent h-12 w-12 left-4 disabled:border-[#b2b2b2] disabled:cursor-not-allowed" type="button" onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
                                    <div className="flex items-center justify-center h-full absolute top-0 left-0 w-full">
                                        <svg data-testid="ArrowDown" viewBox="0 0 22 14" className="relative left-1 top-[-1px] rotate-90 text-white h-9 w-9 transition-colors duration-250">
                                            <path fill="none" strokeLinejoin="round" d="M22 7.19l-9.873 9.873L2 6.937" className="stroke-white group-disabled:stroke-gray-400"></path>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                        </svg>
                                    </div>
                                </button>
                                <button className="next-button group text-white border-0 uppercase outline-none rounded-md text-sm flex items-center p-0 absolute top-1/2 -translate-y-1/2 transition-[box-shadow,border-color] duration-250 z-[1] bg-transparent h-12 w-12 right-4 disabled:border-[#b2b2b2] disabled:cursor-not-allowed" type="button" onClick={onNextButtonClick} disabled={nextBtnDisabled}>
                                    <div className="flex items-center justify-center h-full absolute top-0 left-0 w-full">
                                        <svg data-testid="ArrowDown" viewBox="0 0 22 14" className="relative right-1 top-[1px] -rotate-90 text-white h-9 w-9 transition-colors duration-250">
                                            <path fill="none" strokeLinejoin="round" d="M22 7.19l-9.873 9.873L2 6.937" className="stroke-white group-disabled:stroke-gray-400"></path>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div className="carousel-nav-wrapper relative">
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center m-0 min-w-0">
                                    {scrollSnaps.map((_, index) => (
                                        <DotButton
                                            key={index}
                                            onClick={() => onDotButtonClick(index)}
                                            className={'flex items-center cursor-pointer border border-transparent bg-white m-[0_4px] md:m-[0_6px] h-[4px] rounded-full md:h-[6px]'.concat(
                                                index === selectedIndex ? ' md:w-[20px] w-[14px]' : ' md:w-[6px] w-[4px]'
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SlimHeroBanner;