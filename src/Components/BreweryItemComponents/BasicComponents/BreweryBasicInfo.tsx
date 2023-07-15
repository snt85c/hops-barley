import { BreweryType } from "../../../assets/interfaces";
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
          {brewery.city} - {brewery.country}
        </div>
      </div>
    </>
  );
}
