import { PrismaClient } from '@/lib/generated/prisma';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const placements = searchParams.get('placements');
        const rawProducts = await prisma.product.findMany({
            take: 10, // limit for demo
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

        const recommendedProducts = await Promise.all(
            rawProducts.map(async (product) => {
                const formattedProduct = {
                    ...product,
                    category: product.category.map(item => item.category)
                        .sort((a, b) => a.level - b.level),
                };

                return formattedProduct;
            })
        );

        const result = {
            placements: [
                {
                    htmlElementId: 'home_page_0',
                    strategyName: 'Food Cupboard',
                    strategyMessage: 'New Arrivals',
                    placementType: 'home_page',
                    placement: 'home_page.web_rank1',
                    recommendedProducts,
                },
            ],
        };

        return NextResponse.json(result);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}