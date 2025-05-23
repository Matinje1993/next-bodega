prisma.product.create({
    data: {
        id: 2396,
        ean: '6001240231142',
        name: 'Ceres Delight Orange Juice 1L',
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
        isRecommendable: true,
        foodType: 'DRY',
        soldByWeight: false,
        productCategoriesHearchi: 'Beverages/Juices/Long Life Juices & Smoothies/Concentrate Fruit Juice',
        servingIntents: ['SLOTTED'],

        brand: {
            connectOrCreate: {
                where: { id: '01056' },
                create: {
                    id: '01056',
                    name: 'CERES',
                },
            },
        },

        availability: {
            create: {
                isAvailable: true,
                max: 24,
            },
        },

        unit: {
            create: {
                unitOfMeasure: 'pieces',
                itemsPerUnit: 0,
                incrementBy: 1,
                size: '1L',
                max: 24,
                min: 1,
                unitItem: 0,
                maxToOrder: 24,
            },
        },

        price: {
            create: {
                currency: 'KES',
                price: 298,
                formattedValue: 'KES298.00',
                minBuyingValue: '298.00',
            },
        },

        category: {
            create: [
                { category: { connect: { id: 'FKEN1500000' } } },
                { category: { connect: { id: 'FKEN1520000' } } },
                { category: { connect: { id: 'FKEN1520200' } } },
                { category: { connect: { id: 'FKEN1520207' } } },
            ],
        },

        offers: {
            create: [
                {
                    id: 'offer_carrefour_',
                    sellerName: 'Carrefour',
                    shopId: '0000',
                    type: 'main',
                    shippingIndicator: 'SLOTTED',
                    purchaseIndicators: {
                        SHIPPING: ['SLOTTED'],
                    },
                },
            ],
        },

        stock: {
            create: {
                stockLevelStatus: 'inStock',
            },
        },

        links: {
            create: {
                images: [
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/2396/1743512403/2396_main.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/2396/1743512403/2396_main.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/sys-master-root/hbf/h77/16975368978462/2396_1.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/sys-master-root/hbf/h77/16975368978462/2396_1.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/sys-master-root/h3b/hc6/16975369175070/2396_2.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/sys-master-root/h3b/hc6/16975369175070/2396_2.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/sys-master-root/hf7/hfc/12453076434974/2396_Main.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/sys-master-root/hf7/hfc/12453076434974/2396_Main.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                ],
                productUrl: {
                    href: '/mafken/en/concentrate-fruit-juice/ceres-delight-juice-orange-1l/p/2396',
                    rel: 'self',
                    type: 'GET',
                    kind: 'product',
                },
                tracking: [],
                defaultImages: [
                    'https://cdn.mafrservices.com/pim-content/KEN/media/product/2396/1743512403/2396_main.jpg?im=Resize=1700',
                    'https://cdn.mafrservices.com/sys-master-root/hbf/h77/16975368978462/2396_1.jpg?im=Resize=1700',
                    'https://cdn.mafrservices.com/sys-master-root/h3b/hc6/16975369175070/2396_2.jpg?im=Resize=1700',
                    'https://cdn.mafrservices.com/sys-master-root/hf7/hfc/12453076434974/2396_Main.jpg?im=Resize=1700',
                ],
            },
        },
    },
});

prisma.product.create({
    data: {
        id: 239241,
        ean: '6161103375490',
        name: 'Dairyland Filled Mint Chocolate 37g',
        type: 'FOOD',
        preorder: false,
        isExpress: false,
        supplier: 'Carrefour',
        isBulk: false,
        bulkMessage: '',
        isScalable: false,
        isFBC: false,
        isMarketPlace: false,
        isRecommendable: true,
        foodType: 'DRY',
        soldByWeight: false,
        productCategoriesHearchi: 'Food Cupboard/Chocolate & Confectionery/Chocolates/Snacking Chocolates',
        servingIntents: ['SLOTTED'],
        brand: {
            connectOrCreate: {
                where: { id: '62829' },
                create: {
                    id: '62829',
                    name: 'DAIRYLAND',
                },
            },
        },
        availability: {
            create: {
                isAvailable: true,
                max: 100
            }
        },
        unit: {
            create: {
                unitOfMeasure: 'pieces',
                itemsPerUnit: 0,
                incrementBy: 1,
                size: '',
                max: 100,
                min: 1,
                unitItem: 0,
                maxToOrder: 10
            }
        },
        price: {
            create: {
                currency: 'KES',
                price: 70,
                formattedValue: 'KES70.00',
                minBuyingValue: '70.00',
            }
        },
        category: {
            create: [
                { category: { connect: { id: 'FKEN1740200' } } },
                { category: { connect: { id: 'FKEN1740000' } } },
                { category: { connect: { id: 'FKEN1700000' } } },
                // add more categories as needed
            ],
        },
        offers: {
            create: [
                {
                    id: 'offer_carrefour_1',
                    sellerName: 'Carrefour',
                    shopId: '0000',
                    type: 'main',
                    shippingIndicator: 'SLOTTED',
                    purchaseIndicators: {
                        SHIPPING: ['SLOTTED'],
                    },
                },
            ],
        },
        links: {
            create:
            {
                images: [
                    {
                        "rel": "assets",
                        "href": "https://cdn.mafrservices.com/pim-content/KEN/media/product/239240/1739886003/239240_main.jpg?im=Resize=200",
                        "type": "GET",
                        "kind": "image",
                        "properties": {
                            "format": "plpThumbnail",
                            "url": "https://cdn.mafrservices.com/pim-content/KEN/media/product/239240/1739886003/239240_main.jpg?im=Resize=200",
                            "imageType": "GALLERY"
                        }
                    }
                ],
                productUrl: {
                    "href": "/mafken/en/snacking-chocolates/dairyland-filled-mint-chocolate-37g/p/239240",
                    "rel": "self",
                    "type": "GET",
                    "kind": "product"
                },
                tracking: [
                    {
                        "href": "/api/v2/reporting?trackingUrl=https%3A//recs.richrelevance.com/rrserver/apiclick%3Fa%3Dad6c0262a7533146%26cak%3Dweb_5fdd6d62628c6c21%26channelId%3Dweb_5fdd6d62628c6c21%26vg%3D380df577-e3a3-4030-2270-8b65b4fa7892%26stid%3D1506686%26pti%3D9%26pa%3D56890%26pos%3D9%26p%3D239240%26s%3DB538EDC1-6156-0B53-B587-8187FF8854E3%26u%3D%26rid%3D684-en%26lang%3Den%26mvtId%3D-1%26mvtTs%3D1747312694763",
                        "rel": "tracking",
                        "type": "GET",
                        "kind": "clickTrackingUrl"
                    },
                    {
                        "href": "/api/v2/reporting?trackingUrl=https%3A//recs.richrelevance.com/rrserver/apiclick%3Fa%3Dad6c0262a7533146%26cak%3Dweb_5fdd6d62628c6c21%26channelId%3Dweb_5fdd6d62628c6c21%26vg%3D380df577-e3a3-4030-2270-8b65b4fa7892%26stid%3D1506686%26pti%3D9%26pa%3D56890%26pos%3D9%26p%3D239240%26s%3DB538EDC1-6156-0B53-B587-8187FF8854E3%26u%3D%26rid%3D684-en%26lang%3Den%26mvtId%3D-1%26mvtTs%3D1747312694763",
                        "rel": "tracking",
                        "type": "GET",
                        "kind": "addToCartTrackingUrl"
                    }
                ],
                defaultImages: [
                    "https://cdn.mafrservices.com/pim-content/KEN/media/product/239240/1739886003/239240_main.jpg?im=Resize=1700"
                ]
            }
        },
        stock: {
            create: {
                stockLevelStatus: 'inStock',
            }
        }
    }
});

await prisma.product.create({
    data: {
        id: 103459,
        ean: '6161117770560',
        name: 'Jooz Mango Pet Bottle Fruit Juice 1.5L',
        type: 'FOOD',
        preorder: false,
        isExpress: false,
        productOrigin: 'Kenya',
        supplier: 'Carrefour',
        isBulk: false,
        bulkMessage: '',
        isScalable: false,
        isFBC: false,
        isMarketPlace: false,
        foodType: 'DRY',
        soldByWeight: false,
        productCategoriesHearchi: 'Beverages/Juices/Long Life Juices & Smoothies/Concentrate Fruit Juice',
        servingIntents: ['SLOTTED'],

        brand: {
            connectOrCreate: {
                where: { id: '56039' },
                create: {
                    id: '56039',
                    name: 'JOOZ',
                },
            },
        },

        availability: {
            create: {
                isAvailable: true,
                max: 5,
            },
        },

        unit: {
            create: {
                unitOfMeasure: 'pieces',
                itemsPerUnit: 0,
                incrementBy: 1,
                size: '1.5L',
                max: 5,
                min: 1,
                unitItem: 0,
                maxToOrder: 24,
            },
        },

        price: {
            create: {
                currency: 'KES',
                price: 210,
                formattedValue: 'KES210.00',
                minBuyingValue: '210.00',
            },
        },

        category: {
            create: [
                { category: { connect: { id: 'FKEN1500000' } } },
                { category: { connect: { id: 'FKEN1520000' } } },
                { category: { connect: { id: 'FKEN1520200' } } },
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
                value: 5,
            },
        },

        links: {
            create: {
                images: [
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/sys-master-root/hd1/ha8/17328231579678/103459_main.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/sys-master-root/hd1/ha8/17328231579678/103459_main.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/sys-master-root/h4f/hb0/17328231317534/103459_1.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/sys-master-root/h4f/hb0/17328231317534/103459_1.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/sys-master-root/h90/hac/17328231448606/103459_2.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/sys-master-root/h90/hac/17328231448606/103459_2.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                ],
                productUrl: {
                    href: '/mafken/en/concentrate-fruit-juice/jooz-mango-juice-pet-bottle-1-5l/p/103459',
                    rel: 'self',
                    type: 'GET',
                    kind: 'product',
                },
                tracking: [],
                defaultImages: [
                    'https://cdn.mafrservices.com/sys-master-root/hd1/ha8/17328231579678/103459_main.jpg?im=Resize=1700',
                    'https://cdn.mafrservices.com/sys-master-root/h4f/hb0/17328231317534/103459_1.jpg?im=Resize=1700',
                    'https://cdn.mafrservices.com/sys-master-root/h90/hac/17328231448606/103459_2.jpg?im=Resize=1700',
                ],
            },
        },

        deliveryFees: {
            create: {
                freeDeliveryThreshold: 3000,
            },
        },
        isRecommendable: true
    },
});

await prisma.product.create({
    data: {
        id: 68999,
        ean: '90399480',
        name: 'Minute Maid Tropical Pulpy Juice 400Ml',
        type: 'FOOD',
        preorder: false,
        isExpress: false,
        productOrigin: '',
        supplier: 'Carrefour',
        isBulk: false,
        bulkMessage: '',
        isScalable: false,
        isFBC: false,
        isMarketPlace: false,
        isRecommendable: true,
        foodType: 'DRY',
        soldByWeight: false,
        productCategoriesHearchi: 'Beverages/Juices/Long Life Juices & Smoothies/Concentrate Fruit Juice',
        servingIntents: ['SLOTTED'],

        brand: {
            connectOrCreate: {
                where: { id: '14513' },
                create: {
                    id: '14513',
                    name: 'MINUTE MAID',
                },
            },
        },

        availability: {
            create: {
                isAvailable: true,
                max: 24,
            },
        },

        unit: {
            create: {
                unitOfMeasure: 'pieces',
                itemsPerUnit: 0,
                incrementBy: 1,
                size: '400ml',
                max: 24,
                min: 1,
                unitItem: 0,
                maxToOrder: 24,
            },
        },

        price: {
            create: {
                currency: 'KES',
                price: 79,
                formattedValue: 'KES79.00',
                minBuyingValue: '79.00',
            },
        },

        category: {
            create: [
                { category: { connect: { id: 'FKEN1500000' } } },
                { category: { connect: { id: 'FKEN1520000' } } },
                { category: { connect: { id: 'FKEN1520200' } } },
                //{ category: { connect: { id: 'FKEN1520207' } } },
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
                stockLevelStatus: 'inStock',
            },
        },

        links: {
            create: {
                images: [
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/sys-master-root/h0f/h2e/17556543078430/68999_main.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/sys-master-root/h0f/h2e/17556543078430/68999_main.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/sys-master-root/h9c/he0/12456971632670/68999_Main.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/sys-master-root/h9c/he0/12456971632670/68999_Main.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                ],
                productUrl: {
                    href: '/mafken/en/concentrate-fruit-juice/minute-maid-tropical-pulpy-jui400ml/p/68999',
                    rel: 'self',
                    type: 'GET',
                    kind: 'product',
                },
                tracking: [],
                defaultImages: [
                    'https://cdn.mafrservices.com/sys-master-root/h0f/h2e/17556543078430/68999_main.jpg?im=Resize=1700',
                    'https://cdn.mafrservices.com/sys-master-root/h9c/he0/12456971632670/68999_Main.jpg?im=Resize=1700',
                ],
            },
        },
    },
});

await prisma.product.create({
    data: {
        id: 38605,
        ean: '24000150121',
        name: 'Del Monte Tropical Blend Juice 1L',
        type: 'FOOD',
        preorder: false,
        isExpress: false,
        productOrigin: 'Kenya',
        supplier: 'Carrefour',
        isBulk: false,
        bulkMessage: '',
        isScalable: false,
        isFBC: false,
        isMarketPlace: false,
        foodType: 'DRY',
        soldByWeight: false,
        productCategoriesHearchi: 'Beverages/Juices/Long Life Juices & Smoothies/Concentrate Fruit Juice',
        servingIntents: ['SLOTTED'],

        brand: {
            connectOrCreate: {
                where: { id: '61405' },
                create: {
                    id: '61405',
                    name: 'DEL MONTE',
                },
            },
        },

        availability: {
            create: {
                isAvailable: true,
                max: 24,
            },
        },

        unit: {
            create: {
                unitOfMeasure: 'pieces',
                itemsPerUnit: 0,
                incrementBy: 1,
                size: '1L',
                max: 24,
                min: 1,
                unitItem: 0,
                maxToOrder: 24,
            },
        },

        price: {
            create: {
                currency: 'KES',
                price: 298,
                formattedValue: 'KES298.00',
                minBuyingValue: '298.00',
            },
        },

        category: {
            create: [
                { category: { connect: { id: 'FKEN1500000' } } },
                { category: { connect: { id: 'FKEN1520000' } } },
                { category: { connect: { id: 'FKEN1520200' } } },
                //{ category: { connect: { id: 'FKEN1520207' } } },
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
                stockLevelStatus: 'inStock',
            },
        },

        links: {
            create: {
                images: [
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/38605/1740754803/38605_main.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/38605/1740754803/38605_main.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/sys-master-root/h63/h63/12456644182046/38605_Main.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/sys-master-root/h63/h63/12456644182046/38605_Main.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                ],
                productUrl: {
                    href: '/mafken/en/concentrate-fruit-juice/del-monte-juice-blend-tropical-1l/p/38605',
                    rel: 'self',
                    type: 'GET',
                    kind: 'product',
                },
                tracking: [],
                defaultImages: [
                    'https://cdn.mafrservices.com/pim-content/KEN/media/product/38605/1740754803/38605_main.jpg?im=Resize=1700',
                    'https://cdn.mafrservices.com/sys-master-root/h63/h63/12456644182046/38605_Main.jpg?im=Resize=1700',
                ],
            },
        },
        isRecommendable: true
    },
});

await prisma.product.create({
    data: {
        id: 157883,
        ean: '6161102062595',
        name: 'Fruitville Cranberry Juice 1L',
        type: 'FOOD',
        preorder: false,
        isExpress: false,
        productOrigin: 'Kenya',
        supplier: 'Carrefour',
        isBulk: false,
        bulkMessage: '',
        isScalable: false,
        isFBC: false,
        isMarketPlace: false,
        foodType: 'DRY',
        soldByWeight: false,
        productCategoriesHearchi: 'Beverages/Juices/Long Life Juices & Smoothies/Concentrate Fruit Juice',
        servingIntents: ['SLOTTED'],

        brand: {
            connectOrCreate: {
                where: { id: '55440' },
                create: {
                    id: '55440',
                    name: 'FRUITVILLE',
                },
            },
        },

        availability: {
            create: {
                isAvailable: true,
                max: 24,
            },
        },

        unit: {
            create: {
                unitOfMeasure: 'pieces',
                itemsPerUnit: 0,
                incrementBy: 1,
                size: '1L',
                max: 24,
                min: 1,
                unitItem: 0,
                maxToOrder: 24,
            },
        },

        price: {
            create: {
                currency: 'KES',
                price: 350,
                formattedValue: 'KES350.00',
                minBuyingValue: '350.00',
            },
        },

        category: {
            create: [
                { category: { connect: { id: 'FKEN1500000' } } },
                { category: { connect: { id: 'FKEN1520000' } } },
                { category: { connect: { id: 'FKEN1520200' } } },
                //{ category: { connect: { id: 'FKEN1520207' } } },
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
                stockLevelStatus: 'inStock',
            },
        },

        links: {
            create: {
                images: [
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/sys-master-root/hea/hd5/17013547106334/157883_main.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/sys-master-root/hea/hd5/17013547106334/157883_main.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                ],
                productUrl: {
                    href: '/mafken/en/concentrate-fruit-juice/fruitville-cranberry-juice1l/p/157883',
                    rel: 'self',
                    type: 'GET',
                    kind: 'product',
                },
                tracking: [],
                defaultImages: [
                    'https://cdn.mafrservices.com/sys-master-root/hea/hd5/17013547106334/157883_main.jpg?im=Resize=1700',
                ],
            },
        },
        isRecommendable: true
    },
});

await prisma.product.create({
    data: {
        id: 229424,
        ean: '1210000101143',
        name: 'PADDY IRISH WHISKY 1L',
        type: 'FOOD',
        preorder: false,
        isExpress: false,
        productOrigin: null,
        supplier: 'Carrefour',
        isBulk: false,
        bulkMessage: '',
        isScalable: false,
        isFBC: false,
        isMarketPlace: false,
        foodType: 'DRY',
        soldByWeight: false,
        productCategoriesHearchi: 'Alcohol/Spirits/Wiskeys & Bourbons',
        servingIntents: ['SLOTTED'],

        brand: {
            connectOrCreate: {
                where: { id: 'unknown_brand' },
                create: {
                    id: 'unknown_brand',
                    name: 'Unknown',
                },
            },
        },

        availability: {
            create: {
                isAvailable: true,
                max: 7,
            },
        },

        unit: {
            create: {
                unitOfMeasure: 'pieces',
                itemsPerUnit: 0,
                incrementBy: 1,
                size: '1L',
                max: 7,
                min: 1,
                unitItem: 0,
                maxToOrder: 10,
            },
        },

        price: {
            create: {
                currency: 'KES',
                price: 2990,
                formattedValue: 'KES2990.00',
                minBuyingValue: '2990.00',
            },
        },

        category: {
            create: [
                { category: { connect: { id: 'FKEN1500000' } } },
                { category: { connect: { id: 'FKEN1510000' } } },
                { category: { connect: { id: 'FKEN1510300' } } },
                //{ category: { connect: { id: 'FKEN1510304' } } },
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
            },
        },

        links: {
            create: {
                images: [
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/229424/1742572803/229424_main.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/229424/1742572803/229424_main.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                ],
                productUrl: {
                    href: '/mafken/en/wiskeys-bourbons/paddy-irish-whisky-1l/p/229424',
                    rel: 'self',
                    type: 'GET',
                    kind: 'product',
                },
                tracking: [],
                defaultImages: [
                    'https://cdn.mafrservices.com/pim-content/KEN/media/product/229424/1742572803/229424_main.jpg?im=Resize=1700',
                ],
            },
        },
        isRecommendable: true
    },
});

await prisma.product.create({
    data: {
        id: 103630,
        ean: '5000281026626',
        name: 'Singleton Dufftown 15 Years Old Whiskey 700Ml',
        type: 'FOOD',
        preorder: false,
        isExpress: false,
        productOrigin: 'United Kingdom',
        supplier: 'Carrefour',
        isBulk: false,
        bulkMessage: '',
        isScalable: false,
        isFBC: false,
        isMarketPlace: false,
        foodType: 'DRY',
        soldByWeight: false,
        productCategoriesHearchi: 'Alcohol/Spirits/Wiskeys & Bourbons',
        servingIntents: ['SLOTTED'],

        brand: {
            connectOrCreate: {
                where: { id: 'singleton_brand' },
                create: {
                    id: 'singleton_brand',
                    name: 'SINGLETON',
                },
            },
        },

        availability: {
            create: {
                isAvailable: true,
                max: 3,
            },
        },

        unit: {
            create: {
                unitOfMeasure: 'pieces',
                itemsPerUnit: 0,
                incrementBy: 1,
                size: '700ml',
                max: 3,
                min: 1,
                unitItem: 0,
                maxToOrder: 24,
            },
        },

        price: {
            create: {
                currency: 'KES',
                price: 7900,
                formattedValue: 'KES7900.00',
                minBuyingValue: '7900.00',
            },
        },

        category: {
            create: [
                { category: { connect: { id: 'FKEN1500000' } } },
                { category: { connect: { id: 'FKEN1510000' } } },
                { category: { connect: { id: 'FKEN1510300' } } },
                //{ category: { connect: { id: 'FKEN1510304' } } },
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
            },
        },

        links: {
            create: {
                images: [
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/103630/1740124803/103630_main.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/103630/1740124803/103630_main.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                ],
                productUrl: {
                    href: '/mafken/en/wiskeys-bourbons/singleton-15-yr-old-whisky700ml/p/103630',
                    rel: 'self',
                    type: 'GET',
                    kind: 'product',
                },
                tracking: [],
                defaultImages: [
                    'https://cdn.mafrservices.com/pim-content/KEN/media/product/103630/1740124803/103630_main.jpg?im=Resize=1700',
                ],
            },
        },
        isRecommendable: true
    },
});

await prisma.product.create({
    data: {
        id: 40558,
        ean: '5010327207117',
        name: 'GRANTS FAMILY RESERVE WHISKY 375ML',
        type: 'FOOD',
        preorder: false,
        isExpress: false,
        productOrigin: 'United Kingdom',
        supplier: 'Carrefour',
        isBulk: false,
        bulkMessage: '',
        isScalable: false,
        isFBC: false,
        isMarketPlace: false,
        foodType: 'DRY',
        soldByWeight: false,
        productCategoriesHearchi: 'Alcohol/Spirits/Wiskeys & Bourbons',
        servingIntents: ['SLOTTED'],
        isRecommendable: true,

        brand: {
            connectOrCreate: {
                where: { id: 'grants_brand' },
                create: {
                    id: 'grants_brand',
                    name: "GRANT'S",
                },
            },
        },

        availability: {
            create: {
                isAvailable: true,
                max: 10,
            },
        },

        unit: {
            create: {
                unitOfMeasure: 'pieces',
                itemsPerUnit: 0,
                incrementBy: 1,
                size: '375ml',
                max: 10,
                min: 1,
                unitItem: 0,
                maxToOrder: 10,
            },
        },

        price: {
            create: {
                currency: 'KES',
                price: 860,
                formattedValue: 'KES860.00',
                minBuyingValue: '860.00',
            },
        },

        category: {
            create: [
                { category: { connect: { id: 'FKEN21000000' } } },
                { category: { connect: { id: 'FKEN21030000' } } },
                { category: { connect: { id: 'FKEN21030200' } } },
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
                stockLevelStatus: 'inStock',
            },
        },

        links: {
            create: {
                images: [
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/40558/1740128403/40558_main.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/40558/1740128403/40558_main.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                ],
                productUrl: {
                    href: '/mafken/en/wiskeys-bourbons/grants-family-reserve-whisky-375ml/p/40558',
                    rel: 'self',
                    type: 'GET',
                    kind: 'product',
                },
                tracking: [],
                defaultImages: [
                    'https://cdn.mafrservices.com/pim-content/KEN/media/product/40558/1740128403/40558_main.jpg?im=Resize=1700',
                ],
            },
        },
    },
});

await prisma.product.create({
    data: {
        id: 140017,
        ean: '5010327302201',
        name: 'Glenfiddich Single Malt 12 Years Old Whisky 1L',
        type: 'FOOD',
        preorder: false,
        isExpress: false,
        productOrigin: 'United Kingdom',
        supplier: 'Carrefour',
        isBulk: false,
        bulkMessage: '',
        isScalable: false,
        isFBC: false,
        isMarketPlace: false,
        foodType: 'DRY',
        soldByWeight: false,
        productCategoriesHearchi: 'Alcohol/Spirits/Wiskeys & Bourbons',
        servingIntents: ['SLOTTED'],
        isRecommendable: true,

        brand: {
            connectOrCreate: {
                where: { id: '53358' },
                create: {
                    id: '53358',
                    name: 'GLENFIDDICH',
                },
            },
        },

        availability: {
            create: {
                isAvailable: true,
                max: 8,
            },
        },

        unit: {
            create: {
                unitOfMeasure: 'pieces',
                itemsPerUnit: 0,
                incrementBy: 1,
                size: '1L',
                max: 8,
                min: 1,
                unitItem: 0,
                maxToOrder: 10,
            },
        },

        price: {
            create: {
                currency: 'KES',
                price: 8790,
                formattedValue: 'KES8790.00',
                minBuyingValue: '8790.00',
            },
        },

        category: {
            create: [
                { category: { connect: { id: 'FKEN21000000' } } },
                { category: { connect: { id: 'FKEN21030000' } } },
                { category: { connect: { id: 'FKEN21030200' } } },
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
            },
        },

        links: {
            create: {
                images: [
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/140017/1740124803/140017_main.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/140017/1740124803/140017_main.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                    {
                        rel: 'assets',
                        href: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/140017/1740124803/140017_1.jpg?im=Resize=200',
                        type: 'GET',
                        kind: 'image',
                        properties: {
                            format: 'plpThumbnail',
                            url: 'https://cdn.mafrservices.com/pim-content/KEN/media/product/140017/1740124803/140017_1.jpg?im=Resize=200',
                            imageType: 'GALLERY',
                        },
                    },
                ],
                productUrl: {
                    href: '/mafken/en/wiskeys-bourbons/glenfiddich-single-m-whisky-12y-1l/p/140017',
                    rel: 'self',
                    type: 'GET',
                    kind: 'product',
                },
                tracking: [],
                defaultImages: [
                    'https://cdn.mafrservices.com/pim-content/KEN/media/product/140017/1740124803/140017_main.jpg?im=Resize=1700',
                    'https://cdn.mafrservices.com/pim-content/KEN/media/product/140017/1740124803/140017_1.jpg?im=Resize=1700',
                ],
            },
        },
    },
});

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