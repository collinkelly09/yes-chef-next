import React from "react";
import { createSupabaseClient } from "@/utils/supabase/server";
import RecipeCard from "../recipes/RecipeCard";
import { RecipeResponse } from "@/utils/types";

const Recipes = async () => {
  const supabase = await createSupabaseClient();

  const { data, error } = await supabase.from("recipes").select("*");
  const recipes: RecipeResponse[] | null = data;

  return (
    <div className="">
      <div>Recipes</div>
      <div className="flex flex-1 md:gap-8 gap-5">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </div>
  );
};

export default Recipes;
