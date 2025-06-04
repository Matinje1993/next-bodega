"use client";
import React from "react";
import useCart from "@/hooks/use-cart";

export default function OrderItems() {
    const cart = useCart();
    const items = useCart((state) => state.items);
    const productCount = cart?.items?.length ?? 0;
    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.totalPrice);
    }, 0);

    return (<>
        <div className="mb-6 min-w-0 text-base font-bold text-black">
            Your order (1 Shipment)
        </div>
        <div className="my-4 min-w-0 rounded-[12px] text-black bg-white p-4 relative">
            <div className="m-0 min-w-0">
                <span className="text-black font-bold text-sm mr-2">Shipment 1/1</span>
                <span className="text-black font-light text-xs">({productCount} {productCount === 1 ? 'Item' : 'Items'})</span>
            </div>
            <div className="min-w-0 text-gray-500 my-1 mb-4 text-xs">Scheduled shipment</div>
            <div className="min-w-0 h-[58px] overflow-x-auto flex items-center my-3">
                {cart?.items?.map((item, index) => (
                    <span key={index} className="mr-4 text-[rgb(224,224,224)] relative h-12 w-12 min-w-[48px] block">
                        <span className="m-0 min-w-0 text-[rgb(77,77,77)] font-bold absolute top-0 left-1/2 -translate-x-1/2 bg-[rgb(234,234,234)] rounded-[2px_3px_3px_3px] px-1.5 text-[10px] leading-[16px] whitespace-nowrap">
                            {item.quantity}
                        </span>
                        <span className="m-0 min-w-0 overflow-hidden block p-1 h-12 w-12">
                            <img className="lazy-image-loaded max-w-full h-auto" src={item.links?.images?.[0]?.href} alt={item.name} />
                        </span>
                    </span>))}
            </div>
            <div className="m-0 min-w-0 flex pt-4 justify-between font-extrabold border-t border-gray-100">
                <span className="m-0 min-w-0">
                    Subtotal
                </span>
                <span className="m-0 min-w-0">
                    KES {new Intl.NumberFormat('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    }).format(totalPrice)}
                </span>
            </div>
        </div>
    </>);
}