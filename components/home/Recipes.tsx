import React from "react";
import { createSupabaseClient } from "@/utils/supabase/server";
import RecipeCard from "../recipes/RecipeCard";
import { RecipeResponse } from "@/utils/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Recipes = async () => {
  const supabase = await createSupabaseClient();

  const { data, error } = await supabase.from("recipes").select("*");
  const recipes: RecipeResponse[] | null = data;

  return (
    <div className="w-screen">
      <div className="px-5 text-slate-500 text-lg">Recipes</div>
      <div className="flex items-center">
        <ChevronLeft size={40} strokeWidth={1} />
        <div className="w-full overflow-x-scroll overflow-hidden no-scrollbar whitespace-nowrap scroll-smooth">
          {recipes &&
            recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
        <ChevronRight size={40} strokeWidth={1} />
      </div>
    </div>
  );
};

export default Recipes;
