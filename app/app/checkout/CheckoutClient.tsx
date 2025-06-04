"use client";
import useCart from "@/hooks/use-cart";
import AddShippingAddress from "./_components/AddShippingAddress";
import OrderItems from "./_components/OrderItems";
import OrderSummary from "./_components/OrderSummary";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { useErrorStore } from "@/stores/useErrorStore";

export default function CheckoutClient({ address }: { address: any }) {
    const cart = useCart((state) => state.items);
    const [hydrated, setHydrated] = useState(false);
    const setError = useErrorStore((state) => state.setError);

    useEffect(() => {
        setHydrated(true);
    }, []);

    useEffect(() => {
        if (!cart || cart.length === 0) {
            setError("Oops! Something went wrong, please try again later.", true);
        }
    }, [setError]);

    if (!hydrated) return <Loading />;

    if (!cart || cart.length === 0) {
        return <Loading />;
    }

    return (<div className="min-w-0 mx-auto not-italic font-montserrat max-w-[1232px]">
        <div className="m-0 min-w-0 pt-4 pb-4 hidden md:block">
            <div className="m-0 min-w-0 inline-block">
                <a href="/app/cart" className=" text-[#0e5aa7] normal-case no-underline cursor-pointer outline-none transition-shadow transition-bg duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded text-[14px] w-auto font-bold h-[14px] flex ">
                    <svg id="ArrowLeft" viewBox="0 0 24 24" className="w-[16px] h-[16px]"><path d="M17.2,2.4l-0.7-0.7l-9.9,9.9c-0.2,0.2-0.2,0.5,0,0.7c0,0,0,0,0,0l10.1,10.1l0.7-0.7l-9.8-9.8L17.2,2.4z"></path></svg>
                    <span className="mx-2 my-0 min-w-0">Back to Cart</span>
                </a>
            </div>
        </div>
        <div className="flex flex-col relative mx-2 pt-2 pb-4 min-w-0 xs:pb-6 xs:mx-0 sm:flex-col md:flex-row md:static">
            <div className="min-w-0 w-full mr-0 xs:mr-0 sm:mr-6 sm:w-full md:w-2/3">
                <AddShippingAddress address={address} />
                <OrderItems />
                <div className="min-w-0 relative my-6 mx-1">
                    <div className="mb-4 min-w-0 text-black text-base font-bold">
                        Payment Method
                        <div className="mb-4 min-w-0 bg-white rounded-md opacity-100 py-3 px-4 relative cursor-default block">
                            <label className="flex cursor-pointer">
                                <input type="radio" className="mr-4 w-4" name="paymentMode" value="cod" defaultChecked />
                                <div className="m-0 min-w-0 flex items-center text-black">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Layer_1"
                                        data-name="Layer 1"
                                        viewBox="0 0 40 40"
                                        width="32"
                                        height="32"
                                    >
                                        <defs>
                                            <style>
                                                {`.cls-1{fill:#4d4d4d;stroke:#4d4d4d;stroke-width:0.1px;}`}
                                            </style>
                                        </defs>
                                        <g id="Page-1">
                                            <g id="_022---Cash" data-name="022---Cash">
                                                <path
                                                    id="Shape"
                                                    className="cls-1"
                                                    d="M32.84,13.12H14A.46.46,0,0,0,14,14h2.77a7.11,7.11,0,0,0,0,11.92H7.16V14h4.59a.46.46,0,0,0,0-.92H7.16a.92.92,0,0,0-.92.92V26a.92.92,0,0,0,.92.92H32.84a.92.92,0,0,0,.92-.92V14A.92.92,0,0,0,32.84,13.12ZM14.5,20A5.75,5.75,0,0,1,20,14a5.75,5.75,0,0,1,5.5,6A5.75,5.75,0,0,1,20,26,5.75,5.75,0,0,1,14.5,20Zm18.34,6H23.19a7.11,7.11,0,0,0,0-11.92h9.65Z"
                                                />
                                                <path
                                                    id="Shape-2"
                                                    data-name="Shape"
                                                    className="cls-1"
                                                    d="M30.43,8.17a1,1,0,0,0-.7-.05l-9.88,3.31a.47.47,0,0,0-.29.59.46.46,0,0,0,.58.29L30,9l1,3a.45.45,0,0,0,.34.3.48.48,0,0,0,.44-.14.47.47,0,0,0,.09-.45l-1-3A1,1,0,0,0,30.43,8.17Z"
                                                />
                                                <path
                                                    id="Shape-3"
                                                    data-name="Shape"
                                                    className="cls-1"
                                                    d="M19.86,27.7,10,31,9,28a.46.46,0,0,0-.58-.29.47.47,0,0,0-.29.59l1,3a.91.91,0,0,0,.46.54,1,1,0,0,0,.41.09.92.92,0,0,0,.29,0l9.88-3.31a.46.46,0,1,0-.3-.88Z"
                                                />
                                                <path
                                                    id="Shape-4"
                                                    data-name="Shape"
                                                    className="cls-1"
                                                    d="M29.63,25h1.83a.45.45,0,0,0,.46-.45V22.75a.46.46,0,1,0-.91,0v1.38H29.63a.46.46,0,1,0,0,.91Z"
                                                />
                                                <path
                                                    id="Shape-5"
                                                    data-name="Shape"
                                                    className="cls-1"
                                                    d="M8.54,22.29a.46.46,0,0,0-.46.46v1.84a.45.45,0,0,0,.46.45h1.83a.46.46,0,1,0,0-.91H9V22.75A.46.46,0,0,0,8.54,22.29Z"
                                                />
                                                <path
                                                    id="Shape-6"
                                                    data-name="Shape"
                                                    className="cls-1"
                                                    d="M10.37,15H8.54a.45.45,0,0,0-.46.46v1.83a.46.46,0,1,0,.91,0V15.87h1.38a.46.46,0,1,0,0-.91Z"
                                                />
                                                <path
                                                    id="Shape-7"
                                                    data-name="Shape"
                                                    className="cls-1"
                                                    d="M29.63,15.87H31v1.38a.46.46,0,1,0,.91,0V15.42a.45.45,0,0,0-.46-.46H29.63a.46.46,0,1,0,0,.91Z"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                    <div className="m-0 ml-3 min-w-0">
                                        <div className="m-0 min-w-0 block font-bold sm:inline"
                                            style={{ color: 'inherit' }}>
                                            Cash on delivery
                                        </div>
                                        <span className="text-xs block text-black font-thin">No additional fee</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-w-0 self-start w-full m-0 pb-0 md:w-1/2 md:sticky md:top-[132px] font-montserrat">
                <h2 className="mt-0 mr-2 mb-4 ml-2 xs:ml-6 xs:mr-6 md:mt-0 md:ml-0 md:mr-0 min-w-0 text-base font-bold text-black">Order Summary</h2>
                <OrderSummary address={address}/>
            </div>
        </div>
    </div>)
}