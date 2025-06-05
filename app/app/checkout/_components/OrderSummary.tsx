"use client";
import React, { useState, startTransition } from "react";
import useCart from "@/hooks/use-cart";
import { useLoadingStore } from "@/stores/loadingStore";
import { useErrorStore } from "@/stores/useErrorStore";
import { useSidebarDialog } from "@/lib/sidebar-dialog-context";
import AddShippingAddressForm from "./AddShippingAddressForm";
import { useRouter } from "next/navigation";

export default function OrderSummary({ address }) {
    const items = useCart((state) => state.items);
    const [agreed, setAgreed] = useState(true);
    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.totalPrice);
    }, 0);
    const isOrderValid = agreed && totalPrice >= 1000;
    const setError = useErrorStore((state) => state.setError);
    const { showSidebarDialog } = useSidebarDialog();
    const router = useRouter();
    const { clearError } = useErrorStore();

    const handleSubmit = async () => {
        if (!address) {
            showSidebarDialog({
                body: <AddShippingAddressForm />,
            });
            return;
        }
        useLoadingStore.getState().setLoading(true);

        try {
            const res = await fetch("/api/v1/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ deliveryAddressId: address?.id, items }),
            });
            if (!res.ok) {
                const data = await res.json(); // get the error message
                throw new Error(data.error || "Unknown error");
            }
            const data = await res.json();
            clearError();
            useCart.getState().removeAllCart();
            startTransition(() => {
                router.push(`/app/checkout/orderConfirmation/${data.id}`);
            });
        } catch (err: any) {
            console.error("Checkout error:", err.message);
            setError(err.message || "Unexpected error occurred");
            window.scrollTo({ top: 0, behavior: "smooth" });
        } finally {
            useLoadingStore.getState().setLoading(false);
        }
    };

    return (<div className="m-0 min-w-0 p-0 xs:ml-6 xs:mr-6 md:ml-0 md:mr-0">
        <div className="mb-4 min-w-0 rounded-lg bg-white p-2 xs:p-4">
            <div className="mb-4 min-w-0 flex justify-between items-center text-sm text-black font-bold">
                <span className="m-0 min-w-0">
                    Subtotal (including VAT)
                </span>
                <span className="m-0 min-w-0">
                    KES {new Intl.NumberFormat('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    }).format(totalPrice)}
                </span>
            </div>
            <div className="mb-4 min-w-0 flex justify-between items-center text-sm text-black font-normal">
                <span className="m-0 min-w-0">Delivery fee</span>
                <span className="m-0 min-w-0">KES 500.00</span>
            </div>
            <div className="mb-4 min-w-0 flex justify-between items-center text-sm text-black font-bold">
                <span className="m-0 min-w-0">
                    Total amount due (Incl. VAT)
                </span>
                <span className="m-0 min-w-0">
                    KES {new Intl.NumberFormat('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    }).format(totalPrice + 500)}
                </span>
            </div>
        </div>
        <div className="mx-2 xs:mx-0 min-w-0">
            <div className="mt-2 mb-4 min-w-0 flex flex-row items-center">
                <label>
                    <div className="inline-block align-middle">
                        <input
                            className="peer border-0 clip-rect h-px w-px m-[-1px] overflow-hidden p-0 absolute whitespace-nowrap"
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <div className="inline-block w-5 h-5 bg-gray-50 peer-checked:bg-[#0e5aa7] rounded-[3px] border border-[#0e5aa7]">
                            <svg id="icon" viewBox="0 0 24 24" className="fill-none stroke-white stroke-[3px] visible"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <div className="bg-black"></div>
                        </div>
                    </div>
                </label>
                <span className="ml-2 min-w-0 text-[13px] text-[#666666]">By placing this order, I confirm that I have read and agreed with the <a href="/termsandconditions" target="_blank" style={{ color: '#0E5AA7', textDecoration: 'none' }}>Terms &amp; Conditions</a>.</span>
            </div>
            <div className="fixed right-0 left-0 bottom-0 m-0 min-w-0 bg-white z-[3] rounded-none p-4 shadow-[0_(-1px)_8px_rgba(0,0,0,0.14)] md:static md:shadow-none md:rounded-lg ">
                <div className={`m-0 min-w-0 ${isOrderValid ? 'opacity-100' : 'opacity-40 pointer-events-none'} text-black flex items-center justify-between`}>
                    <div className="box-border m-0 min-w-0 w-1/2 flex flex-col text-left xs:flex-row sm:flex-col">
                        <span className="m-0 min-w-0 font-bold">
                            KES {new Intl.NumberFormat('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            }).format(totalPrice + 500)}
                        </span>
                    </div>
                    <div className="box-border m-0 min-w-0 w-1/2 flex items-center">
                        <button
                            disabled={!isOrderValid}
                            className={`text-white border-0 bg-[#0e5aa7] outline-none transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] normal-case flex-1 p-2 ml-0 font-semibold text-sm w-1/2 h-[42px] rounded-lg ${isOrderValid ? 'opacity-100' : 'opacity-50 pointer-events-none'
                                }`}
                            type="button"
                            onClick={handleSubmit}
                        >
                            <span className="m-0 min-w-0">Place order</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}