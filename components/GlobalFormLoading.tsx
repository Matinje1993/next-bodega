"use client";

import { useLoadingStore } from "@/stores/loadingStore";

export default function GlobalFormLoading() {
    const { isLoading } = useLoadingStore();

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-10 bg-black/40 flex justify-center items-center">
            <div className="text-white text-[30px] text-center animate-fade-in">
                <div className="m-0 min-w-0">
                    Placing Your Order
                    <br />
                    Please wait
                    <span className="opacity-0 animate-custom-loop after:inline-block after:align-bottom after:content-['.']"></span>
                    <span className="opacity-0 animate-custom-fade after:inline-block after:align-bottom after:content-['.']"></span>
                    <span className="opacity-0 animate-custom-fade3 after:inline-block after:align-bottom after:content-['.']"></span>
                </div>
            </div>
        </div>
    );
}