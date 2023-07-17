import { BreweryType } from "../../../assets/interfaces";
import FilterBreweryType from "./FilterBreweryType";

/**
 * ShowBreweriesByType component displays breweries categorized by their types.
 * will map the TYPE and pass the information down to FilterBreweryType, where it will be sorted
 * @param store - Array of BreweryType objects representing the list of breweries.
 */
export default function ShowBreweriesByType({
  store,
}: {
  store: BreweryType[];
}) {
  const TYPE = [
    {
      name: "micro",
      descr:
        "Most craft breweries. For example, Samual Adams is still considered a micro brewery",
    },
    {
      name: "nano",
      descr:
        "An extremely small brewery which typically only distributes locally.",
    },
    {
      name: "regional",
      descr:
        " A regional location of an expanded brewery. Ex. Sierra Nevada’s Asheville, NC location.",
    },
    {
      name: "brewpub",
      descr:
        "A beer-focused restaurant or restaurant/bar with a brewery on-premise.",
    },
    {
      name: "large",
      descr:
        "A very large brewery. Likely not for visitors. Ex. Miller-Coors. (deprecated)",
    },
    {
      name: "planning",
      descr: "A brewery in planning or not yet opened to the public.",
    },
    {
      name: "bar",
      descr: "A bar. No brewery equipment on premise. (deprecated)",
    },
    {
      name: "contract",
      descr: "A brewery that uses another brewery’s equipment.",
    },
    {
      name: "proprietor",
      descr:
        "Similar to contract brewing but refers more to a brewery incubator.",
    },
    { name: "closed", descr: "A location which has been closed" },
  ];

  return (
    <div className="mb-20 w-[90vw]">
      {TYPE.map((type, i) => (
        <FilterBreweryType key={i} store={store} type={type} />
      ))}
    </div>
  );
}
