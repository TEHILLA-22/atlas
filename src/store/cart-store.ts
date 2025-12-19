// store/cart-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type DomainItem = {
  domain: string;
  price: number;
  year: number;
  privacy: boolean;
};

type CartState = {
  items: DomainItem[];
  addItem: (item: DomainItem) => void;
  removeItem: (domain: string) => void;
  clearCart: () => void;
  total: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      removeItem: (domain) =>
        set((state) => ({ items: state.items.filter((i) => i.domain !== domain) })),
      clearCart: () => set({ items: [] }),
      total: () => get().items.reduce((sum, item) => sum + item.price, 0),
    }),
    { name: 'atlas-cart-storage' }
  )
);