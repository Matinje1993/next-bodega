"use client";

import { useActiveProduct } from "@/hooks/use-active-product";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import Link from "next/link";

interface ProductCard {
    product: Product;
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
    const { addItem, removeItem, itemExists, getItemQuantity, loading } = useCart();
    const { activeProductId, setActiveProductId, startResetTimer, cancelResetTimer } = useActiveProduct();
    const quantityInCart = getItemQuantity(product) || 0;
    const maxQuantity = product?.unit?.max ?? 10;

    const isAtMaxQuantity = quantityInCart >= maxQuantity;

    const handleAddToCart = async (product: Product) => {
        if (!isAtMaxQuantity) {
            await addItem(product);
        }
        toggleCartAction(product);
    };

    const toggleCartAction = (product: Product) => {
        setActiveProductId(product.id);
    };
    if (product.price?.discount) {

    } else {

    }
    const [minInt, minDecimal] = (
        product.price?.discount?.minBuyingValue ??
        product.price?.minBuyingValue ??
        '0.00'
    ).split('.');
    const isActive = activeProductId === product.id && itemExists(product);
    if (
        product?.price?.discount &&
        new Date(product.price.discount.endDate) <= new Date()
    ) {
        product.price.discount = null;
    }

    return (
        <div>
            <ul className="bg-white rounded-[16px] p-3 m-0 relative shadow-none border border-[#efefef] font-montserrat w-auto h-[283px] md:h-[303px] md:p-3">
                <div className="relative">
                    <div className="relative text-center">
                        <div className="relative top-[-9px] left-[-9px] lg:top-[-13px] lg:left-[-13px]">
                            <div className="discount-badge m-0 min-w-0 h-[28px] absolute left-0 top-0 z-[1]">
                            </div>
                            {product.price?.discount && <div className="discount-badge m-0 min-w-0 h-[28px] absolute left-0 top-0 z-[1]">
                                <span className="max-w-[110px] md:max-w-[120px] font-[Montserrat] relative z-[1] text-ellipsis overflow-hidden align-top w-[42px] h-[44px] font-bold bg-[#fdf4f4] px-[5px] py-[10px] rounded-[12px_2px] text-[#c81416] block text-[12px] border-none whitespace-normal">
                                    {product.price?.discount.value}% Off
                                </span>
                            </div>}
                        </div>
                        <div className="m-auto h-[136px] max-w-[128px] md:h-[156px] md:max-w-[148px]">
                            <Link href={`/p/${product.id}`} className="flex items-center justify-center h-full max-w-full">
                                <img loading="lazy" height="auto" width="100%" src={product.links?.images?.[0]?.href || "/placeholder.jpg"} alt={product.name} className="block h-auto w-auto max-h-[136px] max-w-[128px] md:max-h-[156px] md:max-w-[156px]" />
                            </Link>
                            <div className="product-card-actions absolute bottom-0 left-0 right-0 z-[2]">
                                <div className={`${itemExists(product) ? '' : 'flex '} justify-between items-center m-0 min-w-0`}>
                                    {isAtMaxQuantity && <div className="box-border min-w-0 bg-[#fdf4f4] mx-auto mb-[10px] pt-[5px] pb-[5px] text-[12px] text-[#c81416] leading-[14px] w-[103px] rounded-[50px] font-bold">
                                        <div>Max reached</div>
                                    </div>}
                                    {isActive ? (<div className="m-0 min-w-0 flex flex-grow justify-between rounded-[18px] text-white bg-[#0e5aa7]">
                                        <button
                                            type="button"
                                            onMouseEnter={cancelResetTimer}
                                            onMouseLeave={startResetTimer}
                                            onClick={() => removeItem(product)}
                                            className={`text-white bg-[#0e5aa7] rounded-full w-[32px] h-[32px] flex items-center justify-center uppercase text-sm p-0 transition-all duration-300 ease-[cubic-bezier(0.4,_0,_0.2,_1)] ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                            disabled={loading}>
                                            <svg id="Minus" viewBox="0 0 120 120" className="w-[22px] h-[15px]"><g><rect fill="#fff" height="6" width="100" x="10" y="54"></rect></g></svg>
                                        </button>
                                        <div className="m-0 min-w-0">
                                            <div className="w-full inline-block h-[30px]">
                                                <div className="m-0 min-w-0 flex items-center justify-center text-[#4d4d4d] cursor-pointer right-0 static w-[32px] h-[32px] bg-[#0e5aa7] rounded-[16px] place-content-center p-0">
                                                    <span className="overflow-hidden leading-normal whitespace-nowrap text-white font-bold transition-colors duration-250">
                                                        {getItemQuantity(product)}
                                                        <span className="transition-colors duration-250"></span>
                                                    </span>
                                                    <div className="cursor-pointer rotate-90"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onMouseEnter={cancelResetTimer}
                                            onMouseLeave={startResetTimer}
                                            onClick={() => addItem(product)}
                                            className={`text-[#fafafa] rounded-[18px] flex items-center justify-center leading-[26px] flex-shrink-0 text-white border-0 uppercase outline-none transition-all duration-300 ease-[cubic-bezier(0.4,_0,_0.2,_1)] text-[14px] p-0 w-[32px] h-[32px] rounded-full bg-[#0e5aa7] ${loading || isAtMaxQuantity ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                            disabled={loading || isAtMaxQuantity}>
                                            <svg id="Plus" viewBox="-1 -1 26 26" className="w-[16px] h-[16px]"><g><polygon points="12.5,2 11.5,2 11.5,11.5 2,11.5 2,12.5 11.5,12.5 11.5,22 12.5,22 12.5,12.5 22,12.5 22,11.5 12.5,11.5 " stroke="#fff" strokeWidth="2"></polygon></g></svg>
                                        </button>
                                    </div>) : (<>
                                        <div className="m-0 min-w-0 flex-grow">

                                        </div>
                                        {itemExists(product) ? (<div className="w-full inline-block h-[30px]">
                                            <div className="m-0 min-w-0 flex items-center justify-center text-gray-600 cursor-pointer absolute bottom-0 right-0 w-[32px] h-[32px] bg-[#0e5aa7] rounded-full p-0" onClick={() => toggleCartAction(product)}>
                                                <span className="overflow-hidden leading-normal whitespace-nowrap text-white font-bold transition-colors duration-250">
                                                    {getItemQuantity(product)}
                                                    <span className="transition-colors duration-250"></span>
                                                </span>
                                            </div>
                                        </div>) : (
                                            <div className="m-0 w-min-0">
                                                <button className={`flex items-center justify-center w-8 h-8 rounded-full bg-[#0e5aa7] text-white uppercase text-sm font-semibold transition-all duration-300 ease-out hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => handleAddToCart(product)} disabled={loading}>
                                                    <svg id="Plus" viewBox="-1 -1 26 26" className="w-[16px] h-[16px]">
                                                        <g>
                                                            <polygon points="12.5,2 11.5,2 11.5,11.5 2,11.5 2,12.5 11.5,12.5 11.5,22 12.5,22 12.5,12.5 22,12.5 22,11.5 12.5,11.5 " stroke="#fff" strokeWidth="2"></polygon>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                        )}</>)}
                                </div>
                            </div>
                            <div className="absolute bottom-1 left-0"></div>
                        </div>
                    </div>
                    <div className="product_now_badge m-0 min-w-0 h-auto"></div>
                    <div>
                        <div className="product_price flex items-center">
                            {product.price?.discount ? (<div className="product-card-discount-price text-black font-medium">
                                <div className="inline-block decoration-inherit">
                                    <div className="m-0 min-w-0 text-xl leading-7 inline-block font-bold">
                                        {minInt}
                                    </div>
                                    <div className="mt-[5px] mr-0 mb-0 ml-[4px] min-w-0 inline-block align-top">
                                        <div className="m-0 min-w-0 text-[10px] leading-[10px] font-bold">
                                            .{minDecimal}
                                        </div>
                                        <div className="m-0 min-w-0 text-[7px] leading-[7px] font-normal"><span>{product.price?.currency || "KES"}</span></div>
                                    </div>
                                </div>
                            </div>) : (
                                <div className="product-card-original-price text-black font-medium text-[11px] md:text-[15px]">
                                    <div className="inline-block text-inherit">
                                        <div className="m-0 min-w-0 text-xl leading-7 inline-block font-bold">
                                            {minInt}
                                        </div>
                                        <div className="mt-[5px] mr-0 mb-0 ml-[4px] min-w-0 inline-block align-top">
                                            <div className="m-0 min-w-0 text-[10px] leading-[10px] font-bold">
                                                .{minDecimal}
                                            </div>
                                            <div className="m-0 min-w-0 text-[7px] leading-[7px] font-normal"><span>{product.price?.currency || "KES"}</span></div>
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                        {product.price?.discount ? (<div className="product-card-original-price text-[11px] md:text-[10px] text-[rgb(104,104,104)] font-normal line-through">
                            <div className="inline-block line-through">
                                <span>{product.price?.currency || "KES"}</span>
                                {product.price?.minBuyingValue || "0.00"}
                            </div>
                            <div className="inline-block max-w-[110px] bg-none px-1 text-[10px] h-[18px] rounded-[2px] text-[rgb(238,37,39)] font-[400] font-[Montserrat] relative z-[1] overflow-hidden text-ellipsis whitespace-nowrap align-top border-0 md:max-w-[120px]">
                                {product.price?.discount.value}% OFF
                            </div>
                        </div>) : (<div className="m-0 min-w-0 min-h-[18px]"></div>)}
                        <div className="m-0 min-w-0 h-[32px] md:h-auto">
                            <Link href={`/p/${product.id}`} className="text-black no-underline overflow-hidden line-clamp-2 text-[12px] leading-[16px] md:text-[14px] md:leading-[18px]" title={product.name}>
                                {product.name}
                            </Link>
                        </div>
                        <div className="text-[10px] text-gray-500 font-light line-clamp-1 md:text-[12px] mt-[2px]"></div>
                        <div className="m-0 min-w-0 min-h-[16px] text-[12px] leading-[16px] text-[#f34041]">{product?.stock?.stockLevelStatus === 'lowStock' && product?.stock?.value && `Only ${product?.stock?.value} left!`}</div>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default ProductCard;