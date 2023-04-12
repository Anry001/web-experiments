import { create } from 'zustand';

interface ButtonState {
  count: number;
  increment: () => void;
}

export const useButtonStore = create<ButtonState>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
