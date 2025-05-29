"use client";

import { starConversion } from "@/utils/conversions";
import { RecipeResponse } from "@/utils/types";
import React, { useEffect, useState } from "react";

interface Props {
  key: number;
  recipe: RecipeResponse;
}

const RecipeCard = ({ key, recipe }: Props) => {
  const size = useWindowSize();

  return (
    <div
      key={key}
      className="flex flex-col bg-slate-100 rounded-xl w-28 md:w-52"
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
  );
};

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<
    Record<string, undefined | number>
  >({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default RecipeCard;
