import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useStore } from "../../../MobX/store";
import { observer } from "mobx-react-lite";
import { BreweryType } from "../../../assets/interfaces";
import { motion } from "framer-motion";
import { useState } from "react";

export const StarIcon = observer(({ brewery }: { brewery: BreweryType }) => {
  const store = useStore();
  const [isClicked, setIsClicked] = useState(false);

  const resetClickState = () => {
    setTimeout(() => {
      setIsClicked(!isClicked);
    }, 500);
  };

  const handleAddToFav = () => {
    store.addTofavourites(brewery);
    resetClickState();
  };

  const handleRemoveFromFav = () => {
    store.removeFromFavourites(brewery);
    resetClickState();
  };

  const iconVariants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotateY: 360,
    },
  };

  const iconTransition = {
    type: "spring",
    duration: 1,
  };

  return (
    <>
      {store.isInFavourites(brewery) ? (
        <motion.div
          initial="initial"
          animate={isClicked ? "animate" : "initial"}
          variants={iconVariants}
          transition={iconTransition}
        >
          <button id="star-test" onClick={handleRemoveFromFav}>
            <AiFillStar size={40} className="text-amber-500" />
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial="initial"
          animate={isClicked ? "animate" : "initial"}
          variants={iconVariants}
          transition={iconTransition}
        >
          <button id="star-test" onClick={handleAddToFav}>
            <AiOutlineStar size={40} className="text-amber-500" />
          </button>
        </motion.div>
      )}
    </>
  );
});
