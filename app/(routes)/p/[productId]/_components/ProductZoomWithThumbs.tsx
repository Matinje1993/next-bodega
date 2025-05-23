'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, Navigation, Pagination } from 'swiper/modules'
import ReactImageMagnify from 'react-image-magnify';

export default function ProductZoomWithThumbs({ product }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="w-full max-w-md overflow-visible relative">
            {/* Main Image Swiper */}
            <Swiper
                modules={[Thumbs, Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="swiper-container m-0 min-w-0 mb-4 p-0"
            >
                {product?.links?.images?.map((img, index) => (
                    <SwiperSlide key={index} tag="a" className="m-0 min-w-0 bg-white rounded-lg overflow-hidden no-underline w-full flex items-center justify-center min-h-[480px]">
                        <div className="hidden md:block m-0 min-w-0">
                            <ReactImageMagnify
                                {...{
                                    smallImage: {
                                        alt: product.name,
                                        src: img.href.replace("Resize=200", "Resize=480"),
                                        isFluidWidth: true,
                                        className: "object-contain w-full h-auto",
                                    },
                                    largeImage: {
                                        isFluidWidth: true,
                                        src: img.href.replace("Resize=200", "Resize=480"),
                                        width: 1700,
                                        height: 1700,
                                    },
                                    isEnlargedImagePortalEnabledForTouch: true,
                                    pressDuration: 100,
                                    enlargedImagePortalId: 'zoom-portal',
                                    enlargedImageContainerDimensions: {
                                        width: "130%",
                                        height: "125%"
                                    },
                                    shouldUsePositiveSpaceLens: true,
                                }}
                            />
                        </div>
                        <div className="block md:hidden m-0 min-w-0">
                            <img alt={product.name} className="swiper-lazy" data-src={img.href.replace("Resize=200", "Resize=480")} src={img.href.replace("Resize=200", "Resize=480")} fetchPriority="high"></img>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnail Swiper */}
            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={6}
                watchSlidesProgress
                className="cursor-pointer swiper-container mb-0 min-h-auto p-0"
            >
                {product?.links?.images?.map((img, index) => (
                    <SwiperSlide key={index} tag="a" className={`swiper-container--thumbs rounded-[5px] min-h-auto w-[62px] h-[62px] bg-white flex items-center justify-center border ${index === activeIndex ? 'border-[#0e5aa7]' : 'border-[#dadada]'
                        }`}>
                        <img
                            src={img.href}
                            alt={product.name}
                            className={`h-[60px w-[60px] rounded hover:border-black transition`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Zoom Portal Container */}
            <div
                id="zoom-portal"
                className="box-border m-0 min-w-0 absolute top-0 left-full ml-6 z-[3] drop-shadow-md"
            />
        </div>
    )
}