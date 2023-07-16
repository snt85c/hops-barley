import { BreweryType } from "../../../assets/interfaces";
import { StarIcon } from "../BreweryItemSharedComponents/StarIcon";
import BreweryLogo from "./BreweryLogo";

export default function DetailedInfo({ data }: { data: BreweryType }) {
  const handleStarContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <>
      <div className="flex justify-between">
        <span className=" text-2xl md:text-3xl font-bold pb-2 leading-none ">
          {data.name}
        </span>
        <div onClick={handleStarContainerClick}>
          <StarIcon brewery={data} />
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <div className="w-[50%]">
          {data.brewery_type && (
            <div className="flex flex-col md:flex-row ">
              <span className="text-xs text-neutral-500">type: </span>
              <span className="text-xs md:text-base">
                {data.brewery_type.substring(0, 1).toUpperCase() +
                  data.brewery_type.substring(1)}
              </span>
            </div>
          )}
          {data.street && (
            <div className="flex flex-col md:flex-row">
              <span className="text-xs text-neutral-500">street:</span>
              <span className="text-xs md:text-base">
                {data.street.substring(0, 1).toUpperCase() +
                  data.street.substring(1)}
              </span>
            </div>
          )}
          {data.postal_code && (
            <div className="flex flex-col md:flex-row">
              <span className="text-xs text-neutral-500">postal code:</span>
              <span className="text-xs md:text-base">{data.postal_code}</span>
            </div>
          )}
          {data.city && (
            <div className="flex flex-col md:flex-row">
              <span className="text-xs text-neutral-500">city: </span>
              <span className="text-xs md:text-base">{data.city}</span>
            </div>
          )}
          {data.country && (
            <div className="text-xs mt-1 text-neutral-500">{data.country}</div>
          )}
        </div>
        <BreweryLogo url={data.website_url} />
      </div>
    </>
  );
}
