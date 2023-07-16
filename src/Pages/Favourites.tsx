import { observer } from "mobx-react-lite";
import { useStore } from "../MobX/store";
import Container from "../Components/Container";
import FilterBreweryType from "../Components/BreweryItemComponents/BreweryItemSharedComponents/FilterBreweryType";

export const Favourites = observer(() => {
  const store = useStore();

  return (
    <Container>
      <>
        <FilterBreweryType store={store.favourites} type="micro" />
        <FilterBreweryType store={store.favourites} type="brewpub" />
        <FilterBreweryType store={store.favourites} type="contract" />
        <FilterBreweryType store={store.favourites} type="closed" />
        {!store.favourites.length && <div className="mt-10">no items yet!</div>}
      </>
    </Container>
  );
});
