import { BreweryType } from "../../../assets/interfaces";
import { BreweryItem } from "../BreweryItem";

/**
 * FilterBreweryType component filters and displays breweries based on their type.
 * @param store - Array of BreweryType objects representing the list of breweries.
 * @param type - Object containing the name and description of the brewery type to filter.
 */
export default function FilterBreweryType({
  store,
  type,
}: {
  store: BreweryType[];
  type: { name: string; descr: string };
}) {
  const result = store
    .filter((item) => item.brewery_type === type.name)
    .map((item, i) => <BreweryItem brewery={item} key={`${item.id}-${i}`} />);

  return (
    <div className="my-2">
      {result.length > 0 && (
        <div className="py-1 bg-gradient-to-l from-white to-neutral-500 text-white pl-3 leading-none">
          <div className="text-xl font-bold tracking-[.3em] font-serif">
            {type.name.toUpperCase()}
          </div>
          <div className="text-xs">{type.descr}</div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3">{result}</div>
    </div>
  );
}
