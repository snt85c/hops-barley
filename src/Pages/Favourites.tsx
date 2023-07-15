import { observer } from "mobx-react-lite";
import { useStore } from "../MobX/store";
import { Brewery } from "../Components/Brewery";

export const Favourites = observer(() => {
  const store = useStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {store.favourites.map((place, i) => (
        <Brewery brewery={place} key={`${place.id}-${i}`} />
      ))}
    </div>
  );
});
