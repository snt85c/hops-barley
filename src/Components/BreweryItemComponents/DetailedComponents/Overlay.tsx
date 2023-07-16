import { motion } from "framer-motion";
import DetailedInfo from "./DetailedInfo";
import { BreweryType } from "../../../assets/interfaces";
import BreweryMap from "./BreweryMap";

export default function Overlay({
  data,
  setIsClicked,
}: {
  data: BreweryType;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="fixed top-[13vh] left-[2rem] md:left-[20vw] right-[2rem] md:right-[20vw]  bottom-[2rem] bg-gradient-to-b from-neutral-200 via-white to-white/90 border-2 rounded-lg p-5 z-50 flex flex-col justify-between"
    >
      <DetailedInfo data={data} />
      <BreweryMap data={data} />
      <div className="flex justify-center items-center">
        <button
          onClick={() => setIsClicked(false)}
          className="px-5 border-2 border-neutral-500 bg-white rounded-xl w-[50vw] md:w-[10vw] mt-5"
        >
          close
        </button>
      </div>
    </motion.div>
  );
}
