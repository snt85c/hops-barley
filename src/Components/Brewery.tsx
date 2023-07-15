import { BreweryType } from "../assets/interfaces";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useStore } from "../MobX/store";
import { observer } from "mobx-react-lite";

export const Brewery = observer(({ brewery }: { brewery: BreweryType }) => {
  const store = useStore();

  return (
    <div className="flex justify-between items-center m-5">
      <div className="flex flex-col justify-start">
        <div>{brewery.name}</div>
        <div>
          {brewery.city} - {brewery.country}
        </div>
      </div>
      <div>
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
      </div>
    </div>
  );
});
