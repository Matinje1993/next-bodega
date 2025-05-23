import ProductZoomWithThumbs from "./_components/ProductZoomWithThumbs";
import Link from "next/link";
import { PrismaClient } from '@/lib/generated/prisma';
import { notFound } from 'next/navigation'
import Countdown from "./_components/Countdown";
import { Metadata } from "next";
import AddToCart from "./_components/AddToCart";

const prisma = new PrismaClient()

interface ProductPageProps {
    params: {
        productId: string
    }
}

export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const { productId } = params
    let product = await prisma.product.findUnique({
        where: { id: Number(productId) },
        select: { name: true },
    });
    if (!product) return {
        title: "Bodega Store",
        description: "E-ecommerce, selling products, and new productivity",
    };

    return {
        title: 'Buy ' + product.name + ' Online',
        description: "E-ecommerce, selling products, and new productivity"
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { productId } = params

    const product = await prisma.product.findUnique({
        where: { id: Number(productId) },
        include: {
            brand: true,
            links: true,
            price: {
                include: {
                    discount: true, // include discount here
                },
            },
            stock: true,
            unit: true,
            availability: true,
        },
    })

    if (!product) {
        notFound()
    }

    const categories = await prisma.categoryOnProduct.findMany({
        where: { productId: product.id },
        include: {
            category: true
        },
        orderBy: {
            category: {
                level: 'asc'
            }
        }
    })

    const breadcrumbs = categories.map((item) => ({
        name: item.category.name,
        url: `/c/${item.category.id}`,
    }))
    return (
        <main className="block min-w-0 flex-1 w-full max-w-[1232px] pb-8 m-auto [@media(min-width:1231px)]:w-[1232px]">
            <div className="relative m-0 min-w-0 mt-0 mx-4 xs:mx-6 sm:mx-6 md:mx-6 lg:mx-0">
                <div className="w-full m-0 min-w-0 mx-4 sm:mx-0 hidden sm:inline-block text-sm">
                    <div className="m-0 min-w-0 inline-block pt-0 sm:pt-4 xl:pt-0">
                        <div className="m-0 min-w-0 inline-block">
                            <Link href="/" className="m-0 min-w-0 no-underline text-[#979797] hover:text-[#0E5AA7] hover:outline-none active:outline-none">Home</Link>
                        </div>
                        <div className="m-0 min-w-0 align-middle inline-block h-[12px]">
                            <svg height="12" width="18" viewBox="0 0 24 24"><path d="M7.5,1.6L6.8,2.4l9.5,9.5l-9.8,9.8l0.7,0.7l10.1-10.1c0.2-0.2,0.2-0.5,0-0.7c0,0,0,0,0,0L7.5,1.6z" fill="#B2B2B2"></path></svg>
                        </div>
                        {breadcrumbs.map((crumb, idx) => (<>
                            <div key={idx} className="m-0 min-w-0 inline-block">
                                <Link href={crumb.url} className={`m-0 min-w-0 no-underline ${idx === breadcrumbs.length - 1 ? 'text-[#0E5AA7]' : 'text-[#979797]'} hover:text-[#0E5AA7] hover:outline-none active:outline-none`}>{crumb.name}</Link>
                            </div>
                            {idx < breadcrumbs.length - 1 && <div className="m-0 min-w-0 align-middle inline-block h-[12px]">
                                <svg height="12" width="18" viewBox="0 0 24 24"><path d="M7.5,1.6L6.8,2.4l9.5,9.5l-9.8,9.8l0.7,0.7l10.1-10.1c0.2-0.2,0.2-0.5,0-0.7c0,0,0,0,0,0L7.5,1.6z" fill="#B2B2B2"></path></svg>
                            </div>}
                        </>
                        ))}
                    </div>
                </div>
                <div id="grid-wrap" className="m-0 min-w-0 block pt-0 xs:grid xs:grid-cols-2 xs:gap-x-4 xs:gap-y-4 sm:pt-6 sm:grid-cols-custom-3 md:pt-4 md:gap-x-7 md:gap-y-2">
                    <div className="m-0 min-w-0 row-start-1 row-end-3 relative">
                        <div className="m-0 min-w-0 relative">
                            <div className="m-0 min-w-0 justify-between text-[#000408] flex absolute z-[2] right-0 top-0 flex-col lg:hidden">
                                <a className="m-0 min-w-0 items-center text-[12px] flex cursor-pointer p-2">
                                    <span className="m-0 min-w-0 px-[11px] pt-[11px] pb-[8px] bg-[#F4F4F4] rounded-full">
                                        <svg height="14px" width="14px" viewBox="0 0 24 24"><g style={{ transform: 'translate(-5px, -5px)' }}><path fill="#747474" d="M8.49743121,5.33333333 L23.4893381,5.33773333 C25.2508927,5.35463963 26.6663089,6.79433264 26.6532581,8.55592 L26.6532581,14.01104 L25.3452581,14.01104 L25.3452581,8.55592 C25.3526284,7.52267359 24.5224808,6.67831442 23.4892581,6.66814667 L8.49735121,6.66374667 C7.46415155,6.67394361 6.63403999,7.51829638 6.64141786,8.55152 L6.64141786,24.7818133 C6.63403999,25.815037 7.46415155,26.6593897 8.49735121,26.6695867 L18.6565647,26.6695867 L18.6566447,28 L8.49743121,28 C6.73587662,27.9830937 5.32046041,26.5434007 5.33342164,24.7818133 L5.33342164,8.55152 C5.32046041,6.78993264 6.73587662,5.35023963 8.49743121,5.33333333 Z M25.0281847,15.1118774 C25.8061078,15.5560541 26.3676017,16.3000832 26.5813813,17.1700002 C26.7603379,18.713241 26.2482184,20.2566904 25.1822213,21.3868533 C23.9330766,22.8586486 22.5843826,24.2429685 21.145648,25.5300531 C20.9917902,25.6814131 20.8385236,25.8334709 20.685848,25.9862264 C20.737488,25.9154397 18.8923947,24.2095998 18.7546747,24.0750132 C17.0082214,22.3682266 14.0831281,19.8794267 14.7706747,17.1073068 C15.118158,15.8951807 16.1258595,14.9869292 17.3674479,14.7668092 C18.6090363,14.5466892 19.8675535,15.053165 20.6105547,16.0719602 C20.6351147,16.1058002 20.6590169,16.1401069 20.6822613,16.1748802 C20.606048,16.0609069 21.330488,15.4372936 21.4218613,15.3667602 C21.7355741,15.1252706 22.0890162,14.9403691 22.466288,14.8203736 C23.324114,14.5623195 24.2502617,14.6677006 25.0281847,15.1118774 Z M13.6423412,21.3222796 C13.9451761,21.8013485 14.291315,22.2516303 14.6764078,22.6674663 L14.6764078,22.6674663 L10.0167274,22.6727907 L10.0167274,22.6727907 C9.64474036,22.6727912 9.34380786,22.3718587 9.34380786,22.0006396 C9.34380786,21.6288585 9.6449465,21.3273385 10.0167273,21.326868 L10.0167273,21.326868 Z M13.8665679,15.9997603 C13.4253749,16.3571027 13.0817355,16.8202344 12.8676212,17.346067 L12.8676212,17.346067 L10.008954,17.3493048 L10.008954,17.3493048 C9.63696996,17.3493052 9.33603446,17.0483697 9.33603446,16.677147 C9.33603446,16.3053963 9.63720359,16.0039301 10.0089541,16.0035635 L10.0089541,16.0035635 Z M22.0106483,10.6770401 C22.3823065,10.6770401 22.683595,10.9783286 22.683595,11.3499868 C22.683595,11.721645 22.3823065,12.0229335 22.0106483,12.0229335 L9.99008791,12.0229335 C9.61842971,12.0229335 9.31714122,11.721645 9.31714122,11.3499868 C9.31714122,10.9783286 9.61842971,10.6770401 9.99008791,10.6770401 L22.0106483,10.6770401 Z"></path><path d="M24.6275299,16.3073401 C23.6256996,15.7165017 22.3358979,16.0252524 21.7101965,17.0056868 C21.4819032,17.2803535 21.2701965,17.6756068 20.9039965,17.7819135 C20.3431432,17.9447001 20.0127299,17.3422068 19.7258765,16.9731935 C19.0993685,16.0068444 17.8190248,15.712085 16.8330365,16.3072068 C14.9189432,17.6929135 16.7463699,20.2476868 17.9097565,21.4028868 C18.8276899,22.3143801 19.7772232,23.1945401 20.7196632,24.1351001 C21.2202365,23.6322201 21.7307432,23.1389268 22.2369965,22.6417668 C23.050181,21.917438 23.8045528,21.1296679 24.4929965,20.2858868 C25.3086632,19.1785268 25.9778232,17.2364868 24.6275299,16.3073401 Z" fill="#FFFFFF"></path></g></svg>
                                    </span>
                                    <span className="hidden min-w-0 mx-[8px] xl:inline-flex">Add to wishlist</span>
                                </a>
                                <a className="m-0 min-w-0 items-center text-[12px] flex cursor-pointer p-2">
                                    <span className="m-0 min-w-0 px-[11px] pt-[11px] pb-[8px] bg-[#F4F4F4] rounded-full">
                                        <svg height="14px" width="14px" viewBox="0 0 24 24"><g fill="#747474"><path d="M16.97945,17.43133l-.04987-.029a3.12081,3.12081,0,0,0-.497.86938l.043.0249Z"></path><path d="M19.36324,16.21746a3.1153,3.1153,0,0,0-2.43366,1.18482l.04987.029-.00592.01025L7.76375,12.0678c.00079-.029.00867-.05639.00867-.08569a3.16863,3.16863,0,1,0-.21637,1.12329l8.87323,5.178a3.10855,3.10855,0,0,0-.20179,1.07568,3.13623,3.13623,0,1,0,3.13575-3.1416Z"></path><path d="M7.11543,12.84881a2.59876,2.59876,0,0,0,.11127-.40918l-.20624.354Z"></path><path d="M19.36324,1.49969a3.14186,3.14186,0,0,0-3.13575,3.1416,3.10707,3.10707,0,0,0,.17408.98779l-7.55689,4.354.5.86718,7.519-4.33227a3.13335,3.13335,0,1,0,2.49958-5.01831Z"></path><path d="M17.27339,6.28191l-.04681-.08129a2.66215,2.66215,0,0,1-.34094-.59131l-.11225-.19458-.37182.21435a3.12123,3.12123,0,0,0,.46209.88892Z"></path><path d="M17.22658,6.20062l-.34094-.59131A2.66215,2.66215,0,0,0,17.22658,6.20062Z"></path></g><g fill="#F4F4F4"><path d="M19.36324,6.78289a2.14161,2.14161,0,1,0-2.13575-2.1416A2.142,2.142,0,0,0,19.36324,6.78289Z"></path><path d="M19.36324,17.21746a2.14112,2.14112,0,1,0,2.13671,2.1416A2.14119,2.14119,0,0,0,19.36324,17.21746Z"></path><path d="M4.63667,9.84051a2.14112,2.14112,0,1,0,2.13575,2.1416A2.142,2.142,0,0,0,4.63667,9.84051Z"></path></g></svg>
                                    </span>
                                    <span className="hidden min-w-0 mx-[8px] xl:inline-flex">Share</span>
                                </a>
                            </div>
                            {product.price.discount && <div className="m-0 min-w-0 absolute z-[2] top-0 left-0 px-2 py-1.5 rounded-[12px_2px] font-bold text-center text-[12px] bg-[#FDF4F4] text-[#c81416]">
                                {product.price.discount.value} %<div> OFF</div>
                            </div>}
                            <section className="m-0 min-w-0 relative">
                                <div className="m-0 min-w-0 -mx-4 sm:mx-0">
                                    <ProductZoomWithThumbs product={product} />
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="m-0 min-w-0 col-start-1 col-end-4 mt-2 xs:col-start-2 xs:col-end-4 xs:mt-0 sm:mt-0 md:col-auto md:col-end-auto md:mt-0">
                        <section className="m-0 min-w-0 mb-[14px] xs:mb-6">
                            <h1 className="m-0 min-w-0 text-[14px] xs:text-[18px] font-bold text-[#000408] leading-6">
                                {product.name}
                            </h1>
                            <div className="m-0 min-w-0 mt-2 font-medium text-[12px] xs:text-[14px]">Pack size : {product.unit.size}</div>
                            <div className="m-0 min-w-0 mt-[14px] xs:mt-4 flex items-center">
                                {product.price.discount ? <h2 className="m-0 min-w-0 text-[#EE2527] font-bold text-[16px] xs:text-[18px]">
                                    {product.price.currency} {product.price.discount.minBuyingValue}
                                    <span className="m-0 min-w-0 text-[12px] mx-1">
                                        <del className="m-0 min-w-0 text-[#686868]">{product.price.currency} {product.price.minBuyingValue}</del>
                                    </span>
                                    <span className="m-0 min-w-0 text-[12px] font-medium mx-[2px] text-[#686868]"> (Inc. VAT)</span>
                                </h2> :
                                    <h2 className="m-0 min-w-0 text-black font-bold text-[16px] xs:text-[18px]">{product.price.currency} {product.price.minBuyingValue} <span className="m-0 min-w-0 text-[12px] font-medium mx-[2px] text-[#686868]">(Inc. VAT)</span></h2>
                                }
                            </div>
                            {product?.stock?.stockLevelStatus === 'lowStock' && product?.stock?.value && <div className="m-0 min-w-0 mt-[14px] text-[#EE2527] font-medium xs:mt-4">Only {product?.stock?.value} left!</div>}
                        </section>
                        {product.price.discount && <div className="m-0 min-w-0 flex flex-wrap">
                            <div className="m-0 min-w-0 flex mb-3 mr-2 ml-0 text-xs xs:mb-4">
                                <span className="m-0 font-medium py-1 px-2 text-sm rounded-sm text-[#EE2527] bg-[#FEF2F2] border border-[#EE2527] border-[0.5px]">
                                    <span className="m-0 min-w-0 font-bold">{product.price.discount.value}% OFF</span> ends in
                                    <Countdown targetDate={new Date(product.price.discount.endDate)} />
                                </span>
                            </div>
                        </div>}
                    </div>
                    <div className="min-w-0 -ml-4 -mr-4 grid-col-start-1 xs:ml-0 xs:mr-0 xs:col-span-2 md:col-auto">
                        <AddToCart product={product} />
                    </div>
                </div>
            </div>
        </main>
    )
}