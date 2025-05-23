"use client";
import { updateFilterParam } from '@/lib/updateFilterParam';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo } from 'react';

export default function BrandFilter({
    brands,
    filter,
    onChangeFilter
}: {
    brands: { name: string; productCount: number }[];
    filter: string;
    onChangeFilter: (newFilter: string) => void;
}) {

    const [search, setSearch] = useState('');
    const [showAll, setShowAll] = useState(false);

    // All brand names from props, filtering out falsy values
    const brandNames = brands
        .map(b => b.name)
        .filter(Boolean)
        // Normalize apostrophes to normal single quote
        .map(name => name.replace(/\\'/g, "'")) as string[];

    const brandCountMap = useMemo(() => {
        const map = new Map<string, number>();
        brands.forEach(({ name, productCount }) => {
            map.set(name.replace(/\\'/g, "'"), productCount);
        });
        return map;
    }, [brands]);

    // Parse filter param into separate parts by '&'
    const filterParts = useMemo(() => filter.split('&').filter(Boolean), [filter]);

    // Parse selected brands from brandFilterPart
    const selectedBrands = useMemo(() => {
        if (!filter) return [];

        const filterDecoded = decodeURIComponent(filter);

        const normalizedFilter = filterDecoded.replace(/\\'/g, '__APOST__');

        const brandsPart = normalizedFilter.match(/brand_name:((?:'[^']*'(?:,)?)+)/);
        if (!brandsPart) return [];

        const brandsRaw = brandsPart[1]; // e.g. "'GLENFIDDICH','GRANT__APOST__S'"

        const brandNames: string[] = [];
        const regex = /'([^']*)'/g; // simple lazy match between single quotes

        let match;
        while ((match = regex.exec(brandsRaw)) !== null) {
            // Replace placeholder back to apostrophe:
            brandNames.push(match[1].replace(/__APOST__/g, "'").trim());
        }

        return brandNames;
    }, [filter]);

    // Filter brands by search input
    const filteredBrands = useMemo(() => {
        return brandNames.filter(b => b.toLowerCase().includes(search.toLowerCase()));
    }, [brandNames, search]);

    // Toggle brand selection and update URL filter param
    const toggleBrand = (brand: string) => {
        const updatedBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter(b => b !== brand)
            : [...selectedBrands, brand];

        const newFilters: string[] = [];

        if (updatedBrands.length > 0) {
            const brandString = updatedBrands
                .map(b => `'${b.replace(/'/g, "\\'")}'`)
                .join(',');
            newFilters.push(`brand_name:${brandString}`);
        }

        const otherFilters = filterParts.filter(part => !part.startsWith('brand_name:'));
        newFilters.push(...otherFilters);

        const newFilterString = newFilters.join('&');

        onChangeFilter(newFilterString);
    };

    return (
        <div className="bg-white">
            <div className="pt-0 px-4 pb-4">
                <div className="flex flex-col">
                    <div className="box-border m-0 min-w-0 bg-[rgb(244,244,244)] flex items-center w-full rounded-[16px] px-3 py-2 pl-6">
                        <input
                            className="pl-[5px] bg-transparent border-0 focus:outline-none w-full"
                            placeholder="Search brands"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <svg id="Search" viewBox="0 0 16 16" className="w-[22px] h-[15px]">
                            <path
                                d="M8.28585 0.678589C12.4872 0.678589 15.893 4.08442 15.893 8.28573C15.893 10.1163 15.2464 11.7959 14.1691 13.1085L17.0305 15.9697C17.3234 16.2626 17.3234 16.7375 17.0305 17.0303C16.7642 17.2966 16.3475 17.3208 16.0539 17.103L15.9698 17.0303L13.1086 14.169C11.796 15.2463 10.1164 15.8929 8.28585 15.8929C4.08454 15.8929 0.678711 12.487 0.678711 8.28573C0.678711 4.08442 4.08454 0.678589 8.28585 0.678589ZM8.28585 2.17859C4.91297 2.17859 2.17871 4.91285 2.17871 8.28573C2.17871 11.6586 4.91297 14.3929 8.28585 14.3929C9.86997 14.3929 11.3132 13.7897 12.3985 12.8006L12.6035 12.6034C13.7117 11.4939 14.393 9.96937 14.393 8.28573C14.393 4.91285 11.6587 2.17859 8.28585 2.17859Z"
                                fill="#747474"
                            ></path>
                        </svg>
                    </div>
                    <ul className="overflow-auto h-full mt-4 list-none">
                        {filteredBrands.length > 0 ? (
                            (showAll ? filteredBrands : filteredBrands.slice(0, 7)).map((brand) => {
                                const isActive = selectedBrands.includes(brand);
                                const count = brandCountMap.get(brand) || 0;
                                return (
                                    <li
                                        key={brand}
                                        onClick={() => toggleBrand(brand)}
                                        className={`border-0 items-center cursor-pointer inline-block px-4 py-2 rounded-lg font-bold m-1 ${isActive ? 'bg-[#0e5aa7] text-white' : 'bg-blue-900/5 text-blue-900'
                                            }`}
                                    >
                                        <div className="text-[12px] xs:text-[14px] min-w-0 flex pb-0 my-0 mx-auto bg-white items-center overflow-hidden w-full text-black cursor-default pointer-events-auto leading-tight">
                                            {isActive && (
                                                <div className="mr-2 flex h-5 w-5 min-w-0">
                                                    <svg id="CheckDark" viewBox="0 0 20 20" fill="none" className="w-[20px] h-[20px]">
                                                        <circle cx="10" cy="10" r="10" fill="#0e5aa7"></circle>
                                                        <path d="M5 9.5L9 13.5L16 6.5" stroke="white" strokeWidth="1.5"></path>
                                                    </svg>
                                                </div>
                                            )}
                                            <div className="m-0 min-w-0 w-full flex items-center justify-between">
                                                <a className="cursor-pointer inline no-underline">
                                                    <div className="text-gray-600 font-normal text-base font-montserrat">{brand}</div>
                                                </a>
                                                <p className="text-gray-400 text-[10px]">({count})</p>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        ) : (
                            <div className="flex items-center h-8 px-4">
                                <p className="text-[rgb(207,207,207)]">No results found</p>
                            </div>
                        )}
                    </ul>
                    {filteredBrands.length > 7 && (
                        <p
                            onClick={() => setShowAll((prev) => !prev)}
                            className="text-[#0e5aa7] cursor-pointer inline-block text-sm font-medium mt-4 ml-1"
                        >
                            {showAll ? 'Show less' : 'Show more'}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}