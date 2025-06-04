"use client";

import { useEffect, useState, useRef } from "react";
import useCart from "@/hooks/use-cart";
import Link from "next/link";
import CartItem from "./_components/cart-item";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function getRemainingPercent(current: number, target: number): number {
    return Math.max(0, ((target - current) / target) * 100);
}

const MIN_ORDER_VALUE = 1000;
const FREE_DELIVERY_VALUE = 4000;

export default function CartPage() {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();
    const items = useCart((state) => state.items);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.totalPrice);
    }, 0);

    const productCount = cart?.items?.length ?? 0;

    return (
        <>
            <main className="block min-w-0 flex-1 w-full max-w-[1232px] pb-8 m-auto [@media(min-width:1231px)]:w-[1232px]">
                <div className="relative m-0 min-w-0">
                    <div className="w-full m-0 min-w-0 mx-4 sm:mx-0 hidden sm:inline-block text-xs">
                        <div className="m-0 min-w-0 inline-block pt-0 sm:pt-4 xl:pt-0">
                            <div className="m-0 min-w-0 inline-block">
                                <Link href="/" className="m-0 min-w-0 no-underline text-[#0E5AA7] hover:text-[#0E5AA7] hover:outline-none active:outline-none">Home</Link>
                            </div>
                            <div className="m-0 min-w-0 align-middle inline-block h-[12px]">
                                <svg height="12" width="18" viewBox="0 0 24 24"><path d="M7.5,1.6L6.8,2.4l9.5,9.5l-9.8,9.8l0.7,0.7l10.1-10.1c0.2-0.2,0.2-0.5,0-0.7c0,0,0,0,0,0L7.5,1.6z" fill="#B2B2B2"></path></svg>
                            </div>
                            <div className="m-0 min-w-0 inline-block">
                                <p className={`m-0 min-w-0 no-underline text-[#979797]`}>Cart</p>
                            </div>
                        </div>
                    </div>
                    {cart?.items?.length > 0 ? (
                        <div className="block md:flex md:min-h-[344px] md:items-start md:gap-8 mt-5 lg:mt-[20px]">
                            <section className="md:w-[64.94%] md:overflow-x-hidden">
                                <div className="bg-white p-4 md:rounded-lg mb-4 md:border md:border-gray-100">
                                    <button aria-controls="items-SLOTTED" aria-expanded="true" className="flex w-full items-center justify-between mb-4" type="button"><div className="flex items-center"><div className="text-left"><div className="font-regular text-xs md:text-xs">Scheduled Delivery ({productCount} {productCount === 1 ? 'item' : 'items'})</div><p className="text-md leading-5 font-bold italic hidden">Tomorrow 10 AM - 12 PM</p></div></div><svg className="w-6 h-6 stroke-2 text-black" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>CaretUp</title><path d="M4.5 15L12 7.5L19.5 15" fill="none" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                                    <div className="relative">
                                        <div>
                                            <div className="relative mb-4">
                                                <div className="mb-[44px] flex items-center">
                                                    <div className="relative z-[1]">
                                                        <div className="rounded-full bg-primary p-px">
                                                            <svg className="w-6 h-6 stroke-2 text-white" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <title>StartIcon</title>
                                                                <path d="M19.0957 11.5794L13.5204 7.99524C13.4448 7.94669 13.3576 7.91937 13.2679 7.91615C13.1782 7.91294 13.0892 7.93395 13.0104 7.97698C12.9316 8.02 12.8658 8.08346 12.82 8.16068C12.7742 8.2379 12.75 8.32604 12.75 8.41583V15.5842C12.75 15.674 12.7742 15.7621 12.82 15.8393C12.8658 15.9165 12.9316 15.98 13.0104 16.023C13.0892 16.0661 13.1782 16.0871 13.2679 16.0838C13.3576 16.0806 13.4448 16.0533 13.5204 16.0048L19.0957 12.4206C19.1662 12.3753 19.2241 12.3131 19.2642 12.2396C19.3043 12.1661 19.3254 12.0837 19.3254 12C19.3254 11.9163 19.3043 11.8339 19.2642 11.7604C19.2241 11.6869 19.1662 11.6247 19.0957 11.5794Z"></path>
                                                                <path d="M12.0957 11.5794L6.52038 7.99524C6.44485 7.94669 6.35763 7.91937 6.2679 7.91615C6.17816 7.91294 6.08922 7.93395 6.01041 7.97698C5.93159 8.02 5.86582 8.08346 5.82 8.16068C5.77418 8.2379 5.75 8.32604 5.75 8.41583V15.5842C5.75 15.674 5.77418 15.7621 5.82 15.8393C5.86582 15.9165 5.93159 15.98 6.01041 16.023C6.08922 16.0661 6.17816 16.0871 6.2679 16.0838C6.35763 16.0806 6.44485 16.0533 6.52038 16.0048L12.0957 12.4206C12.1662 12.3753 12.2241 12.3131 12.2642 12.2396C12.3043 12.1661 12.3254 12.0837 12.3254 12C12.3254 11.9163 12.3043 11.8339 12.2642 11.7604C12.2241 11.6869 12.1662 11.6247 12.0957 11.5794Z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="text-xs leading-4 font-regular absolute bottom-[-19px] left-0 text-gray-500">Start</div>
                                                    </div>
                                                    <div className="w-full -mx-px">
                                                        <div className="relative w-full overflow-hidden bg-polo-50 rtl:rotate-180" role="progressbar">
                                                            <div className={`w-full rounded-l-none bg-striped-gradient bg-[length:10px_10px] bg-repeat h-2 ${getRemainingPercent(totalPrice, 1000) > 0 ? 'rounded-r-full' : 'rounded-r-none'} animate-strips`} style={{ transform: `translateX(-${getRemainingPercent(totalPrice, 1000)}%)` }}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="relative flex flex-col">
                                                            <div className="z-[1] size-[26px]">
                                                                {getRemainingPercent(totalPrice, 1000) > 0 ? (<img alt="Min. Value" loading="lazy" width="26" height="26" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="https://cdnprod.mafretailproxy.com/bff-assets/images/progress_mov_not_met.png" />) :
                                                                    (<img alt="Min. Value" loading="lazy" width="26" height="26" decoding="async" data-nimg="1" src="https://cdnprod.mafretailproxy.com/bff-assets/images/progress_mov_met.png" style={{ color: 'transparent' }} />)}
                                                            </div>
                                                            <div className="absolute top-[28px] whitespace-nowrap left-[-44px] w-28 text-center">
                                                                <div className="text-xs leading-4 font-regular text-gray-500">Min. Value</div>
                                                                <div className="text-xs leading-4 font-bold text-black">KES 1000.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full -mr-px ml-[-3px]">
                                                        <div className="relative w-full overflow-hidden bg-polo-50 rtl:rotate-180" role="progressbar">
                                                            <div className={`w-full rounded-l-none bg-striped-gradient bg-[length:10px_10px] bg-repeat h-2 ${getRemainingPercent(totalPrice - 1000, 3000) > 0 ? 'rounded-r-full' : 'rounded-r-none'} animate-strips`} style={{ transform: `translateX(-${getRemainingPercent(totalPrice - 1000, 3000)}%)` }}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="relative flex flex-col">
                                                            <div className="z-[1] size-[26px]">
                                                                {getRemainingPercent(totalPrice - 1000, 3000) > 0 ? (<img alt="Free Delivery" loading="lazy" width="26" height="26" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="https://cdnprod.mafretailproxy.com/bff-assets/images/progress_std_free_delivery_not_met.png" />) :
                                                                    (<img alt="Free Delivery" loading="lazy" width="26" height="26" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="https://cdnprod.mafretailproxy.com/bff-assets/images/progress_std_free_delivery_met.png" />)}
                                                            </div>
                                                            <div className="absolute top-[28px] whitespace-nowrap right-0 text-right">
                                                                <div className="text-xs leading-4 font-regular text-gray-500">Free Delivery</div>
                                                                <div className="text-xs leading-4 font-bold text-black">KES 4000.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div aria-describedby="inline-notification-description" aria-labelledby="inline-notification-heading" className="relative flex items-center justify-between gap-2 rounded-lg bg-secondary p-2 text-black" role="alert">
                                                    <div className="relative w-full"><div className="text-xs leading-4 font-bold">{totalPrice < 1000 ? 'Ready to Checkout?' : totalPrice < 4000 ? 'Free Delivery' : 'Missing Something?'}</div>
                                                        <div className="text-xs">
                                                            {totalPrice < 1000 ? (<><span>Spend </span><strong>KES {new Intl.NumberFormat('en-US', {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2,
                                                            }).format(1000 - totalPrice)}</strong><span> to place the order</span></>) :
                                                                totalPrice < 4000 ? (<><span>Spend </span><strong>KES {new Intl.NumberFormat('en-US', {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2,
                                                                }).format(4000 - totalPrice)}</strong><span> to get </span><strong>free delivery!</strong></>) :
                                                                    (<span> You can still add more items here</span>)}
                                                        </div>
                                                    </div>
                                                    <Link href="/" className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-[0.12] border-[0.125rem] border-[rgba(14,90,167,1)] text-primary hover:bg-transparent px-4 py-2 text-xs rounded-sm leading-3 md:rounded-lg">Add items</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ease duration-400 relative transition-height" style={{ height: 'auto' }}>
                                            <div className="pb-4">
                                                <div className="mb-4 flex items-center justify-between"><span className="text-md leading-5 font-bold">My Cart</span></div>
                                                <div className="flex flex-col gap-2">
                                                    {cart?.items?.map((item, index) => (
                                                        <CartItem key={index} data={item} totalPrice={totalPrice} />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="mb-2 flex justify-between">
                                                <div className="text-md leading-5 font-bold">Subtotal</div>
                                                <div className="text-md leading-5 font-bold">KES {new Intl.NumberFormat('en-US', {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                }).format(totalPrice)}</div>
                                            </div>
                                            <button className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-[0.12] border-[0.125rem] border-[rgba(14,90,167,1)] text-primary hover:bg-transparent px-4 py-2 rounded-lg md:rounded-xl mb-4 text-md w-full" disabled={totalPrice < 1000} onClick={() => router.push("/app/checkout")}>Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="top-[150px] mt-4 md:sticky md:mt-0 md:w-[32.47%]">
                                <div className="mb-4">
                                    <div className="text-base leading-5 font-bold mb-4 hidden text-left md:block">Order Summary</div>
                                    <div className="bg-white p-4 md:rounded-lg bottom-[0px] z-[1] flex w-full items-center justify-between py-2 shadow-sticky-footer max-md:fixed max-md:-mb-1 max-md:-mt-lg md:border md:border-gray-100 md:py-4 md:shadow-none">
                                        <div className="md:flex items-center">
                                            <div className="text-md leading-5 font-bold text-left md:mr-1">KES {new Intl.NumberFormat('en-US', {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            }).format(totalPrice)}</div>
                                            <div className="text-left text-gray-500 md:flex md:items-baseline">
                                                <div className="text-xs leading-4 font-regular">(Incl. of VAT)</div>
                                            </div>
                                        </div>
                                        <button className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-[0.12] bg-primary text-white hover:bg-primary-active px-8 py-[14px] text-md rounded-lg md:rounded-xl w-1/2 py-2 md:py-[14px]" disabled={totalPrice < 1000} onClick={() => router.push("/app/checkout")}>Checkout</button>
                                    </div>
                                </div>
                            </section>
                        </div>) : (<div className="block md:flex md:min-h-[344px] md:items-start md:gap-8">
                            <div className="w-full p-4 text-center md:min-h-[437px]">
                                <img alt="Empty cart" loading="lazy" width="343" height="228" decoding="async" data-nimg="1" className="mx-auto mb-6" src="https://cdnprod.mafretailproxy.com/assets/images/cart-empty.png" style={{ color: 'transparent' }} />
                                <div className="text-base leading-5 font-bold mb-1">Looking for something?</div>
                                <div className="text-md leading-5 font-regular mb-8">Add your favourite items to your cart.</div>
                                <Link className="mb-6 block" href="/">
                                    <button className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-xl font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-[0.12] border-[0.125rem] border-[rgba(14,90,167,1)] text-primary hover:bg-transparent px-8 py-[14px] text-md w-[275px]">Start Shopping</button>
                                </Link>
                            </div>
                        </div>)}
                </div >
            </main >
        </>
    )
}