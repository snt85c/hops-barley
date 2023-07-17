import { motion } from "framer-motion";
import DetailedInfo from "./DetailedInfo";
import { BreweryType } from "../../../assets/interfaces";
import BreweryMap from "./BreweryMap";

/**
 * Overlay component displays a detailed overlay view of a brewery that will
 *  appear on top of the main view when clicking the "read more" button.
 * it can be closed with the button or by clicking elsewhere
 * @param data - BreweryType object containing the brewery's information.
 * @param setIsClicked - Function to update the state to close the overlay.
 */
export default function Overlay({
  data,
  setIsClicked,
}: {
  data: BreweryType;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {/* Blur overlay */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm z-40 "
        onClick={() => setIsClicked(false)}
      ></div>

      {/* Main content */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="fixed top-[13vh] left-[2rem] md:left-[20vw] right-[2rem] md:right-[20vw] bottom-[2rem] z-50 flex flex-col justify-between"
      >
        <div className="bg-gradient-to-b from-neutral-300 via-white to-white border-2 rounded-lg p-5 md:px-10">
          <DetailedInfo data={data} />
          <BreweryMap data={data} />
          <div className="flex justify-center items-center">
            <button
              onClick={() => setIsClicked(false)}
              className="px-5 border-2 border-neutral-500 bg-white rounded-xl w-[50vw] md:w-[10vw] mt-1"
            >
              close
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
