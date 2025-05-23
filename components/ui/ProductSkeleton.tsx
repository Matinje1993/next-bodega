const ProductSkeleton = ({ count = 8 }: { count?: number }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="min-w-0 border border-dashed border-[#e6e6e6] rounded-[2px] pl-[12px] pr-[12px] pt-[32px]">
                    <div className="m-0 min-w-0 shrink-0 h-[156px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

                    </div>
                    <div className="mt-[8px] mb-0 mx-0 min-w-0 h-[87px]">
                        <div className="box-border m-0 min-w-0 shrink-0 h-[12px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

                        </div>
                        <div className="box-border mt-[5px] mx-0 min-w-0 shrink-0 h-[12px] w-[80%] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

                        </div>
                    </div>
                    <div className="m-0 min-w-0 shrink-0 h-[16px] w-[74px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

                    </div>
                    <div className="min-w-0 border-t border-dashed border-[#e6e6e6] rounded-[2px] flex items-center justify-between p-2 shrink-0 mt-[32px] mx-[-12px] mb-0">
                        <div className="m-0 min-w-0 shrink-0 h-[12px] w-[48%] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

                        </div>
                        <div className="box-border m-0 min-w-0 shrink-0 h-[32px] w-[64px] rounded-[2px] bg-[#ebf0f3] bg-[linear-gradient(90deg,_#ebf0f3,_#f5f5f5,_#ebf0f3)] bg-no-repeat bg-[length:200px_100%] animate-shimmer">

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductSkeleton;