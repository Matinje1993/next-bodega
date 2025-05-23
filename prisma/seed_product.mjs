import { PrismaClient } from '../lib/generated/prisma/index.js';
const prisma = new PrismaClient();

async function main() {
    // Create Product
    const product = await prisma.product.create({
        data: {
            id: 13419,
            ean: '6161101065757',
            name: 'Pep Concentrated Passion Fruit Drink 2L',
            type: 'FOOD',
            preorder: false,
            isExpress: false,
            productOrigin: 'South Africa',
            supplier: 'Carrefour',
            isBulk: false,
            bulkMessage: '',
            isScalable: false,
            isFBC: false,
            isMarketPlace: false,
            foodType: 'DRY',
            soldByWeight: false,
            productCategoriesHearchi: 'Beverages/Juices/Syrups & Concentrate/Cordial Drinks',
            servingIntents: ['SLOTTED'],
            isRecommendable: true,

            brand: {
                connectOrCreate: {
                    where: { id: '00005' },
                    create: {
                        id: '00005',
                        name: 'LP - NONAME',
                    },
                },
            },

            availability: {
                create: {
                    isAvailable: true,
                    max: 2,
                },
            },

            unit: {
                create: {
                    unitOfMeasure: 'pieces',
                    itemsPerUnit: 0,
                    incrementBy: 1,
                    size: '2L',
                    max: 2,
                    min: 1,
                    unitItem: 0,
                    maxToOrder: 24,
                },
            },

            price: {
                create: {
                    currency: 'KES',
                    price: 343,
                    formattedValue: 'KES343.00',
                    minBuyingValue: '343.00',
                    discount: {
                        create: {
                            price: 250,
                            endDate: new Date('2025-05-25T17:59:00Z'), // convert to ISO
                            type: 'percentage',
                            formattedValue: 'KES250.00',
                            value: 27,
                            minBuyingValue: '250.00',
                        },
                    },
                },
            },

            category: {
                create: [
                    { category: { connect: { id: 'FKEN1500000' } } },
                    { category: { connect: { id: 'FKEN1520000' } } },
                    { category: { connect: { id: 'FKEN1520300' } } },
                ],
            },

            offers: {
                connectOrCreate: {
                    where: { id: 'offer_carrefour_' },
                    create: {
                        id: 'offer_carrefour_',
                        sellerName: 'Carrefour',
                        shopId: '0000',
                        type: 'main',
                        shippingIndicator: 'SLOTTED',
                        purchaseIndicators: {
                            SHIPPING: ['SLOTTED'],
                        },
                    },
                },
            },

            stock: {
                create: {
                    stockLevelStatus: 'lowStock',
                    value: 2,
                },
            },

            links: {
                create: {
                    images: [
                        {
                            rel: 'assets',
                            href: 'https://cdn.mafrservices.com/sys-master-root/h03/hdd/16813391806494/13419_main.jpg?im=Resize=200',
                            type: 'GET',
                            kind: 'image',
                            properties: {
                                format: 'plpThumbnail',
                                url: 'https://cdn.mafrservices.com/sys-master-root/h03/hdd/16813391806494/13419_main.jpg?im=Resize=200',
                                imageType: 'GALLERY',
                            },
                        },
                        {
                            rel: 'assets',
                            href: 'https://cdn.mafrservices.com/sys-master-root/h37/ha0/12451481813022/13419_Main.jpg?im=Resize=200',
                            type: 'GET',
                            kind: 'image',
                            properties: {
                                format: 'plpThumbnail',
                                url: 'https://cdn.mafrservices.com/sys-master-root/h37/ha0/12451481813022/13419_Main.jpg?im=Resize=200',
                                imageType: 'GALLERY',
                            },
                        },
                    ],
                    productUrl: {
                        href: '/mafken/en/cordial-drinks/pep-passion-fruit-drink-concent2l/p/13419',
                        rel: 'self',
                        type: 'GET',
                        kind: 'product',
                    },
                    tracking: [],
                    defaultImages: [
                        'https://cdn.mafrservices.com/sys-master-root/h03/hdd/16813391806494/13419_main.jpg?im=Resize=1700',
                        'https://cdn.mafrservices.com/sys-master-root/h37/ha0/12451481813022/13419_Main.jpg?im=Resize=1700',
                    ],
                },
            },
        },
    });

    console.log(`✅ Seeded product: ${product.name}`);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());