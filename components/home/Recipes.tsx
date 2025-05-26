import React from "react";
import { createSupabaseClient } from "@/utils/supabase/server";
import RecipeCard from "../recipes/RecipeCard";
import { RecipeResponse } from "@/utils/types";

const Recipes = async () => {
  const supabase = await createSupabaseClient();

  const { data, error } = await supabase.from("recipes").select("*");
  const recipes: RecipeResponse[] | null = data;

  return (
    <div>
      <div>Recipes</div>
      <div className="flex flex-1 gap-8">
        {recipes &&
          recipes.map((recipe) => (
            <div key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recipes;
