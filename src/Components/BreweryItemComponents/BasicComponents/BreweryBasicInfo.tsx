import { BreweryType } from "../../../assets/interfaces";

/**
 * BreweryBasicInfo component displays basic information about a brewery.
 * @param brewery - BreweryType object containing information about the brewery.
 */
export default function BreweryBasicInfo({
  brewery,
}: {
  brewery: BreweryType;
}) {
  return (
    <>
      <div className="flex flex-col justify-between w-full">
        <div className="tracking-wide font-extrabold text-xl leading-none">
          {brewery.name}
        </div>
        <div className="text-sm">
          {brewery.city} - {brewery.state} / {brewery.country}
        </div>
      </div>
    </>
  );
}
