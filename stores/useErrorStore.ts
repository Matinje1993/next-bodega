import { create } from "zustand";

type ErrorStore = {
  error: string;
  shouldRedirect: boolean;
  setError: (msg: string, redirect?: boolean) => void;
  clearError: () => void;
};

export const useErrorStore = create<ErrorStore>((set) => ({
  error: '',
  shouldRedirect: false,
  setError: (msg, redirect = false) => set({ error: msg, shouldRedirect: redirect }),
  clearError: () => set({ error: '', shouldRedirect: false }),
}));