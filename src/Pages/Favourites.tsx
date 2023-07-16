import { observer } from "mobx-react-lite";
import { useStore } from "../MobX/store";
import Container from "../Components/Container";
import ShowBreweriesByType from "../Components/BreweryItemComponents/BreweryItemSharedComponents/ShowBreweriesByType";

export const Favourites = observer(() => {
  const store = useStore();

  return (
    <Container>
      <>
        <div className="mt-5 flex w-full">
          <ShowBreweriesByType store={store.favourites} />
          {!store.favourites.length && (
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              no items yet!
            </h1>
          )}
        </div>
      </>
    </Container>
  );
});
