import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { Favourites } from "../Pages/Favourites";
import { Search } from "../Pages/Search";

describe("<App />", () => {
  test("App mounts properly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

      const searchNavbarButtonText = screen.getByText(/Search/i);
      expect(searchNavbarButtonText.textContent).toBeTruthy();

      const FavNavbarButtonText = screen.getByText(/Favourites/i);
      expect(FavNavbarButtonText.textContent).toBeTruthy();
  });
});

describe("<Favourites", () => {
  test("Favourites mounts properly", () => {
    const wrapper = render(<Favourites />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();

    const h1 = wrapper.container.querySelector("h1");
    expect(h1?.textContent).toBe("no items yet!");
  });
});

describe("<Search />", () => {
  test("Favourites mounts properly", () => {
    const wrapper = render(<Search />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();

    const h1 = wrapper.container.querySelector("h1");
    expect(h1?.textContent).toBe("start a new search!");
  });
});
