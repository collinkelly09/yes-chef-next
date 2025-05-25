import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Logout from "./page";
import { signOutAction } from "@/app/actions";

// Mock the signOutAction function
jest.mock("@/app/actions", () => ({
  signOutAction: jest.fn(() => Promise.resolve()),
}));

describe("Logout Button", () => {
  it("renders a button that calls signOutAction on click", () => {
    const { getByRole } = render(<Logout />);

    const button = getByRole("button", { name: "logout" });

    expect(button).toBeInTheDocument();

    // Simulate a click event
    button.click();

    // Verify that signOutAction was called
    expect(signOutAction).toHaveBeenCalled();
  });
});
