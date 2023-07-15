import { observer } from "mobx-react-lite";
import { useStore } from "../MobX/store";
import { BreweryItem } from "../Components/BreweryItemComponents/BreweryItem";
import Container from "../Components/Container";

export const Favourites = observer(() => {
  const store = useStore();
  let favouriteList = store.favourites.map((place, i) => (
    <BreweryItem brewery={place} key={`${place.id}-${i}`} />
  ));

  return (
    <Container>
      <>
      <div className="grid grid-cols-1 md:grid-cols-3">{favouriteList}</div>
      {!favouriteList.length && <div className="mt-10">no items yet!</div>}
      </>
    </Container>
  );
});
