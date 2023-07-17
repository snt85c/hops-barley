import { BreweryType } from "../../../assets/interfaces";
import { StarIcon } from "../BreweryItemSharedComponents/StarIcon";
import BreweryLogo from "./BreweryLogo";


/**
 * DetailedInfo component displays detailed information about a brewery.
 * this is part of the Overlay top area and includes the information, the star and the logo
 * @param data - BreweryType object containing the brewery's information.
 */
export default function DetailedInfo({ data }: { data: BreweryType }) {
  const handleStarContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <div className="h-[30vh]">
      <div className="flex justify-between ">
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
            <div className="text-xs md:text-base">
              {data.brewery_type.substring(0, 1).toUpperCase() +
                data.brewery_type.substring(1)}
            </div>
          )}
          {data.street && (
            <div>
              {data.street.substring(0, 1).toUpperCase() +
                data.street.substring(1)}
            </div>
          )}
          {data.postal_code && (
            <span className="text-xs md:text-base">{data.postal_code}</span>
          )}
          {data.city && <div className="text-xs md:text-base">{data.city}</div>}
          {data.country && (
            <div className="text-xs text-neutral-500">{data.country}</div>
          )}
        </div>
        <BreweryLogo url={data.website_url} />
      </div>
    </div>
  );
}
