import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { BreweryType } from "../assets/interfaces";

/**
 * Store class represents the application store that manages state and actions related to breweries.
 */
export class Store {
  favourites: BreweryType[] = [];
  currentSearch: BreweryType[] = [];

  constructor() {
    //automatically make the properties of the class observable
    makeAutoObservable(this);
  }

  /**
   * Checks if a brewery is in the list of favorites.
   * @param brewery - The brewery to check.
   * @returns `true` if the brewery is in favorites, `false` otherwise.
   */
  isInFavourites(brewery: BreweryType) {
    return this.favourites.some((current) => current.id === brewery.id);
  }

  /**
   * Adds a brewery to the list of favorites.
   * @param brewery - The brewery to add.
   */
  addTofavourites(brewery: BreweryType) {
    this.favourites.push(brewery);
  }

  /**
   * Removes a brewery from the list of favorites.
   * @param brewery - The brewery to remove.
   */
  removeFromFavourites(brewery: BreweryType) {
    this.favourites = this.favourites.filter(
      (current) => current.id !== brewery.id
    );
  }

  /**
   * Populates the current search results with the provided list of breweries.
   * @param list - The list of breweries to populate.
   */
  populateCurrentSearch(list: BreweryType[]) {
    this.currentSearch = list;
  }
}

//define structure of favourites and current search based on MobX necessity
const dataType = {
  type: "list",
  schema: {
    id: true,
    name: true,
    brewery_type: true,
    city: true,
    state: true,
    country: true,
    latitude: true,
    longitude: true,
    website_url: true,
    phone: true,
  },
};

// Define the schema for the store. this is used to rehydrate in main.tsx
export const schema = {
  favourites: dataType,
  currentSearch: dataType,
};

// Create an instance of the store
export const store = new Store();

// Create a context for the store
export const StoreContext = createContext<Store>(store);

/**
 * Hook to access the store instance within a component.
 * @returns The store instance.
 */
export const useStore = () => {
  return useContext(StoreContext);
};
