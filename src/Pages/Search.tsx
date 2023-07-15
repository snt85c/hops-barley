import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Brewery } from "../Components/Brewery";
import { useStore } from "../MobX/store";

export const Search = observer(() => {
  const [search, setSearch] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const store = useStore();

  useEffect(() => {
    if (search && !isSearching) {
      setIsSearching(true);
      fetch(`https://api.openbrewerydb.org/v1/breweries/search?query=${search}`)
        .then((data) => data.json())
        .then((data) => {
          setIsSearching(false);
          store.populateCurrentSearch([...data]);
        });
    }
  }, [search]);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="search"
          className="w-[1/3] border-2 rounded-xl px-3 m-5 mb-1 outline-none"
          value={search}
          onChange={handleChange}
        />
        {isSearching && <div className="text-xs tracking-widest">loading</div>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {store.currentSearch.map((place, i) => (
          <Brewery brewery={place} key={`${place.id}-${i}`} />
        ))}
      </div>
    </>
  );
});
