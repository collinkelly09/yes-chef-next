import { RecipeResponse } from "./types";

export const starConversion = (rating: number) => {
  let starRating = "★";
  for (let i = 1; i < 5; i++) {
    if (i < rating) starRating += "★";
    else starRating += "☆";
  }

  return starRating;
};

export const shuffle = (recipes: RecipeResponse[]) => {
  let clone = structuredClone(recipes);

  let currentIndex = clone.length;

  while (currentIndex != 0) {
    let randomIdex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [clone[currentIndex], clone[randomIdex]] = [
      clone[randomIdex],
      clone[currentIndex],
    ];
  }
  return clone;
};
