import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";

class Store {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };
}

export const schema = {
  count: true,
};

export const store = new Store();

export const StoreContext = createContext<Store>(store);

export const useStore = () => {
  return useContext(StoreContext);
};
