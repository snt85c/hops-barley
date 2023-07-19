import { Store } from "../MobX/store";

describe("mobX store test", () => {
  let items;
  let store;

  beforeEach(() => {
    // Reset the store and mockBreweriesData before each test
    store = new Store();
    items = [
      {
        name: "mock brewery 1",
        brewery_type: "mock",
        city: "London",
        country: "uk",
        id: "1",
        latitude: "50",
        longitude: "50",
        street: "",
        postal_code: "se85sr",
        state: "greater london",
        website_url: "www.example.com",
        phone: "1234567890",
      },
      {
        name: "mock brewery 2",
        brewery_type: "mock",
        city: "London",
        country: "uk",
        id: "2",
        latitude: "50",
        longitude: "50",
        street: "",
        postal_code: "se85sr",
        state: "greater london",
        website_url: "www.example.com",
        phone: "1234567890",
      },
    ];
  });

  test("store.favourites and store.currentSearch to be empty when a new store is initalised", () => {
    expect(store.favourites.length).toBe(0);
    expect(store.currentSearch.length).toBe(0);
  });

  test("add to favourites", () => {
    //i expect the store initial lenght to be 0
    expect(store.favourites.length).toBe(0);

    //add one, then check the lenght of the store.favourite to be 1
    store.addTofavourites(items[0]);
    expect(store.favourites.length).toBe(1);
  });

  test("add to currentSearch, then remove", () => {
    //i expect the store initial lenght to be 0
    expect(store.currentSearch.length).toBe(0);

    //add the entire array, then check the lenght of the store.currentSearch to be 2
    store.populateCurrentSearch(items);
    expect(store.currentSearch.length).toBe(2);

    //clear the currentSearch by passing an array, expect the lenght to be 0
    store.populateCurrentSearch([])
    expect(store.currentSearch.length).toBe(0);

  });

  test("add and check if is in favourites, expects true", () => {
    //add to store
    store.addTofavourites(items[0]);

    //check via isInFavourite function
    expect(store.isInFavourites(items[0])).toBe(true);
  });

  test("add items[0] and check if is items[1] in favourites, expect false", () => {
    //add to store
    store.addTofavourites(items[0]);

    //check if a different item is in the store.function
    expect(store.isInFavourites(items[1])).toBe(false);
  });

  test("add, then delete", () => {
    //add, then check that is in favourites via provided function
    store.addTofavourites(items[0]);
    expect(store.isInFavourites(items[0])).toBe(true);

    //remove then check via provided function and expected array lenght to be 0
    store.removeFromFavourites(items[0]);
    expect(store.isInFavourites(items[0])).toBe(false);
    expect(store.favourites.length).toBe(0);
  });
});
