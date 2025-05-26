import { starConversion } from "@/utils/conversions";
import { RecipeResponse } from "@/utils/types";
import React from "react";

const RecipeCard = ({ recipe }: { recipe: RecipeResponse }) => {
  return (
    <>
      <div className="flex flex-col bg-slate-100 rounded-xl">
        <img
          src={recipe.photo}
          alt={recipe.title}
          className="h-28 w-40 object-cover rounded-t-xl pb-2"
        />

        <div className="pl-2">{recipe.title}</div>
        <div className="text-amber-500 text-[20px] self-end pr-3 pb-2">
          {starConversion(recipe.rating)}
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
