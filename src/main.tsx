import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { create, persist } from "mobx-persist";
import { StoreContext, store, schema } from "./MobX/store";

const hydrate = create();

const persistedStore = persist(schema)(store);

hydrate("store", persistedStore).then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>
  );
});
