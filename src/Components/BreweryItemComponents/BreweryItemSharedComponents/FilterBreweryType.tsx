import { BreweryType } from "../../../assets/interfaces";
import { BreweryItem } from "../BreweryItem";

export default function FilterBreweryType({
  store,
  type,
}: {
  store: BreweryType[];
  type: string;
}) {
  const result = store
    .filter((item) => item.brewery_type === type)
    .map((item, i) => <BreweryItem brewery={item} key={`${item.id}-${i}`} />);
  return (
    <div>
      {result.length > 0 && (
        <div className="mt-5 text-xl font-bold">
          {type.substring(0, 1).toUpperCase() + type.substring(1)}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3">{result}</div>
    </div>
  );
}
