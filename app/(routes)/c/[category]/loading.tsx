import ProductSkeleton from '@/components/ui/ProductSkeleton';
import Link from 'next/link';

export default function Loading() {
    // Show 8 skeleton cards as placeholders
    return (
        <>
            <div className="order-[-1] z-[1] mb-[5px]">
                <div className="m-0 min-w-0 flex flex-col items-start mb-4 pl-4">
                    <ul className="list-none flex items-center">
                        <li>
                            <Link href="/" rel="prefetch" className="font-medium text-[#0E5AA7] no-underline">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="m-0 min-w-0 flex justify-center flex-1">
                <div className="m-0 min-w-0 hidden md:flex flex-col w-auto md:w-[30%]"></div>
                <div className="m-0 min-w-0 flex flex-col justify-start w-full h-full pl-4 pr-4 pt-0 lg:pl-3 lg:pr-3">
                    <ProductSkeleton />
                </div>
            </div>
        </>
    );
}