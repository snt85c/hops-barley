import { describe, test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import Navbar from "../Components/NavbarComponents/Navbar";
import { Favourites } from "../Pages/Favourites";
import { Search } from "../Pages/Search";
import { useStore, Store } from "../MobX/store";

describe("Search an element, then add to Fav", () => {
  test('it will search for "A" and it should have"A Homestead Brew" on screen, it will add it on favourite', async () => {
    const wrapper = render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
        <Routes>
          <Route path="" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </MemoryRouter>
    );

    //set up the user, input button and the fav navbar button
    const user = userEvent.setup();
    const input = wrapper.container.querySelector("input");
    let FavNavbarButton = screen.getByRole("button", {
      name: "Favourites",
    });

    //type on searchbox, then wait for the results
    await user.type(input, "A Homestead Brew", { delay: 200 });
    await waitFor(() => {
      const searchResult = screen.getByText(/A Homestead Brew/i);
      expect(searchResult.textContent).toBe("A Homestead Brew");
    });
    const starButton = wrapper.container.querySelectorAll("#star-test");

    //click the star on A Homestead Brew
    await user.click(starButton[0]);

    //now navigate to Favourite and search for it
    await user.click(FavNavbarButton);
    await waitFor(() => {
      const searchResult = screen.getByText(/A Homestead Brew/i);
      expect(searchResult.textContent).toBe("A Homestead Brew");
    });
  });
});
