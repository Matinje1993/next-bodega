import { create } from "zustand";

interface ActiveProductState {
  activeProductId: number | null;
  setActiveProductId: (id: number | null) => void;
  startResetTimer: () => void;
  cancelResetTimer: () => void;
}

export const useActiveProduct = create<ActiveProductState>((set, get) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return {
    activeProductId: null,

    setActiveProductId: (id) => {
      set({ activeProductId: id });
    },

    startResetTimer: () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        set({ activeProductId: null });
        timeout = null;
      }, 60_000); // 1 minute
    },

    cancelResetTimer: () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    },
  };
});