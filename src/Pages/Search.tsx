import { observer } from "mobx-react-lite";
import { ChangeEvent, useEffect, useState } from "react";
import { BreweryItem } from "../Components/BreweryItemComponents/BreweryItem";
import { useStore } from "../MobX/store";
import Container from "../Components/MiscComponents/Container";
import ShowBreweriesByType from "../Components/BreweryItemComponents/BreweryItemSharedComponents/ShowBreweriesByType";

/**
 * Search component  page that allows searching for breweries and displays the search results.
 */
export const Search = observer(() => {
  const [search, setSearch] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const store = useStore();


  useEffect(() => {
    if (search && !isSearching) {
      //debounce
      setIsSearching(true);
      // Perform the API request to search for breweries
      fetch(
        `https://api.openbrewerydb.org/v1/breweries/search?query=${search}&per_page=50`
      )
        .then((data) => data.json())
        .then((data) => {
          // console.log(data)
          setIsSearching(false);
          // Populate the current search results in the store
          store.populateCurrentSearch([...data]);
        });
    }
  }, [search]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Generate BreweryItem components for each search result
  let searchResult = store.currentSearch.map((place, i) => (
    <BreweryItem brewery={place} key={`${place.id}-${i}`} />
  ));

  return (
    <Container>
      <>
        <div className="flex flex-col justify-center items-center">
          <input
            type="text"
            name="searchbox"
            placeholder="search"
            className="w-[1/3] border-2 border-neutral-500 rounded-xl px-3 m-5 outline-none text-black"
            value={search}
            onChange={handleChange}
          />
          {/* Display loading text during search */}
          {isSearching && (
            <div className="text-xs tracking-widest absolute top-[50px]">
              loading
            </div>
          )}
          {/* Display message when no search results */}
          {!searchResult.length && <h1>start a new search!</h1>}
        </div>
        {/* Show breweries by type based on search results */}
        <ShowBreweriesByType store={store.currentSearch} />
      </>
    </Container>
  );
});
