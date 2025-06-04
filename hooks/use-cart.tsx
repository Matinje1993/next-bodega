import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";

export interface CartItem extends Product {
  quantity: number;
  totalPrice?: number;
}

interface CartStore {
  items: CartItem[];
  loading: boolean;
  setLoading: (value: boolean) => void;
  addItem: (data: Product) => Promise<void>;
  removeItem: (data: Product) => Promise<void>;
  removeAll: (data: Product) => void;
  removeAllCart: () => void;
  itemExists: (data: Product) => boolean;
  getItemQuantity: (data: Product) => number;
  getItemTotalPrice: (data: Product) => string;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      loading: false,

      setLoading: (value: boolean) => set({ loading: value }),

      addItem: async (data: Product) => {
        set({ loading: true });
        const currentItems = get().items;

        const existingItem = currentItems.findIndex(
          (item) => item.id === data.id && item.size === data.size
        );

        if (
          data?.price?.discount &&
          new Date(data.price.discount.endDate) <= new Date()
        ) {
          data.price.discount = null;
        }

        const basePrice = data.price?.discount?.minBuyingValue
          ? parseFloat(data.price.discount.minBuyingValue)
          : data?.price?.minBuyingValue
            ? parseFloat(data.price.minBuyingValue)
            : +data.price.price;

        if (existingItem !== -1) {
          const updatedItems = [...currentItems];
          updatedItems[existingItem].quantity += 1;
          updatedItems[existingItem].totalPrice =
            updatedItems[existingItem].quantity * basePrice;

          set({ items: updatedItems });
        } else {
          set({
            items: [
              ...currentItems,
              {
                ...data,
                quantity: 1,
                totalPrice: basePrice,
              },
            ],
          });
        }
        set({ loading: false });
      },

      removeItem: async (data: Product) => {
        set({ loading: true });
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.id === data.id && item.size === data.size
        );

        if (existingItemIndex !== -1) {
          const updatedItems = [...currentItems];
          const basePrice = data?.price.minBuyingValue
            ? parseFloat(data.price.minBuyingValue)
            : +data.price;

          if (updatedItems[existingItemIndex].quantity > 1) {
            updatedItems[existingItemIndex].quantity -= 1;
            updatedItems[existingItemIndex].totalPrice =
              updatedItems[existingItemIndex].quantity * basePrice;
          } else {
            updatedItems.splice(existingItemIndex, 1);
          }
          set({ items: updatedItems });
        }
        set({ loading: false });
      },

      removeAll: (data: Product) => {
        const currentItems = get().items;
        const remainingItems = currentItems.filter(
          (item) => !(item.id === data.id && item.size === data.size)
        );
        set({ items: remainingItems });
      },

      removeAllCart: () => {
        set({ items: [] });
      },

      itemExists: (data: Product) => {
        const currentItems = get().items;
        return currentItems.some(
          (item) => item.id === data.id && item.size === data.size
        );
      },

      getItemQuantity: (data: Product) => {
        const currentItems = get().items;
        const item = currentItems.find(
          (item) => item.id === data.id && item.size === data.size
        );
        return item ? item.quantity : 0;
      },

      getItemTotalPrice: (data: Product) => {
        const currentItems = get().items;
        const item = currentItems.find(
          (item) => item.id === data.id && item.size === data.size
        );
        const total = item?.totalPrice ?? 0;
        return total.toFixed(2);
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
