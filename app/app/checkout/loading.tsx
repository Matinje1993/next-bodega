"use client";
import React from 'react'
import ContentLoader from 'react-content-loader'

export default function Loading() {

    return (<div className="min-w-0 mx-auto not-italic font-montserrat max-w-[1232px]">
        <div className="m-0 min-w-0 pt-4 pb-4 hidden md:block">
            <div className="m-0 min-w-0 inline-block">
                <a href="/app/cart" className=" text-[#0e5aa7] normal-case no-underline cursor-pointer outline-none transition-shadow transition-bg duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded text-[14px] w-auto font-bold h-[14px] flex ">
                    <svg id="ArrowLeft" viewBox="0 0 24 24" className="w-[16px] h-[16px]"><path d="M17.2,2.4l-0.7-0.7l-9.9,9.9c-0.2,0.2-0.2,0.5,0,0.7c0,0,0,0,0,0l10.1,10.1l0.7-0.7l-9.8-9.8L17.2,2.4z"></path></svg>
                    <span className="mx-2 my-0 min-w-0">Back to Cart</span>
                </a>
            </div>
        </div>
        <div className="flex flex-col relative mx-2 pt-2 pb-4 min-w-0 xs:pb-6 xs:mx-0 sm:flex-col md:flex-row md:static">
            <div className="min-w-0 w-full mr-0 xs:mr-0 sm:mr-6 sm:w-full md:w-2/3">
                <div className="m-0 min-w-0 relative block">
                    <ContentLoader
                        speed={2}
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        viewBox="0 0 800 210"
                        aria-label="Loading interface..."
                        title="Loading interface..."
                        role="image"
                        preserveAspectRatio="none"
                    >
                        <rect x="26" y="16" rx="5" ry="5" width="918" height="80" />
                        <rect x="26" y="106" rx="5" ry="5" width="918" height="40" />
                        <rect x="26" y="160" rx="5" ry="5" width="418" height="30" />
                    </ContentLoader>
                    <div className="min-w-0 block bg-white ml-1 xs:ml-6">
                        <ContentLoader
                            speed={2}
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                            viewBox="0 0 800 210"
                            aria-label="Loading interface..."
                            title="Loading interface..."
                            role="image"
                            preserveAspectRatio="none"
                        >
                            <rect x="16" y="16" rx="5" ry="5" width="148" height="30"></rect>
                            <rect x="670" y="106" rx="5" ry="5" width="120" height="30"></rect>
                            <rect x="16" y="56" rx="5" ry="5" width="772" height="40"></rect>
                            <rect x="450" y="106" rx="5" ry="5" width="338" height="30"></rect>
                            <rect x="16" y="146" rx="5" ry="5" width="50" height="50"></rect>
                            <rect x="76" y="146" rx="5" ry="5" width="50" height="50"></rect>
                            <rect x="136" y="146" rx="5" ry="5" width="50" height="50"></rect>
                        </ContentLoader>
                    </div>
                    <span className="m-0 min-w-0 absolute bottom-[200px] w-full text-center top-[35%] text-sm xs:text-base">
                        Please hold on while we prepare to checkout your cart...
                    </span>
                    <ContentLoader
                        speed={2}
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        viewBox="0 0 800 180"
                        aria-label="Loading interface..."
                        title="Loading interface..."
                        role="image"
                        preserveAspectRatio="none"
                    >
                        <rect x="26" y="16" rx="5" ry="5" width="200" height="20"></rect>
                        <rect x="646" y="16" rx="5" ry="5" width="200" height="20"></rect>
                        <rect x="26" y="46" rx="5" ry="5" width="918" height="80"></rect>
                    </ContentLoader>
                </div>
            </div>
            <div className="min-w-0 self-start w-full m-0 pb-0 md:w-1/2 md:sticky md:top-[132px] font-montserrat">
                <h2 className="min-w-0 text-base font-bold text-black mx-2 mb-4 xs:mx-6 md:mx-0 md:mt-0">
                    <div className="m-0 min-w-0 block sm:hidden ">
                        <ContentLoader
                            speed={2}
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                            viewBox="0 0 450 20"
                            aria-label="Loading interface..."
                            title="Loading interface..."
                            role="image"
                            preserveAspectRatio="none"
                        >
                            <rect x="0" y="4" rx="5" ry="5" width="160" height="12"></rect>
                        </ContentLoader>
                    </div>
                    <div className="m-0 min-w-0 hidden sm:block md:hidden">
                        <ContentLoader
                            speed={2}
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                            viewBox="0 0 800 20"
                            aria-label="Loading interface..."
                            title="Loading interface..."
                            role="image"
                            preserveAspectRatio="none"
                        >
                            <rect x="0" y="4" rx="5" ry="5" width="160" height="12"></rect>
                        </ContentLoader>
                    </div>
                    <div className="m-0 min-w-0 hidden md:block">
                        <ContentLoader
                            speed={2}
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                            viewBox="0 0 400 20"
                            aria-label="Loading interface..."
                            title="Loading interface..."
                            role="image"
                            preserveAspectRatio="none"
                        >
                            <rect x="0" y="4" rx="5" ry="5" width="160" height="12"></rect>
                        </ContentLoader>
                    </div>
                </h2>
                <div className="min-w-0 m-0 p-0 xs:px-4 xs:mx-6 md:mx-0">
                    <div className="m-0 min-w-0 block sm:hidden">
                        <ContentLoader
                            speed={2}
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                            viewBox="0 0 450 122"
                            aria-label="Loading interface..."
                            title="Loading interface..."
                            role="image"
                            preserveAspectRatio="none"
                        >
                            <rect x="0" y="10" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="330" y="10" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="0" y="48" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="330" y="48" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="0" y="86" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="330" y="86" rx="5" ry="5" width="120" height="10"></rect>
                        </ContentLoader>
                    </div>
                    <div className="m-0 min-w-0 hidden sm:block md:hidden">
                        <ContentLoader
                            speed={2}
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                            viewBox="0 0 800 122"
                            aria-label="Loading interface..."
                            title="Loading interface..."
                            role="image"
                            preserveAspectRatio="none"
                        >
                            <rect x="0" y="10" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="680" y="10" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="0" y="48" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="680" y="48" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="0" y="86" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="680" y="86" rx="5" ry="5" width="120" height="10"></rect>
                        </ContentLoader>
                    </div>
                    <div className="m-0 min-w-0 hidden md:block">
                        <ContentLoader
                            speed={2}
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                            viewBox="0 0 400 244"
                            aria-label="Loading interface..."
                            title="Loading interface..."
                            role="image"
                            preserveAspectRatio="none"
                        >
                            <rect x="0" y="10" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="280" y="10" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="0" y="48" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="280" y="48" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="0" y="86" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="280" y="86" rx="5" ry="5" width="120" height="10"></rect>
                            <rect x="0" y="130" rx="1" ry="1" width="400" height="50"></rect>
                            <rect x="0" y="196" rx="1" ry="1" width="400" height="50"></rect>
                        </ContentLoader>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}