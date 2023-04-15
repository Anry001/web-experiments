import { create } from 'zustand';

interface ButtonState {
  numberOfClicks: number;
  incrementNumberOfClicks: () => void;
}

export const useButtonClicksStore = create<ButtonState>()((set) => ({
  numberOfClicks: 0,
  incrementNumberOfClicks: () =>
    set((state) => ({ numberOfClicks: state.numberOfClicks + 1 })),
}));
