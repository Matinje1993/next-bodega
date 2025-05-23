"use client";
import React from "react";
import { Product } from "@/types";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useCart from "@/hooks/use-cart";
import { useActiveProduct } from "@/hooks/use-active-product";
import ProductCard from "./ui/product-card";

interface Placement {
  htmlElementId: string;
  strategyName: string;
  strategyMessage: string;
  recommendedProducts: Product[];
}

type CarouselFeaturedProps = {
  data: Placement[];
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
};
const ProductCarousel: React.FC<CarouselFeaturedProps> = (props) => {
  const { data = [], options = { align: 'start' }, plugins = [] } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const placement = data?.[0] ?? {
    htmlElementId: "",
    strategyName: "",
    strategyMessage: "",
    recommendedProducts: []
  };

  return (
    <section className="ml-4 mr-4 mt-6 xs:ml-6 xs:mr-6 md:ml-10 md:mr-10 md:mt-8 lg:ml-0 lg:mr-0">
      {data.length === 0 || data[0]?.recommendedProducts.length === 0 ? (
        <div className="m-0 min-w-0 overflow-hidden flex">
          <div className="mr-[5px] min-w-0 border border-dashed border-[#e6e6e6] rounded-[2px] pl-[12px] pr-[12px] pt-[32px] w-[194px] shrink-0">
            <div className="m-0 min-w-0 shrink-0 h-[156px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

            </div>
            <div className="mt-[8px] mb-0 mx-0 min-w-0 h-[87px]">
              <div className="box-border m-0 min-w-0 shrink-0 h-[12px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

              </div>
              <div className="box-border mt-[5px] mx-0 min-w-0 shrink-0 h-[12px] w-[80%] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

              </div>
            </div>
            <div className="m-0 min-w-0 shrink-0 h-[16px] w-[74px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

            </div>
            <div className="min-w-0 border-t border-dashed border-[#e6e6e6] rounded-[2px] flex items-center justify-between p-2 shrink-0 mt-[32px] mx-[-12px] mb-0">
              <div className="m-0 min-w-0 shrink-0 h-[12px] w-[48%] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

              </div>
              <div className="box-border m-0 min-w-0 shrink-0 h-[32px] w-[64px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

              </div>
            </div>
          </div>
          <div className="mr-[5px] min-w-0 border border-dashed border-[#e6e6e6] rounded-[2px] pl-[12px] pr-[12px] pt-[32px] w-[194px] shrink-0">
            <div className="m-0 min-w-0 shrink-0 h-[156px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

            </div>
            <div className="mt-[8px] mb-0 mx-0 min-w-0 h-[87px]">
              <div className="box-border m-0 min-w-0 shrink-0 h-[12px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

              </div>
              <div className="box-border mt-[5px] mx-0 min-w-0 shrink-0 h-[12px] w-[80%] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

              </div>
            </div>
            <div className="m-0 min-w-0 shrink-0 h-[16px] w-[74px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

            </div>
            <div className="min-w-0 border-t border-dashed border-[#e6e6e6] rounded-[2px] flex items-center justify-between p-2 shrink-0 mt-[32px] mx-[-12px] mb-0">
              <div className="m-0 min-w-0 shrink-0 h-[12px] w-[48%] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

              </div>
              <div className="box-border m-0 min-w-0 shrink-0 h-[32px] w-[64px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

              </div>
            </div>
          </div>
          <div className="mr-[5px] min-w-0 border border-dashed border-[#e6e6e6] rounded-[2px] pl-[12px] pr-[12px] pt-[32px] w-[194px] shrink-0">
            <div className="m-0 min-w-0 shrink-0 h-[156px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

            </div>
            <div className="mt-[8px] mb-0 mx-0 min-w-0 h-[87px]">
              <div className="box-border m-0 min-w-0 shrink-0 h-[12px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

              </div>
              <div className="box-border mt-[5px] mx-0 min-w-0 shrink-0 h-[12px] w-[80%] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

              </div>
            </div>
            <div className="m-0 min-w-0 shrink-0 h-[16px] w-[74px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

            </div>
            <div className="min-w-0 border-t border-dashed border-[#e6e6e6] rounded-[2px] flex items-center justify-between p-2 shrink-0 mt-[32px] mx-[-12px] mb-0">
              <div className="m-0 min-w-0 shrink-0 h-[12px] w-[48%] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

              </div>
              <div className="box-border m-0 min-w-0 shrink-0 h-[32px] w-[64px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

              </div>
            </div>
          </div>
        </div>
      ) : (<>
        <div className="mb-3 font-montserrat font-bold text-[24px] flex justify-between items-center text-black">
          <div className="flex items-center gap-2 truncate">{placement.strategyMessage}</div>
        </div>

        <div className="product-carousel flex flex-col w-full">
          <div className="relative w-full">
            <div className="carousel-inner-wrapper relative">
              <div className="carousel-viewpoint lg:rounded-lg cursor-grab active:cursor-grabbing overflow-hidden" ref={emblaRef}>
                <div className="carousel-container flex select-none touch-none tap-transparent will-change-transform">
                  {placement.recommendedProducts.map((product, index) => {
                    return (<div key={index} className="p-1 w-[168px] sm:p-0 flex-none relative sm:w-[178px]">
                      <ProductCard product={product} />
                    </div>)
                  })}
                </div>
              </div>

              <button type="button" className="prev-button uppercase text-[rgb(102,102,102)] outline-none text-[14px] flex items-center p-0 absolute top-1/2 -translate-y-1/2 transition-[box-shadow,border-color] duration-200 z-[1] bg-white border-t border-r border-b border-t-[rgb(77,77,77)] border-r-[rgb(77,77,77)] border-b-[rgb(77,77,77)] rounded-r-md h-[64px] w-[27px] left-0 hidden lg:block disabled:border-[rgb(178,178,178)] disabled:cursor-not-allowed disabled:visible" onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
                <div className="flex items-center justify-center h-full w-full absolute top-0 left-0">
                  <svg viewBox="0 0 11 19" fill="none" height="19px" width="11px" className="relative left-[4px] rotate-[180deg] h-[24px] w-[24px] transition-[stroke] duration-250">
                    <path d="M2 2L9 9.22222L2 17" stroke="#686868" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
              </button>
              <button type="button" className="next-button text-white uppercase outline-none text-[14px] flex items-center p-0 absolute top-1/2 -translate-y-1/2 transition-[box-shadow,border-color] duration-200 z-[1] bg-white border-t border-b border-l border-t-[rgb(77,77,77)] border-b-[rgb(77,77,77)] border-l-[rgb(77,77,77)] rounded-l-md h-[64px] w-[27px] right-0 hidden lg:block disabled:border-[rgb(178,178,178)] disabled:cursor-not-allowed disabled:visible" onClick={onNextButtonClick} disabled={nextBtnDisabled}>
                <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full">
                  <svg viewBox="0 0 11 19" fill="none" height="19px" width="11px" className="relative h-[24px] w-[24px] transition-[stroke] duration-250">
                    <path d="M2 2L9 9.22222L2 17" stroke="#686868" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </>)}
    </section>
  );
};

export default ProductCarousel;