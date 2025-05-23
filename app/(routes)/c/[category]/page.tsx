import { type Metadata } from "next";
import Link from "next/link";
import { PrismaClient } from '@/lib/generated/prisma';
import { notFound } from 'next/navigation';
import { getChildrenCategories } from '@/lib/categories';
import CategoryPageWrapper from "./CategoryPageWrapper";

const prisma = new PrismaClient();

function parseFilterString(filterStr: string | undefined) {
    if (!filterStr) return {};

    const filters: Record<string, string[] | boolean> = {};

    // Split by `&` to get each filter entry
    const entries = filterStr.split("&");

    for (const entry of entries) {
        const [key, rawValue] = entry.split(":");

        if (!key || !rawValue) continue;

        // Check if it's a boolean
        if (rawValue === "true" || rawValue === "false") {
            filters[key] = rawValue === "true";
        } else {
            // Remove wrapping quotes and handle escaped quotes
            const cleaned = rawValue
                .replace(/^'/, "")
                .replace(/'$/, "")
                .replace(/\\'/g, "'");

            // Split multiple values by comma
            const values = cleaned.split(",").map((v) => v.replace(/^'/, "").replace(/'$/, ""));
            filters[key] = values;
        }
    }

    return filters;
}

export async function generateMetadata({
    params,
}: {
    params: { category: string };
}): Promise<Metadata> {
    let category = await prisma.category.findUnique({
        where: { id: params.category },
        select: { name: true },
    });
    if (!category) return {
        title: "Bodega Store",
        description: "E-ecommerce, selling products, and new productivity",
    };

    return {
        title: 'Buy ' + category.name + ' Online',
        description: "E-ecommerce, selling products, and new productivity"
    };
}

async function getCategoryWithAncestors(categoryId: string) {
    let category = await prisma.category.findUnique({
        where: { id: categoryId },
        select: { id: true, name: true, parentId: true },
    });

    if (!category) return null;

    const ancestors = [];
    let current = category;

    // Climb up the tree
    while (current.parentId) {
        const parent = await prisma.category.findUnique({
            where: { id: current.parentId },
            select: { id: true, name: true, parentId: true },
        });
        if (!parent) break;
        ancestors.unshift(parent); // add parent to front
        current = parent;
    }

    return { category, ancestors };
}

const CategoryPage = async ({
    params,
    searchParams,
}: {
    params: { category: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const data = await getCategoryWithAncestors(params.category);

    if (!data) {
        notFound();
    }
    const filterStr = Array.isArray(searchParams.filter)
        ? searchParams.filter.join("&") // Combine array into a single string
        : searchParams.filter;

    const parsedFilters = parseFilterString(filterStr);
    const brandNames = parsedFilters.brand_name as string[] | undefined;
    const deal = parsedFilters.deal as boolean | undefined;
    const rawSortBy = searchParams.sortBy;
    const sortBy = Array.isArray(rawSortBy) ? rawSortBy[0] : rawSortBy;
    const { category, ancestors } = data;
    const children = await getChildrenCategories(params.category);
    const products = await prisma.product.findMany({
        where: {
            category: {
                some: {
                    categoryId: params.category, // <- this must be a valid `String` category ID
                },
            },
            ...(brandNames?.length
                ? {
                    brand: {
                        name: {
                            in: brandNames,
                        },
                    },
                }
                : {}),
            ...(deal !== undefined
                ? {
                    price: {
                        discount: {
                            is: {
                                value: {
                                    gt: 0,
                                },
                            },
                        },
                    }
                }
                : {}),
        },
        orderBy:
            sortBy === 'price_asc'
                ? { price: { price: 'asc' } }
                : sortBy === 'price_desc'
                    ? { price: { price: 'desc' } }
                    : undefined,
        include: {
            brand: true,
            category: {
                select: {
                    category: {
                        select: {
                            id: true,
                            level: true,
                            name: true,
                            url: true,
                        },
                    },
                },
            },
            price: {
                include: {
                    discount: true, // include discount here
                },
            },
            stock: true,
            unit: true,
            availability: true,
            offers: true,
            links: true,
        },
    });

    const totalProducts = await prisma.product.count({
        where: {
            category: {
                some: {
                    categoryId: params.category, // valid category ID string
                },
            },
            ...(brandNames?.length
                ? {
                    brand: {
                        name: {
                            in: brandNames,
                        },
                    },
                }
                : {}),
            ...(deal !== undefined
                ? {
                    price: {
                        discount: {
                            is: {
                                value: {
                                    gt: 0,
                                },
                            },
                        },
                    }
                }
                : {}),
        },
    });
    if (totalProducts === 0) {
        notFound();
    }
    const brandsWithCounts = await prisma.brand.findMany({
        where: {
            products: {
                some: {
                    category: {
                        some: {
                            categoryId: params.category,
                        },
                    },
                },
            },
        },
        distinct: ['name'], // optional, if you want to be sure they're unique
        select: {
            name: true,
            _count: {
                select: { products: true }, // assuming your relation field on brand is named "products"
            },
        },
    });
    const brands = brandsWithCounts.map(b => ({
        name: b.name,
        productCount: b._count.products,
    }));

    return (
        <>
            <div className="order-[-1] z-[1] mb-[5px]">
                <div className="m-0 min-w-0 flex flex-col items-start mb-4 pl-4">
                    <ul className="list-none flex items-center">
                        <li>
                            <Link href="/" rel="prefetch" className="font-medium text-[#0E5AA7] no-underline">
                                Home
                            </Link>
                        </li>
                        <div className="mx-[4px] my-auto select-none h-[14px]">
                            <div className="rotate-180 flex justify-center px-[6px] py-[2px]">
                                <svg id="ArrowLeft" width="12px" height="12px" viewBox="0 0 24 24" className="w-[12px] h-[12px]">
                                    <path d="M17.2,2.4l-0.7-0.7l-9.9,9.9c-0.2,0.2-0.2,0.5,0,0.7c0,0,0,0,0,0l10.1,10.1l0.7-0.7l-9.8-9.8L17.2,2.4z"></path>
                                </svg>
                            </div>
                        </div>
                        {ancestors.map((ancestor) => (
                            <>
                                <li key={ancestor.id}>
                                    <Link href={`/c/${ancestor.id}`} className="font-medium text-[#0E5AA7] no-underline">{ancestor.name}</Link>
                                </li>
                                <div className="mx-[4px] my-auto select-none h-[14px]">
                                    <div className="rotate-180 flex justify-center px-[6px] py-[2px]">
                                        <svg id="ArrowLeft" width="12px" height="12px" viewBox="0 0 24 24" className="w-[12px] h-[12px]">
                                            <path d="M17.2,2.4l-0.7-0.7l-9.9,9.9c-0.2,0.2-0.2,0.5,0,0.7c0,0,0,0,0,0l10.1,10.1l0.7-0.7l-9.8-9.8L17.2,2.4z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </>
                        ))}
                        <li>
                            <p className="capitalize text-[#666666] whitespace-nowrap">{category.name}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <CategoryPageWrapper category={category} children={children} brands={brands} initialTotalProducts={totalProducts} initialProducts={products} />
        </>
    );
};

export default CategoryPage;
