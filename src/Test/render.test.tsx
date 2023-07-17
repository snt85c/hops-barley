import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Route, Routes, MemoryRouter, BrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Favourites } from "../Pages/Favourites";
import { Search } from "../Pages/Search";

describe("<App />", () => {
  test("App mounts properly", () => {
    const wrapper = render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
        <Routes>
          <Route path="" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();
    //navbar button search
    const searchNavbarButtonText = screen.getByRole("button", {
      name: "Search",
    });
    expect(searchNavbarButtonText.textContent).toBeTruthy();

    //navbar button favourites
    const FavNavbarButtonText = screen.getByRole("button", {
      name: "Favourites",
    });
    expect(FavNavbarButtonText.textContent).toBeTruthy();

    //text on screen on page /
    const textElement = screen.getByText(/start a new search!/i);
    expect(textElement.innerText).toBe("start a new search!");

    //check for input searchbox
    const input = wrapper.container.querySelector("input");
    expect(input?.placeholder).toBe("search");
  });
});

describe("<Favourites", () => {
  test("Favourites mounts properly", () => {
    const wrapper = render(<Favourites />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();

    //find empty search text on screen
    const h1 = wrapper.container.querySelector("h1");
    expect(h1?.textContent).toBe("no items yet!");
  });
});

describe("<Search />", () => {
  test("Favourites mounts properly", () => {
    const wrapper = render(<Search />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();

    //find empty search text on screen
    const h1 = wrapper.container.querySelector("h1");
    expect(h1?.textContent).toBe("start a new search!");

    //find input on screen
    const input = wrapper.container.querySelector("input");
    expect(input?.placeholder).toBe("search");
  });
});
