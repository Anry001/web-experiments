import { create } from 'zustand';

interface ButtonClicksState {
  numberOfClicks: number;
  incrementNumberOfClicks: () => void;
}

export const useButtonClicksStore = create<ButtonClicksState>()((set) => ({
  numberOfClicks: 0,
  incrementNumberOfClicks: () =>
    set((state) => ({ numberOfClicks: state.numberOfClicks + 1 })),
}));
