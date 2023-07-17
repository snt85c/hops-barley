import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Favourites } from "../Pages/Favourites";
import { Search } from "../Pages/Search";

describe("<App />", () => {
  test('App mounts properly and shows "no items yet!" text after clicking "Favourites" button', async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
        <Routes>
          <Route path="" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </MemoryRouter>
    );

    const user = userEvent.setup();
    const about = vi.spyOn(user, "click");

    let FavNavbarButton = screen.getByRole("button", {
      name: "Favourites",
    });

    //click the favourites button
    await user.click(FavNavbarButton);
    expect(about).toHaveBeenCalledTimes(1);

    const textElement = screen.getByText(/no items yet!/i);
    expect(textElement.textContent).toBe("no items yet!");
  });

  test("from Search to Favourites, then back to Search", async () => {
    const wrapper = render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
        <Routes>
          <Route path="" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </MemoryRouter>
    );

    const user = userEvent.setup();

    let FavNavbarButton = screen.getByRole("button", {
      name: "Favourites",
    });

    let SearchNavbarButton = screen.getByRole("button", {
      name: "Search",
    });

    //assert input on screen for search page (whcih is the main page rendered at the beginning)
    const input = wrapper.container.querySelector("input");
    expect(input?.placeholder).toBe("search");

    //click the favourites button
    await user.click(FavNavbarButton);

    // assert text on scren for favourites page (i expect no items)
    const textElement = screen.getByText(/no items yet!/i);
    expect(textElement.textContent).toBe("no items yet!");

    //click on Search button
    await user.click(SearchNavbarButton);

    //assert input on screen for search page
    expect(input?.placeholder).toBe("search");
  });
});
