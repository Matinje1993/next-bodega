import ProductZoomWithThumbs from "./_components/ProductZoomWithThumbs";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { notFound } from 'next/navigation'
import Countdown from "./_components/Countdown";
import { Metadata } from "next";
import AddToCart from "./_components/AddToCart";
import Highlights from "./_components/highlights";
import ToggleShare from "./_components/ToggleShare";
import DOMPurify from 'dompurify';

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

    if (
        product?.price?.discount &&
        new Date(product.price.discount.endDate) <= new Date()
    ) {
        product.price.discount = null;
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
                            <ToggleShare />
                            {product.price.discount && <div className="m-0 min-w-0 absolute z-[2] top-0 left-0 px-2 py-1.5 rounded-[12px_2px] font-bold text-center text-[12px] bg-[#FDF4F4] text-[#c81416]">
                                {product.price.discount.value} %<div> OFF</div>
                            </div>}
                            <section className="m-0 min-w-0 relative">
                                <div className="m-0 min-w-0 -mx-4 xs:mx-0">
                                    <ProductZoomWithThumbs product={product} />
                                </div>
                            </section>
                        </div>
                    </div>
                    <div id="description-box" className="m-0 min-w-0 col-start-1 col-end-4 mt-2 xs:col-start-2 xs:col-end-4 xs:mt-0 sm:mt-0 md:col-auto md:col-end-auto md:mt-0">
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
                        {product?.highlight && <Highlights html={product?.highlight} />}
                    </div>
                    <div className="min-w-0 -ml-4 -mr-4 grid-col-start-1 xs:ml-0 xs:mr-0 xs:col-span-2 md:col-auto">
                        <AddToCart product={product} />
                    </div>
                </div>
                {product?.description && <div className="m-0 min-w-0 w-full mt-0 xs:mt-6 xs:mb-6 sm:mt-12 sm:mb-12">
                    <div className="m-0 min-w-0">
                        <div className="box-border m-0 min-w-0 mt-0 xs:mt-6 sm:mt-12 text-[#4D4D4D] leading-[20px] break-words">
                            <h2 className="m-0 min-w-0 text-[16px] xs:text-[18px] text-[#000408] mb-3 font-bold uppercase">DESCRIPTION</h2>
                            <div className="m-0 min-w-0 mt-4 mb-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }} />
                        </div>
                    </div>
                </div>}
            </div>
        </main>
    )
}