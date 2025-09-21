import { createSupabaseClient } from "@/utils/supabase/server";
import { RecipeResponse } from "@/utils/types";
import RecipesSlider from "./RecipesSlider";
import { shuffle } from "@/utils/customFunctions";

const Recipes = async () => {
  const supabase = await createSupabaseClient();

  const { data, error } = await supabase.from("recipes").select("*");
  const recipes: RecipeResponse[] | null = data;

  return (
    <>
      <div className="px-5 text-slate-500 text-lg">Recipes</div>
      {recipes && <RecipesSlider recipes={shuffle(recipes)} />}
    </>
  );
};

export default Recipes;
