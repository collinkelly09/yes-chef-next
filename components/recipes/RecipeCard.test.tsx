import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RecipeCard from "./RecipeCard";
import { uuid } from "@supabase/auth-js/dist/module/lib/helpers";

const resizeWindow = (width: number) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

const recipe = {
  id: 1,
  title: "Minestrone",
  photo:
    "https://www.google.com/imgres?q=minestrone&imgurl=https%3A%2F%2Fwww.bytheforkful.com%2Fwp-content%2Fuploads%2F2024%2F10%2F8-IMG_2282-720x720.jpg&imgrefurl=https%3A%2F%2Fwww.bytheforkful.com%2Fclassic-minestrone-soup%2F&docid=GIBItk6FR_ZYRM&tbnid=ucOMb7U26oZrHM&vet=12ahUKEwji6a2X39ONAxXcIDQIHelpMkQQM3oECHYQAA..i&w=720&h=720&hcb=2&ved=2ahUKEwji6a2X39ONAxXcIDQIHelpMkQQM3oECHYQAA",
  rating: 4,
  created_at: new Date("26T03:22:02.526335+00:00"),
  user_id: 6,
};

describe(RecipeCard, () => {
  beforeEach(() => {
    // Ensure a clean DOM
    document.body.innerHTML = "";
  });

  it("resizes to fit in mobile screen", () => {
    resizeWindow(767); // Below medium screen in Tailwind CSS

    render(<RecipeCard key={recipe.id} recipe={recipe} />);
    expect(screen.getByRole("RecipeCard")).toHaveClass("w-28");
  });
});
