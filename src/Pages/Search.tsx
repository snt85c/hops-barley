import { observer } from "mobx-react-lite";
import { useStore } from "../MobX/store";

export const Search = observer(() => {
    const store = useStore()
  return (
    <div>
      <h1>Counter: {store.count}</h1>
      <button onClick={store.increment}>Increment</button>
      <button onClick={store.decrement}>Decrement</button>
    </div>
  );
});
