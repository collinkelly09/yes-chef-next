"use client";

import { shuffle } from "@/utils/customFunctions";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import RecipeCard from "../recipes/RecipeCard";
import { RecipeResponse } from "@/utils/types";
import useWindowSize from "@/utils/hooks";

const RecipesSlider = ({ recipes }: { recipes: RecipeResponse[] }) => {
  const size = useWindowSize();
  return (
    <div className="flex items-center">
      {size.width! > 768 && <ChevronLeft size={40} strokeWidth={1} />}
      <div className="w-full overflow-x-scroll overflow-hidden no-scrollbar whitespace-nowrap scroll-smooth">
        {shuffle(recipes).map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      {size.width! > 768 && <ChevronRight size={40} strokeWidth={1} />}
    </div>
  );
};

export default RecipesSlider;
