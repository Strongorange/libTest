/**
 * zustand 는 react 의 useState 와 비슷한 기능을 제공하는 라이브러리
 */
import create from "zustand";

interface ID {
  id: string;
  setId: (id: string) => void;
}

interface IBook {
  amount: number;
  updateAmount: (newAmount: number) => void;
  sumAmount: (plusAmount: number) => void;
  author: string;
}

export const IdStore = create<ID>((set) => ({
  id: "init",
  setId: (id) => {
    set((state) => ({ id: id }));
  },
}));

/**
 * useBook Create 는 매개변수 set, get 을 받음
 * set 은 state 를 변경하는 함수, 매개변수로 현재의 state 를 받아 사용할 수 있음
 * get 은 get()를 통해 현재 state를 가져올 수 있음 아래에서 get(0.amount 를 통해 현재 amount 를 가져옴)
 */
export const useBookStore = create<IBook>((set, get) => ({
  amount: 400,
  updateAmount: (newAmount: number) =>
    set((state) => ({ ...state, amount: newAmount })),
  sumAmount: (plusAmount: number) => {
    const currentAmount = get().amount;
    set({ amount: currentAmount + plusAmount });
  },
  author: "John Doe",
}));
