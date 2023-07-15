import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { BreweryItem } from "../Components/BreweryItemComponents/BreweryItem";
import { useStore } from "../MobX/store";
import Container from "../Components/Container";

export const Search = observer(() => {
  const [search, setSearch] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const store = useStore();

  useEffect(() => {
    if (search && !isSearching) {
      setIsSearching(true);
      fetch(
        `https://api.openbrewerydb.org/v1/breweries/search?query=${search}&per_page=27`
      )
        .then((data) => data.json())
        .then((data) => {
          setIsSearching(false);
          console.log(data);
          store.populateCurrentSearch([...data]);
        });
    }
  }, [search]);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  let searchResult = store.currentSearch.map((place, i) => (
    <BreweryItem brewery={place} key={`${place.id}-${i}`} />
  ));

  return (
    <Container>
      <>
        <div className="flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="search"
            className="w-[1/3] border-2 rounded-xl px-3 m-5 mb-1 outline-none text-black"
            value={search}
            onChange={handleChange}
          />
          {isSearching && (
            <div className="text-xs tracking-widest">loading</div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3">{searchResult}</div>
          {!searchResult.length && (
            <div className="mt-10">start a new search!</div>
          )}
        </div>
      </>
    </Container>
  );
});
