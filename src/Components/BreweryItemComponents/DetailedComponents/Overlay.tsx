import { motion } from "framer-motion";
import DetailedInfo from "./DetailedInfo";
import { BreweryType } from "../../../assets/interfaces";

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
      className="fixed top-[5rem] left-[2rem] md:left-[5rem] right-[2rem] md:right-[5rem]  bottom-[2rem] bg-gradient-to-br from-neutral-200 via-white to-white/70 border-2 border-black rounded-lg p-5 z-50 flex flex-col justify-between"
    >
      <DetailedInfo data={data} />
      <div className="flex justify-center items-center">
        <button
          onClick={() => setIsClicked(false)}
          className="px-5 border-2 bg-white rounded-xl w-[50vw] md:w-[33vw]"
        >
          close
        </button>
      </div>
    </motion.div>
  );
}
