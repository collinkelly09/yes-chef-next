import { createSupabaseClient } from "@/utils/supabase/server";
import { RecipeResponse } from "@/utils/types";
import React from "react";
import RecentlyAddedCard from "./RecentlyAddedCard";

const RecentlyAdded = async () => {
  const supabase = await createSupabaseClient();

  const { data, error } = await supabase.from("recipes").select("*");
  const recipes: RecipeResponse[] | null = data;
  const mostRecent = recipes
    ?.sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    )
    .slice(0, 10);

  return (
    <>
      <div className="md:w-[70%]">
        <div className="px-5 text-slate-500 text-lg">Recently Added</div>
        <div className="flex items-center md:px-10">
          <div className="w-full flex md:flex-wrap">
            {mostRecent &&
              mostRecent.map((recipe) => (
                <RecentlyAddedCard key={recipe.id} recipe={recipe} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyAdded;
