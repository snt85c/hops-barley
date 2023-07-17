import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useStore } from "../../../MobX/store";
import { observer } from "mobx-react-lite";
import { BreweryType } from "../../../assets/interfaces";
import { motion } from "framer-motion";
import { useState } from "react";

/**
 * StarIcon component displays a star icon that represents the favorite status of a brewery.
 * Clicking the star adds/removes the brewery from the user's favorites.
 * @param brewery - BreweryType object representing the brewery.
 */
export const StarIcon = observer(({ brewery }: { brewery: BreweryType }) => {
  const store = useStore();
  const [isClicked, setIsClicked] = useState(false);

  /**
   * resetClickState function resets the click state of the star icon after a short delay.
   */
  const resetClickState = () => {
    setTimeout(() => {
      setIsClicked(!isClicked);
    }, 500);
  };

  /**
   * handleAddToFav function handles the addition of the brewery to the user's favorites.
   * It calls the addTofavourites method from the store and resets the click state.
   */
  const handleAddToFav = () => {
    store.addTofavourites(brewery);
    resetClickState();
  };

  /**
   * handleRemoveFromFav function handles the removal of the brewery from the user's favorites.
   * It calls the removeFromFavourites method from the store and resets the click state.
   */
  const handleRemoveFromFav = () => {
    store.removeFromFavourites(brewery);
    resetClickState();
  };

  //for framer-motion
  const iconVariants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotateY: 360,
    },
  };
  
  //for framer-motion
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
