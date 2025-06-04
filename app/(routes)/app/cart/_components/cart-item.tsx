"use client";

import { useRef } from "react";
import useCart, { CartItem as CartItemType } from "@/hooks/use-cart";
import Link from "next/link";
import { toast } from "sonner";

interface CartItemProps {
  data: CartItemType;
  totalPrice?: number;
}

const MIN_ORDER_VALUE = 1000;

const showToast = () => {
  toast(
    <div className="p-0 md:rounded-lg flex items-center bg-yellow-300 text-black">
      <img
        alt="Yay! You met the minimum order value!"
        width="24"
        height="32"
        src="https://cdnprod.mafretailproxy.com/bff-assets/images/toast_mov_met.png"
        className="mr-2"
        style={{ color: "transparent" }}
      />
      <div className="text-md leading-5 font-bold">
        Yay! You met the minimum order value, and you can check out your cart now!
      </div>
    </div>,
    {
      style: {
        backgroundColor: "rgb(253 224 71 / 1)",
      },
    }
  );
};

const CartItem: React.FC<CartItemProps> = ({ data, totalPrice = 0 }) => {
  const prevTotalRef = useRef<number>(totalPrice);
  const toastShownRef = useRef<boolean>(false);

  const { addItem, removeItem, loading } = useCart();

  const onAdd = () => {
    const prevTotal = prevTotalRef.current;
    const itemTotal = data.totalPrice ?? 0;
    const newTotal = totalPrice + itemTotal;

    addItem(data);

    if (
      prevTotal < MIN_ORDER_VALUE &&
      newTotal >= MIN_ORDER_VALUE &&
      !toastShownRef.current
    ) {
      showToast();
      toastShownRef.current = true;
    }

    if (newTotal < MIN_ORDER_VALUE) {
      toastShownRef.current = false;
    }

    prevTotalRef.current = newTotal;
  };

  const onRemove = () => {
    const prevTotal = prevTotalRef.current;
    const itemTotal = data.totalPrice ?? 0;
    const newTotal = totalPrice - itemTotal;

    removeItem(data);

    if (
      prevTotal < MIN_ORDER_VALUE &&
      newTotal >= MIN_ORDER_VALUE &&
      !toastShownRef.current
    ) {
      showToast();
      toastShownRef.current = true;
    }

    if (newTotal < MIN_ORDER_VALUE) {
      toastShownRef.current = false;
    }

    prevTotalRef.current = newTotal;
  };

  const priceString = String(data.totalPrice.toFixed(2));
  const [minInt, minDecimal] = priceString.split(".");
  const quantityInCart = data.quantity || 0;
  const maxQuantity = data?.unit?.max ?? 10;
  const isAtMaxQuantity = quantityInCart >= maxQuantity;

  return (
    <div className="relative rounded-xl border-[0.5px] border-solid border-madison-50 p-2">
      {data.price?.discount && <div className="flex w-full absolute left-0 top-0 z-[1] max-w-[90%] max-h-[20px]">
        <div className="inline-flex items-center justify-center font-bold rounded-bl-xs rounded-br-xl rounded-tl-xl rounded-tr-xs px-2 py-1 text-[10px] bg-c4red-500 text-white flex max-h-[20px] relative max-w-[95%]">
          <span className="text-2xs leading-4 font-bold left truncate">{data.price?.discount?.value}% off </span>
        </div>
      </div>}
      <div className="relative flex items-start">
        <div className="relative flex overflow-hidden rounded-xl border-solid bg-white mr-2 min-w-[80px]">
          <Link href={`/p/${data.id}`}>
            <div className="flex justify-center size-[80px]">
              <img className="rounded-lg bg-[lightgray]" src={data.links?.images?.[0]?.href} />
            </div>
          </Link>
        </div>
        <div className="absolute bottom-1 right-1 rounded-full bg-secondary text-primary">
          <button className="inline-flex items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-[0.12] text-primary absolute left-0 top-0 z-[1] w-8 h-8 rounded-full focus-visible:ring-2 focus-visible:ring-primary" type="button" onClick={onRemove}>
            {data.quantity > 1 ? (<svg className="w-4 h-4 stroke-[3px] text-primary" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Minus</title>
              <path d="M3.75 12H20.25" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>) :
              (<svg className="w-4 h-4 stroke-[3px] text-primary" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Delete</title>
                <path d="M20.2496 5.25L3.74963 5.25001" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9.75 9.75V15.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M14.25 9.75V15.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>)}
          </button>
          <div className="w-full">
            <div className="relative flex w-full flex-col gap-1">
              <button type="button" role="combobox" aria-controls="radix-:Rq8b59j9uuuuuu5kq:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" className="flex w-full items-center gap-1 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-40 rtl:flex-row-reverse relative justify-center rounded-full border-2 border-white p-2 text-sm font-bold border-none bg-transparent px-[36px] text-primary">
                <span style={{ pointerEvents: 'none' }}>{data.quantity}</span>
                <svg className="w-4 h-4 stroke-[3px] text-primary" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>CaretDown</title>
                  <path d="M19.5 9L12 16.5L4.5 9" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
          <button className="inline-flex items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-[0.12] text-primary absolute right-0 top-0 w-8 h-8 rounded-full focus-visible:ring-2 focus-visible:ring-primary" type="button" onClick={onAdd} disabled={isAtMaxQuantity}>
            <svg className="w-4 h-4 stroke-[3px] text-primary" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Plus</title>
              <path d="M3.75 12H20.25" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M12 3.75V20.25" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
        <div className="">
          <Link href={`/p/${data.id}`}>
            <div className="text-sm leading-4 font-medium text-left line-clamp-1">
              <span>{data.name}</span>
            </div>
          </Link>
          <div className="text-2xs leading-4 font-medium truncate text-left text-gray-500">{data.unit?.size}</div>
          <div className="items-center block">
            <div className="mr-1 flex items-center text-c4blue-800">
              <div className="text-base leading-5 font-bold">{minInt}</div>
              <div className="ml-px flex flex-col"><div className="text-3xs font-bold leading-[10px]">.{minDecimal}</div>
                <div className="text-3xs font-medium leading-[10px]">{data.price?.currency}</div>
              </div>
            </div>
            {data.price?.discount && <div className="text-2xs leading-4 font-medium text-gray-500 line-through">KES {new Intl.NumberFormat('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(parseFloat(data.price.minBuyingValue) * data.quantity)}</div>}
          </div>
        </div>
      </div>
      {loading && <><div className="absolute inset-0 bg-white opacity-50" data-testid="progress-overlay"></div>
        <div className="absolute bottom-0 inset-x-0 h-[3px] w-full overflow-hidden bg-c4blue-100">
          <div className="size-full animate-progress-linear bg-primary"></div>
        </div></>}
    </div>
  );
};

export default CartItem;
