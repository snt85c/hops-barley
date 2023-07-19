import { BreweryType } from "../../assets/interfaces";
import BreweryBasicInfo from "./BasicComponents/BreweryBasicInfo";
import ReadMore from "./BasicComponents/ReadMore";
import { StarIcon } from "./BreweryItemSharedComponents/StarIcon";

/**
 * BreweryItem component displays a single brewery item.
 * clicking read more will open the Brewery Overlay with the detailed components
 * @param brewery - BreweryType object representing the brewery.
 */
export const BreweryItem = ({ brewery }: { brewery: BreweryType }) => {
  return (
    <div className="bg-gradient-to-bl from-neutral-200 to-white flex flex-col justify-between items-center m-5 mb-0 border-2 p-5 rounded-xl min-h-[5rem] ml-0 mr-0 md:mr-5">
      <div className="flex justify-between w-full">
        <BreweryBasicInfo brewery={brewery} />
        <StarIcon brewery={brewery} />
      </div>
      <ReadMore brewery={brewery} />
    </div>
  );
};
