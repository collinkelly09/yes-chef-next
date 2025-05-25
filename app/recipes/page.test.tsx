import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Recipes from "./page";

describe(Recipes, () => {
  it("renders a heading that says Recipes", () => {
    const { getByRole } = render(<Recipes />);

    const heading = getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Recipes");
  });
  it("renders a div with data-testid 'div-1'", () => {
    const { getByTestId } = render(<Recipes />);

    const divElement = getByTestId("div-1");

    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveTextContent("page");
  });
});
