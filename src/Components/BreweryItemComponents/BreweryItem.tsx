import { BreweryType } from "../../assets/interfaces";
import BreweryBasicInfo from "./BasicComponents/BreweryBasicInfo";
import BreweryDetailedOverlay from "./DetailedComponents/ReadMore";
import { StarIcon } from "./BreweryItemSharedComponents/StarIcon";

export const BreweryItem = ({ brewery }: { brewery: BreweryType }) => {
  return (
    <div className="flex flex-col justify-between items-center m-5 mb-0 border-2 p-5 rounded-xl min-h-[7rem] ml-0 mr-0 md:mr-5">
      <div className="flex justify-between w-full">
        <BreweryBasicInfo brewery={brewery} />
        <StarIcon brewery={brewery} />
      </div>
      <BreweryDetailedOverlay brewery={brewery} />
    </div>
  );
};
