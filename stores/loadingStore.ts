import { create } from "zustand";

type LoadingStore = {
  isLoading: boolean;
  setLoading: (state: boolean) => void;
};

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: false,
  setLoading: (state) => set({ isLoading: state }),
}));