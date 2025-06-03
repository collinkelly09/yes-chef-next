"use client";

import { starConversion } from "@/utils/conversions";
import useWindowSize from "@/utils/hooks";
import { RecipeResponse } from "@/utils/types";

interface Props {
  key: number;
  recipe: RecipeResponse;
}

const RecipeCard = ({ key, recipe }: Props) => {
  const size = useWindowSize();

  return (
    <div className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
      <div
        key={key}
        className="flex flex-col bg-slate-100 rounded-xl w-28 md:w-52"
        role="RecipeCard"
      >
        <img
          src={recipe.photo}
          alt={recipe.title}
          className="h-36 w-28 md:h-28 md:w-52 object-cover rounded-t-xl pb-2"
        />
        <div className="flex flex-col px-2 gap-1 pb-1">
          <div className="flex flex-col md:flex-row justify-between ">
            <div className="text-[16px]">{recipe.title}</div>
            <div className="text-amber-500 text-[16px] self-end">
              {starConversion(recipe.rating)}
            </div>
          </div>

          <div className="text-[12px] self-end">
            {size.width! > 768 ? "1 Hour 30 Minutes" : "1 hr 30 min"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
