import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

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

export async function GET(req: Request, { params }: { params: { categoryId: string } }) {
    const { categoryId } = params;
    const { searchParams } = new URL(req.url);
    const filterStr = searchParams.get('filter') || '';
    const parsedFilters = parseFilterString(filterStr);
    const brandNames = parsedFilters.brand_name as string[] | undefined;
    const deal = parsedFilters.deal as boolean | undefined;
    const sortBy = searchParams.get('sortBy') || '';

    try {
        const products = await prisma.product.findMany({
            where: {
                category: {
                    some: {
                        categoryId: categoryId, // <- this must be a valid `String` category ID
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
                        categoryId: categoryId, // valid category ID string
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

        const result = {
            products: products,
            total: totalProducts
        };

        return NextResponse.json(result);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}