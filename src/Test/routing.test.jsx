import { describe, test, expect } from "vitest";
import { render, act, waitFor } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
  test('App mounts properly and shows "no items yet!" text after clicking "Favourites" button', async () => {
    let wrapper = render(<App />);
    expect(wrapper).toBeTruthy();
    // Click the "Favourites" button
    act(() => {
      let searchNavbarButton = wrapper.getByText(/Favourites/i);
      searchNavbarButton.dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      );
    });

    // Wait for the text to appear
    await waitFor(() => screen.getByText(/no items yet!/i));

    // Assert that the text appears
    const textElement = screen.getByText(/no items yet!/i);
    expect(textElement.textContent).toBe("no items yet!");
  });
});
