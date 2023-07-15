import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useStore } from "../../MobX/store";
import { observer } from "mobx-react-lite";
import { BreweryType } from "../../assets/interfaces";

export const StarIcon = observer(({ brewery }: { brewery: BreweryType }) => {
  const store = useStore();
  return (
    <>
      {store.isInFavourites(brewery) ? (
        <AiFillStar
          size={30}
          className="text-amber-500"
          onClick={() => store.removeFromFavourites(brewery)}
        />
      ) : (
        <AiOutlineStar
          size={30}
          className="text-amber-500"
          onClick={() => store.addTofavourites(brewery)}
        />
      )}
    </>
  );
});
