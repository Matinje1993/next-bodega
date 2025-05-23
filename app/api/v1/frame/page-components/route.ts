import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const idsParam = searchParams.get('ids');

    // Parse and validate ids
    const ids = idsParam?.split(',').map(id => parseInt(id)).filter(Boolean) || [];

    // Fake data source - replace this with your DB/query logic
    const allComponents = [
        {
            "id": 27874,
            "title": "Top Categories",
            "header": null,
            "homepage": null,
            "clp": null,
            "homepages_version": null,
            "clp_version": null,
            "published_at": "2023-02-10T12:24:13.000Z",
            "created_at": "2023-02-10T12:24:13.000Z",
            "updated_at": "2025-04-02T06:00:09.000Z",
            "based_on": null,
            "platform": "ALL",
            "see_all": null,
            "see_all_ar": null,
            "see_all_cta_mobile": null,
            "see_all_cta_web": null,
            "see_all_ka": null,
            "personalize_metadata": null,
            "backgroundImage": null,
            "backgroundColor": null,
            "backgroundImageWeb": null,
            "backgroundImageMobile": null,
            "renderBackgroundColor": null,
            "view_all": null,
            "view_all_cta_web": null,
            "view_all_cta_mobile": null,
            "type": null,
            "media_icon": null,
            "media_detail_icon": null,
            "level": null,
            "components": [
                {
                    "__component": "component.category-circle-manual",
                    "id": 7093,
                    "background_color": "#fafafa",
                    "title": "Snacks",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/c/FKEN1730500",
                    "cta_url_mobile": "/n/c/clp_FKEN1660000",
                    "media_web": "https://cdnprod.mafretailproxy.com/assets/images/Snacks_3079cdf727.png",
                    "media_mobile": "https://cdnprod.mafretailproxy.com/assets/images/Snacks_3079cdf727.png",
                    "name": "100325_ken_hpstnd_icon_snacks",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 7093,
                    "background_color": "#fafafa",
                    "title": "Pombe",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/c/FKEN21000000",
                    "cta_url_mobile": "/n/c/clp_FKEN1660000",
                    "media_web": "https://cdnprod.mafretailproxy.com/assets/images/Alcohol_5e49654334.png",
                    "media_mobile": "https://cdnprod.mafretailproxy.com/assets/images/Alcohol_5e49654334.png",
                    "name": "100325_ken_hpstnd_icon_snacks",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 7093,
                    "background_color": "#fafafa",
                    "title": "Chocolates",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/c/FKEN1660000",
                    "cta_url_mobile": "/n/c/clp_FKEN1660000",
                    "media_web": "/assets/images/chocolate.png",
                    "media_mobile": "/assets/images/chocolate.png",
                    "name": "100325_ken_hpstnd_icon_snacks",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 7093,
                    "background_color": "#fafafa",
                    "title": "Candy",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/c/FKEN1660000",
                    "cta_url_mobile": "/n/c/clp_FKEN1660000",
                    "media_web": "/assets/images/candy.png",
                    "media_mobile": "/assets/images/candy.png",
                    "name": "100325_ken_hpstnd_icon_snacks",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 7093,
                    "background_color": "#fafafa",
                    "title": "Cookies",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/c/FKEN1660000",
                    "cta_url_mobile": "/n/c/clp_FKEN1660000",
                    "media_web": "/assets/images/cookies.png",
                    "media_mobile": "/assets/images/cookies.png",
                    "name": "100325_ken_hpstnd_icon_snacks",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 7093,
                    "background_color": "#fafafa",
                    "title": "Juices",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/c/FKEN1520000",
                    "cta_url_mobile": "/n/c/clp_FKEN1660000",
                    "media_web": "/assets/images/juices.png",
                    "media_mobile": "/assets/images/juices.png",
                    "name": "100325_ken_hpstnd_icon_snacks",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 7093,
                    "background_color": "#fafafa",
                    "title": "Soft Drinks",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/c/FKEN1660000",
                    "cta_url_mobile": "/n/c/clp_FKEN1660000",
                    "media_web": "/assets/images/soft_drinks.png",
                    "media_mobile": "/assets/images/soft_drinks.png",
                    "name": "100325_ken_hpstnd_icon_snacks",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 7093,
                    "background_color": "#fafafa",
                    "title": "Coffee",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/c/FKEN1660000",
                    "cta_url_mobile": "/n/c/clp_FKEN1660000",
                    "media_web": "/assets/images/coffee.png",
                    "media_mobile": "/assets/images/coffee.png",
                    "name": "100325_ken_hpstnd_icon_snacks",
                    "rr_personalise": null
                }
            ]
        },
        {
            "id": 27875,
            "title": "Top Categories",
            "header": null,
            "homepage": null,
            "clp": null,
            "homepages_version": null,
            "clp_version": null,
            "published_at": "2023-02-10T12:24:13.000Z",
            "created_at": "2023-02-10T12:24:13.000Z",
            "updated_at": "2025-04-02T06:00:09.000Z",
            "based_on": null,
            "platform": "ALL",
            "see_all": null,
            "see_all_ar": null,
            "see_all_cta_mobile": null,
            "see_all_cta_web": null,
            "see_all_ka": null,
            "personalize_metadata": null,
            "backgroundImage": null,
            "backgroundColor": null,
            "backgroundImageWeb": null,
            "backgroundImageMobile": null,
            "renderBackgroundColor": null,
            "view_all": null,
            "view_all_cta_web": null,
            "view_all_cta_mobile": null,
            "type": null,
            "media_icon": null,
            "media_detail_icon": null,
            "level": null,
            "components": [
                {
                    "__component": "component.category-circle-manual",
                    "id": 7093,
                    "background_color": "#fafafa",
                    "title": "Matunda & Mboga",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/n/c/clp_FKEN1660000",
                    "cta_url_mobile": "/n/c/clp_FKEN1660000",
                    "media_web": "https://cdnprod.mafretailproxy.com/assets/images/Fruits_and_Vegs_491f958670.png",
                    "media_mobile": "https://cdnprod.mafretailproxy.com/assets/images/Fruits_and_Vegs_4a4a766bdc.png",
                    "name": "100325_ken_hpstnd_icon_fruits&veges",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 7098,
                    "background_color": "#fafafa",
                    "title": "Bio & Organic Foods",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/c/FKEN1200000",
                    "cta_url_mobile": "/c/FKEN1200000",
                    "media_web": "https://cdnprod.mafretailproxy.com/assets/images/Bio_and_Organic_Foods_8281149c9d.png",
                    "media_mobile": "https://cdnprod.mafretailproxy.com/assets/images/Bio_and_Organic_Foods_267bd8b265.png",
                    "name": "100325_ken_hpstnd_icon_Bio&OrganicFoods",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 7092,
                    "background_color": "#fafafa",
                    "title": "Maziwa & Mayai",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/n/c/clp_FKEN1630000",
                    "cta_url_mobile": "/n/c/clp_FKEN1630000",
                    "media_web": "https://cdnprod.mafretailproxy.com/assets/images/Dairy_and_Eggs_8d333eb7df.png",
                    "media_mobile": "https://cdnprod.mafretailproxy.com/assets/images/Dairy_and_Eggs_c2675e58cd.png",
                    "name": "100325_ken_hpstnd_icon_Dairy&Eggs",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 10363,
                    "background_color": null,
                    "title": "Electronics",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/n/c/clp_NFKEN4000000",
                    "cta_url_mobile": "/n/c/clp_NFKEN4000000",
                    "media_web": "https://cdnprod.mafretailproxy.com/assets/images/Electronics_127b969a59.png",
                    "media_mobile": "https://cdnprod.mafretailproxy.com/assets/images/Electronics_c18e0f2f3a.png",
                    "name": "100325_ken_hpstnd_icon_Electronics",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 19966,
                    "background_color": null,
                    "title": "Large Appliances",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/n/c/clp_NFKEN4000000",
                    "cta_url_mobile": "/n/c/clp_NFKEN4000000",
                    "media_web": "https://cdnprod.mafretailproxy.com/assets/images/Large_Appliances_ad35c9947b.png",
                    "media_mobile": "https://cdnprod.mafretailproxy.com/assets/images/Large_Appliances_50795c9757.png",
                    "name": "100325_ken_hpstnd_icon_LargeAppliances",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 7095,
                    "background_color": "#fafafa",
                    "title": "Stationery",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/c/NFKEN1300000",
                    "cta_url_mobile": "/c/NFKEN1300000",
                    "media_web": "https://cdnprod.mafretailproxy.com/assets/images/Stationary_and_Supplies_1aa77a62e0.png",
                    "media_mobile": "https://cdnprod.mafretailproxy.com/assets/images/Stationary_and_Supplies_b44f66cdbc.png",
                    "name": "100325_ken_hpstnd_icon_Stationery&Supplies",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 7094,
                    "background_color": "#fafafa",
                    "title": "Health & Fitness",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/c/NFKEN7000000",
                    "cta_url_mobile": "/c/NFKEN7000000",
                    "media_web": "https://cdnprod.mafretailproxy.com/assets/images/Health_and_Fitness_98dc9dd7c7.png",
                    "media_mobile": "https://cdnprod.mafretailproxy.com/assets/images/Health_and_Fitness_290cf653e7.png",
                    "name": "100325_ken_hpstnd_icon_Health&Fitness",
                    "rr_personalise": null
                },
                {
                    "__component": "component.category-circle-manual",
                    "id": 7091,
                    "background_color": "#fafafa",
                    "title": "Pet Supplies",
                    "alt_text": null,
                    "image_web": null,
                    "image_mobile": null,
                    "cta_url_web": "/n/c/clp_FKEN1100000",
                    "cta_url_mobile": "/n/c/clp_FKEN1100000",
                    "media_web": "https://cdnprod.mafretailproxy.com/assets/images/Pet_Supplies_915db73f23.png",
                    "media_mobile": "https://cdnprod.mafretailproxy.com/assets/images/Pet_Supplies_378a34cc34.png",
                    "name": "100325_ken_hpstnd_icon_Pet Supplies",
                    "rr_personalise": null
                }
            ],
            "external_link": null
        },
        {
            "id": 35406,
            "title": "Promotions",
            "header": "Promotions",
            "homepage": null,
            "clp": null,
            "homepages_version": null,
            "clp_version": null,
            "published_at": "2023-06-19T11:23:03.000Z",
            "created_at": "2023-06-23T18:11:46.000Z",
            "updated_at": "2025-05-19T07:22:49.000Z",
            "based_on": null,
            "platform": "ALL",
            "see_all": null,
            "see_all_ar": null,
            "see_all_cta_mobile": null,
            "see_all_cta_web": null,
            "see_all_ka": null,
            "personalize_metadata": null,
            "backgroundImage": null,
            "backgroundColor": null,
            "backgroundImageWeb": null,
            "backgroundImageMobile": null,
            "renderBackgroundColor": null,
            "view_all": null,
            "view_all_cta_web": null,
            "view_all_cta_mobile": null,
            "type": null,
            "media_icon": null,
            "media_detail_icon": null,
            "level": null,
            "components": [
                {
                    "__component": "component.rich-category-card-carousel",
                    "id": 32102,
                    "title": null,
                    "subtitle": null,
                    "mediaMobile": "https://cdnprod.mafretailproxy.com/assets/images/New_User_Richcard_4406fd594c.png",
                    "ctaUrlWeb": "/c/plp-carrefour-promotion-kenya",
                    "ctaUrlApp": "/c/plp-carrefour-promotion-kenya",
                    "name": "140125_ken_hpstnd_richcard_promotions_NewUserCoupon",
                    "mediaWeb": "https://cdnprod.mafretailproxy.com/assets/images/New_User_Richcard_5e68ba0841.png",
                    "fontColor": null
                },
                {
                    "__component": "component.rich-category-card-carousel",
                    "id": 39816,
                    "title": null,
                    "subtitle": null,
                    "mediaMobile": "https://cdnprod.mafretailproxy.com/assets/images/TOP_UP_CHAP_CHAP_54e8335175.png",
                    "ctaUrlWeb": "/c/ken-chapchap-offers",
                    "ctaUrlApp": "/c/ken-chapchap-offers",
                    "name": "190525_ken_hpstnd_richcard_promotions_TopUpChapChap",
                    "mediaWeb": "https://cdnprod.mafretailproxy.com/assets/images/TOP_UP_CHAP_CHAP_8d60e8af9e.png",
                    "fontColor": null
                },
                {
                    "__component": "component.rich-category-card-carousel",
                    "id": 39750,
                    "title": null,
                    "subtitle": null,
                    "mediaMobile": "https://cdnprod.mafretailproxy.com/assets/images/Virtual_Bundles_RC_copy_1f782ca513.png",
                    "ctaUrlWeb": "/c/ken-bundle-offers",
                    "ctaUrlApp": "/c/ken-bundle-offers",
                    "name": "150525_ken_hpstnd_richcard_promotions_VirtualBundles",
                    "mediaWeb": "https://cdnprod.mafretailproxy.com/assets/images/Virtual_Bundles_RC_copy_fb63b1dd01.png",
                    "fontColor": null
                },
                {
                    "__component": "component.rich-category-card-carousel",
                    "id": 40030,
                    "title": null,
                    "subtitle": null,
                    "mediaMobile": "https://cdnprod.mafretailproxy.com/assets/images/BMSM_Rich_Card_34cd34e281.png",
                    "ctaUrlWeb": "/c/plp-carrefour-promotion-kenya",
                    "ctaUrlApp": "/c/plp-carrefour-promotion-kenya",
                    "name": "190525_ken_hpstnd_richcard_promotions_BMSM",
                    "mediaWeb": "https://cdnprod.mafretailproxy.com/assets/images/BMSM_Rich_Card_beeb4f2334.png",
                    "fontColor": null
                },
                {
                    "__component": "component.rich-category-card-carousel",
                    "id": 38918,
                    "title": null,
                    "subtitle": null,
                    "mediaMobile": "https://cdnprod.mafretailproxy.com/assets/images/Linen_RC_9cb7ca40e0.png",
                    "ctaUrlWeb": "/c/ken-linen-offers",
                    "ctaUrlApp": "/c/ken-linen-offers",
                    "name": "060525_ken_hpstnd_richcard_promotions_HomeLinen",
                    "mediaWeb": "https://cdnprod.mafretailproxy.com/assets/images/Linen_RC_fccbb701b2.png",
                    "fontColor": null
                },
                {
                    "__component": "component.rich-category-card-carousel",
                    "id": 37578,
                    "title": null,
                    "subtitle": null,
                    "mediaMobile": "https://cdnprod.mafretailproxy.com/assets/images/NF_Coupon_RC_copy_dc99e0f835.png",
                    "ctaUrlWeb": "/c/ken-rainy-season",
                    "ctaUrlApp": "/c/ken-rainy-season",
                    "name": "110425_ken_hpstnd_richcard_promotions_RainySeason",
                    "mediaWeb": "https://cdnprod.mafretailproxy.com/assets/images/NF_Coupon_RC_copy_96624ab916.png",
                    "fontColor": null
                },
                {
                    "__component": "component.rich-category-card-carousel",
                    "id": 32904,
                    "title": null,
                    "subtitle": null,
                    "mediaMobile": "https://cdnprod.mafretailproxy.com/assets/images/FRESH_SAVERS_b86673c3eb.png",
                    "ctaUrlWeb": "/n/c/clp_ken-fresh-savers",
                    "ctaUrlApp": "/n/c/clp_ken-fresh-savers",
                    "name": "140225_ken_hpstnd_richcard_promotions_FreshSavers",
                    "mediaWeb": "https://cdnprod.mafretailproxy.com/assets/images/FRESH_SAVERS_6fffc4b56a.png",
                    "fontColor": null
                },
                {
                    "__component": "component.rich-category-card-carousel",
                    "id": 39098,
                    "title": null,
                    "subtitle": null,
                    "mediaMobile": "https://cdnprod.mafretailproxy.com/assets/images/COOL_CORNER_3ab3c26cec.png",
                    "ctaUrlWeb": "/c/ken-hhh-offers",
                    "ctaUrlApp": "/c/ken-hhh-offers",
                    "name": "070525_ken_hpstnd_richcard_promotions_HHH",
                    "mediaWeb": "https://cdnprod.mafretailproxy.com/assets/images/COOL_CORNER_285e28f5e7.png",
                    "fontColor": null
                }
            ],
            "external_link": null
        }
    ];

    const filtered = allComponents.filter(c => ids.includes(c.id));

    return NextResponse.json({
        data: filtered,
    });
}