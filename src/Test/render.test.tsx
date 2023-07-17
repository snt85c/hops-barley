import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Route, Routes, MemoryRouter, BrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Favourites } from "../Pages/Favourites";
import { Search } from "../Pages/Search";

// Test case for <App />
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

    // Verify if the component is rendered
    expect(wrapper).toBeTruthy();

    // Verify if the navbar button "Search" is present
    const searchNavbarButtonText = screen.getByRole("button", {
      name: "Search",
    });
    expect(searchNavbarButtonText.textContent).toBeTruthy();

    // Verify if the navbar button "Favourites" is present
    const FavNavbarButtonText = screen.getByRole("button", {
      name: "Favourites",
    });
    expect(FavNavbarButtonText.textContent).toBeTruthy();

    // Verify the text on the screen for page "/"
    const textElement = screen.getByText(/start a new search!/i);
    expect(textElement.innerText).toBe("start a new search!");

    // Verify the input search box
    const input = wrapper.container.querySelector("input");
    expect(input?.placeholder).toBe("search");
  });
});

// Test case for <Favourites />
describe("<Favourites", () => {
  test("Favourites mounts properly", () => {
    const wrapper = render(<Favourites />, { wrapper: BrowserRouter });

    // Verify if the component is rendered
    expect(wrapper).toBeTruthy();

    // Verify the text "no items yet!" on the screen
    const h1 = wrapper.container.querySelector("h1");
    expect(h1?.textContent).toBe("no items yet!");
  });
});

// Test case for <Search />
describe("<Search />", () => {
  test("Search mounts properly", () => {
    const wrapper = render(<Search />, { wrapper: BrowserRouter });

    // Verify if the component is rendered
    expect(wrapper).toBeTruthy();

    // Verify the text "start a new search!" on the screen
    const h1 = wrapper.container.querySelector("h1");
    expect(h1?.textContent).toBe("start a new search!");

    // Verify the input on the screen
    const input = wrapper.container.querySelector("input");
    expect(input?.placeholder).toBe("search");
  });
});
