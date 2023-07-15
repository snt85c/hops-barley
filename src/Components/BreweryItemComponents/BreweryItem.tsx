import { BreweryType } from "../../assets/interfaces";
import BreweryBasicInfo from "./BreweryBasicInfo";
import { StarIcon } from "./StarIcon";

export const BreweryItem = ({ brewery }: { brewery: BreweryType }) => {
  return (
    <div className="flex justify-between items-center m-5">
      <BreweryBasicInfo brewery={brewery} />
      <StarIcon brewery={brewery} />
    </div>
  );
};
