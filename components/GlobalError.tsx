'use client';

import { useErrorStore } from '@/stores/useErrorStore';
import { useEffect } from 'react';
import { useRouter } from "next/navigation";

const GlobalError = () => {
    const { error, shouldRedirect, clearError } = useErrorStore();
    const router = useRouter();

    useEffect(() => {
        if (error && shouldRedirect) {
            const timer = setTimeout(() => {
                router.push("/app/cart");
                clearError();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [error, shouldRedirect, router, clearError]);

    if (!error) return null;

    return (
        <div className="min-w-0 px-4 max-w-[1232px] mx-auto font-montserrat not-italic xs:px-6 md:px-0">
            <div className="flex items-start z-[1041] visible animate-[animation-1954lrg_0.6s_linear] rounded-[2px] p-4 mt-8 border-t-[3px] border-t-[#ee2527]">
                <div className="flex-grow basis-full">
                    <div>{error}</div>
                </div>
                <button onClick={clearError} className="uppercase transition-shadow transition-colors duration-300 ease-in-out w-auto text-[18px] text-[#4d4d4d] cursor-pointer p-0 bg-transparent">
                    ✕
                </button>
            </div>
        </div>
    );
};

export default GlobalError;