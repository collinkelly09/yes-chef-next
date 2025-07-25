"use client";

import { starConversion } from "@/utils/customFunctions";
import useWindowSize from "@/utils/hooks";
import { RecipeResponse } from "@/utils/types";
import React from "react";

const RecentlyAddedCard = ({ recipe }: { recipe: RecipeResponse }) => {
  const size = useWindowSize();

  return (
    <div className="w-full px-3 md:w-96">
      <div className="p-2 cursor-pointer md:hover:scale-105 md:ease-in-out duration-300">
        <div
          className="flex flex-row bg-slate-100 rounded-xl "
          role="RecipeCard"
        >
          <img
            src={recipe.photo}
            alt={recipe.title}
            className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-xl"
          />
          <div className="flex flex-col p-2 ">
            <div className="text-[16px]">{recipe.title}</div>
            <div className="text-amber-500 text-[16px]">
              {starConversion(recipe.rating)}
            </div>

            <div className="text-[12px]">
              {size.width! > 768 ? "1 Hour 30 Minutes" : "1 hr 30 min"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyAddedCard;
