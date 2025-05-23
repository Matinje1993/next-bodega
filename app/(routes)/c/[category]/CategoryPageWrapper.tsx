"use client";
import React, { useState, useTransition, useEffect, useRef } from "react";
import Link from "next/link";
import FilterToggle from "./_components/FilterToggle";
import TodayDeals from "./_components/TodayDeals";
import BrandFilter from "./_components/BrandFilter";
import ProductSkeleton from "@/components/ui/ProductSkeleton";
import SortDropdown from "./_components/SortDropdown";
import dynamic from "next/dynamic";
import { useSearchParams } from 'next/navigation';
import { notFound } from 'next/navigation';

const CategoryContent = dynamic(() => import("./CategoryContent"), {
    ssr: false,
});

export default function CategoryPageWrapper({ category, children, brands, initialTotalProducts, initialProducts }) {
    const [products, setProducts] = useState(initialProducts);
    const [totalProducts, setTotalProducts] = useState(initialTotalProducts);
    const [isPending, startTransition] = useTransition();

    const searchParams = useSearchParams();
    const initialFilter = searchParams.get('filter') || '';
    const initialSortBy = searchParams.get('sortBy') || '';
    const [filter, setFilter] = useState(initialFilter);
    const [sortBy, setSortBy] = useState(initialSortBy);
    const hasMounted = useRef(false);
    const [isLoading, setIsLoading] = useState(false);

    const onChangeFilter = (newFilterString: string) => {
        startTransition(() => {
            setFilter(newFilterString);

            if (typeof window !== 'undefined') {
                const url = new URL(window.location.href);
                url.searchParams.set('filter', newFilterString);
                window.history.replaceState({}, '', url.pathname + url.search);
            }
        });
    };

    const onChangeSortBy = (newSortByString: string) => {
        startTransition(() => {
            setSortBy(newSortByString);

            if (typeof window !== 'undefined') {
                const url = new URL(window.location.href);
                url.searchParams.set('sortBy', newSortByString);
                window.history.replaceState({}, '', url.pathname + url.search);
            }
        });
    };

    useEffect(() => {
        const url = new URL(window.location.href);
        const latestFilter = url.searchParams.get('filter') || '';
        const latestSortBy = url.searchParams.get('sortBy') || '';
        setFilter(latestFilter);
        setSortBy(latestSortBy);
    }, [searchParams]);

    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true; // ✅ Skip first run
            return;
        }
        const fetchFilteredProducts = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`/api/v1/categories/${category.id}?filter=${filter}&sortBy=${sortBy}`);
                const data = await res.json();
                setProducts(data.products);
                setTotalProducts(data.total);
            } catch (error) {
                console.error('Failed to fetch filtered products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFilteredProducts();
    }, [filter, sortBy, category.id]);

    if (totalProducts === 0) {
        notFound();
    }

    return (
        <>
            <div className="m-0 min-w-0 flex justify-center flex-1">
                <div className="m-0 min-w-0 hidden md:flex flex-col w-auto md:w-[30%]">
                    <div className="m-0 min-w-0 flex flex-col justify-start sticky w-[355px] md:w-full">
                        <div className="m-0 min-w-0 flex flex-col relative float-left min-h-[1px] pr-3 pl-4 transform-none">
                            <div className="bg-white p-[15px]">
                                <div className="m-0 min-w-0 flex flex-col w-full capitalize">
                                    <div className="m-0 min-w-0 flex justify-between items-baseline">
                                        <p className="text-base font-bold text-black pb-4">
                                            {category.name}
                                        </p>
                                    </div>
                                    {children?.map((child) => (
                                        <div key={child.id} className="mx-0 my-auto min-w-0 pb-4 last:pb-0 flex items-center overflow-hidden w-full text-[12px] xs:text-[14px] leading-[1.2] cursor-default text-black bg-white pointer-events-auto">
                                            <div className="m-0 ml-0 min-w-0 w-full flex items-center justify-between">
                                                <Link href={`/c/${child.id}`} className="cursor-pointer inline no-underline">
                                                    <p className="text-[#333] text-sm font-normal">{child.name}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full flex flex-col">
                                <FilterToggle title="Deals">
                                    <TodayDeals filter={filter} onChangeFilter={onChangeFilter} />
                                </FilterToggle>
                                <FilterToggle title="Brand">
                                    <BrandFilter filter={filter} onChangeFilter={onChangeFilter} brands={brands} />
                                </FilterToggle>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-0 min-w-0 flex flex-col justify-start w-full h-full pl-4 pr-4 pt-0 lg:pl-3 lg:pr-3">
                    <div className="m-0 min-w-0 w-full min-h-0">
                        <div className="m-0 min-w-0 flex flex-col justify-between">
                            <div className="m-0 min-w-0 flex flex-col">
                                <div className="mt-0">
                                    <div className="m-0 min-w-0 flex flex-col">
                                        <div className="m-0 min-w-0 flex flex-col justify-between w-full sm:flex-row-reverse">
                                            <div className="m-0 min-w-0 hidden sm:flex">
                                                <SortDropdown sortBy={sortBy} onChangeSortBy={onChangeSortBy} />
                                            </div>
                                            <div className="max-w-full sm:max-w-[500px]">
                                                <div className="flex text-[#4d4d4d] text-[20px] leading-[1.3] font-normal mt-0 xs:mt-6 sm:mt-0">
                                                    <div className="m-0 min-w-0 flex flex-col">
                                                        <h1 className="text-[24px] mb-1 truncate w-full overflow-hidden whitespace-normal">
                                                            All Products
                                                        </h1>
                                                        <div className="whitespace-nowrap overflow-x-scroll">
                                                            <p className="text-[0.583333em] inline-block align-middle mr-2">{totalProducts} Results</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="min-w-0 flex flex-col flex-wrap justify-between my-[6px] mx-[-6px]" style={{ flex: '1 1 auto' }}>
                                            <ul className="block w-full relative list-none" style={{ flex: '1 1 auto' }}>
                                                <div className="m-0 min-w-0">
                                                    <div className="m-0 min-w-0 min-h-0 w-full">
                                                        <div className="m-0 min-w-0 flex flex-col">
                                                            <div className="m-0 min-w-0 w-full">
                                                                {isPending || isLoading ? (<ProductSkeleton />) :
                                                                    (<CategoryContent products={products} />)
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
