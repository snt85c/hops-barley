import { BreweryType } from "../../../assets/interfaces";
import { StarIcon } from "../BreweryItemSharedComponents/StarIcon";

export default function DetailedInfo({ data }: { data: BreweryType }) {
  const handleStarContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <div>
      <span className="text-2xl md:text-5xl font-bold pb-2 leading-none">
        {data.name}
      </span>
      <div onClick={handleStarContainerClick}>
        <StarIcon brewery={data} />
      </div>
      {data.brewery_type && (
        <div>
          <span className="text-xs">type: </span>
          <span>{data.brewery_type}</span>
        </div>
      )}
      {data.street && (
        <div>
          <span className="text-xs">street:</span>
          <span>{data.street}</span>
        </div>
      )}
      {data.postal_code && (
        <div>
          <span className="text-xs">postal code:</span>
          <span>{data.postal_code}</span>
        </div>
      )}
      {data.city && (
        <div>
          <span className="text-xs">city: </span>
          <span>{data.city}</span>
        </div>
      )}
      {data.country && <div className="text-xs">{data.country}</div>}
    </div>
  );
}
