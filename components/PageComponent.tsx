"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// Define types for the data structure
interface Component {
    __component: string;
    id: number;
    background_color: string | null;
    title: string;
    alt_text: string | null;
    image_web: string | null;
    image_mobile: string | null;
    cta_url_web: string;
    cta_url_mobile: string;
    media_web: string;
    media_mobile: string;
    name: string;
    rr_personalise: string | null;
}

interface PageData {
    id: number;
    title: string;
    components: Component[];
}

interface PageComponentProps {
    pageId: number; // The ID that will be passed in as a prop
}

const PageComponent: React.FC<PageComponentProps> = ({ pageId }) => {
    const [pageData, setPageData] = useState<PageData | null>(null);

    useEffect(() => {
        // Fetch the data using the provided pageId
        const fetchData = async () => {
            const res = await fetch(`/api/v1/frame/page-components?ids=${pageId}`, {
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

    if (!pageData) {
        return (
            <div className="m-0 mt-8 mb-8 min-w-0">
                <div className="m-0 min-w-0 flex">
                    <div className="min-w-0 bg-[#EBF0F3] [background-image:linear-gradient(90deg,#EBF0F3,#f5f5f5,#EBF0F3)] [background-size:200px_100%] bg-no-repeat shrink-0 rounded-full w-[100px] h-[100px] mr-[33px] animate-shimmer"></div>
                    <div className="min-w-0 bg-[#EBF0F3] [background-image:linear-gradient(90deg,#EBF0F3,#f5f5f5,#EBF0F3)] [background-size:200px_100%] bg-no-repeat shrink-0 rounded-full w-[100px] h-[100px] mr-[33px] animate-shimmer"></div>
                    <div className="min-w-0 bg-[#EBF0F3] [background-image:linear-gradient(90deg,#EBF0F3,#f5f5f5,#EBF0F3)] [background-size:200px_100%] bg-no-repeat shrink-0 rounded-full w-[100px] h-[100px] mr-[33px] animate-shimmer"></div>
                    <div className="min-w-0 bg-[#EBF0F3] [background-image:linear-gradient(90deg,#EBF0F3,#f5f5f5,#EBF0F3)] [background-size:200px_100%] bg-no-repeat shrink-0 rounded-full w-[100px] h-[100px] mr-[33px] animate-shimmer"></div>
                    <div className="min-w-0 bg-[#EBF0F3] [background-image:linear-gradient(90deg,#EBF0F3,#f5f5f5,#EBF0F3)] [background-size:200px_100%] bg-no-repeat shrink-0 rounded-full w-[100px] h-[100px] mr-[33px] animate-shimmer"></div>
                    <div className="min-w-0 bg-[#EBF0F3] [background-image:linear-gradient(90deg,#EBF0F3,#f5f5f5,#EBF0F3)] [background-size:200px_100%] bg-no-repeat shrink-0 rounded-full w-[100px] h-[100px] mr-[33px] animate-shimmer"></div>
                    <div className="min-w-0 bg-[#EBF0F3] [background-image:linear-gradient(90deg,#EBF0F3,#f5f5f5,#EBF0F3)] [background-size:200px_100%] bg-no-repeat shrink-0 rounded-full w-[100px] h-[100px] mr-[33px] animate-shimmer"></div>
                    <div className="min-w-0 bg-[#EBF0F3] [background-image:linear-gradient(90deg,#EBF0F3,#f5f5f5,#EBF0F3)] [background-size:200px_100%] bg-no-repeat shrink-0 rounded-full w-[100px] h-[100px] mr-[33px] animate-shimmer"></div>
                    <div className="min-w-0 bg-[#EBF0F3] [background-image:linear-gradient(90deg,#EBF0F3,#f5f5f5,#EBF0F3)] [background-size:200px_100%] bg-no-repeat shrink-0 rounded-full w-[100px] h-[100px] mr-[33px] animate-shimmer"></div>
                    <div className="min-w-0 bg-[#EBF0F3] [background-image:linear-gradient(90deg,#EBF0F3,#f5f5f5,#EBF0F3)] [background-size:200px_100%] bg-no-repeat shrink-0 rounded-full animate-shimmer"></div>
                </div>
            </div>
        ); // You can replace this with a spinner or loading component
    }

    return (
        <section className="mt-6 mx-4 xs:mx-6 xs:mt-6 md:mx-10 md:mt-8 lg:mx-0">
            <div id="category-circles" className="m-0 w-min-0">
                <div className="flex m-0 w-min-0">
                    <div className="m-0 min-w-0 grid gap-y-6 gap-x-7 grid-cols-4 w-full lg:[grid-template-columns:repeat(auto-fit,_125px)] lg:gap-x-8 sm:grid-cols-5">
                        {pageData.components.map((component, index) => (
                        <div key={index} className="p-0 relative w-[60px] sm:w-[125px]">
                            <div className="flex flex-col items-center justify-center">
                                <Link href={component.cta_url_web} className="group block outline-none w-full no-underline transition-opacity duration-300 hover:opacity-75">
                                    <div className="flex items-center justify-center bg-[#fafafa] rounded-full box-border overflow-hidden h-[60px] sm:h-[125px] w-full">
                                        <img height="auto" width="100%" src={component.media_web} alt={component.title} className="max-w-full max-h-full w-auto h-auto transition-transform duration-200 ease-in-out group-hover:scale-[1.03]"></img>
                                    </div>
                                    <div className="text-black font-montserrat font-semibold text-xs sm:text-base mt-4 overflow-hidden text-center line-clamp-2">{component.title}</div>
                                </Link>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageComponent;