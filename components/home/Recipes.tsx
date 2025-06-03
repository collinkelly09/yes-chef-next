import React from "react";
import { createSupabaseClient } from "@/utils/supabase/server";
import RecipeCard from "../recipes/RecipeCard";
import { RecipeResponse } from "@/utils/types";

const Recipes = async () => {
  const supabase = await createSupabaseClient();

  const { data, error } = await supabase.from("recipes").select("*");
  const recipes: RecipeResponse[] | null = data;

  return (
    <div className="w-screen">
      <div className="px-5 text-slate-500 text-lg">Recipes</div>
      <div className="w-full overflow-x-scroll overflow-hidden no-scrollbar whitespace-nowrap scroll-smooth">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </div>
  );
};

export default Recipes;
