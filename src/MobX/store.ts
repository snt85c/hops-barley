import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { BreweryType } from "../assets/interfaces";

class Store {
  favourites: BreweryType[] = [];
  currentSearch: BreweryType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  isInFavourites(brewery: BreweryType) {
    return this.favourites.some((current) => current.id === brewery.id);
  }

  addTofavourites(brewery: BreweryType) {
    this.favourites.push(brewery);
  }

  removeFromFavourites(brewery: BreweryType) {
    this.favourites = this.favourites.filter(
      (current) => current.id !== brewery.id
    );
  }

  populateCurrentSearch(list: BreweryType[]) {
    this.currentSearch = list;
  }
}

export const schema = {
  favourites: {
    type: "list",
    schema: {
      name: true,
      brewery_type: true,
      city: true,
      state: true,
      country: true,
      id: true,
      latitude: true,
      longitude: true,
      website_url: true,
    },
  },
  currentSearch: {
    type: "list",
    schema: {
      name: true,
      brewery_type: true,
      city: true,
      state: true,
      country: true,
      id: true,
      latitude: true,
      longitude: true,
      website_url: true,
    },
  },
};

export const store = new Store();

export const StoreContext = createContext<Store>(store);

export const useStore = () => {
  return useContext(StoreContext);
};
