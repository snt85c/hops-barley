import { describe, test, expect } from "vitest";
import {
  render,
  act,
  waitFor,
  screen,
  fireEvent,
} from "@testing-library/react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  MemoryRouter,
} from "react-router-dom";
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
    act(async () => {
        let FavNavbarButton = screen.getByRole("button", {
          name: "Favourites",
        });
        // Click the "Favourites" button
        fireEvent.click(FavNavbarButton);
    });
    await waitFor(() => {
      // Wait for the text to appear
      const textElement = screen.getByText(/no items yet!/i);
      expect(textElement.textContent).toBe("no items yet!");
    });
  });
});
