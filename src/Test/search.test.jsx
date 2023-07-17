import { describe, test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Favourites } from "../Pages/Favourites";
import { Search } from "../Pages/Search";
import { delay } from "framer-motion";

describe("Search an element", () => {
  test('it will search for "A Homestead Brew" and it should have"A Homestead Brew" on screen', async () => {
    //render
    const wrapper = render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
        <Routes>
          <Route path="" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </MemoryRouter>
    );

    //set up the user and input
    const user = userEvent.setup();
    const input = wrapper.container.querySelector("input");

    //search
    await user.type(input, "A Homestead Brew", { delay: 200 });

    //search for the element
    await waitFor(() => {
      const searchResult = screen.getByText(/A Homestead Brew/i);
      expect(searchResult.textContent).toBe("A Homestead Brew");
    });
  });
});
