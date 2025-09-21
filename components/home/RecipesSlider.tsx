"use client";

import useWindowSize from "@/utils/hooks";
import { RecipeResponse } from "@/utils/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RecipeCard from "../recipes/RecipeCard";

const RecipesSlider = ({ recipes }: { recipes: RecipeResponse[] }) => {
  const size = useWindowSize();

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };

  return (
    <div className=" relative flex items-center">
      {size.width! > 768 && (
        <ChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
          strokeWidth={1}
        />
      )}
      <div
        id="slider"
        className="w-full overflow-x-auto flex no-scrollbar whitespace-nowrap scroll-smooth"
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      {size.width! > 768 && (
        <ChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
          strokeWidth={1}
        />
      )}
    </div>
  );
};

export default RecipesSlider;
