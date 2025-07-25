import { createSupabaseClient } from "@/utils/supabase/server";
import { RecipeResponse } from "@/utils/types";
import React from "react";
import RecentlyAddedCard from "./RecentlyAddedCard";

const RecentlyAdded = async () => {
  const supabase = await createSupabaseClient();

  const { data: mostRecent, error } = await supabase
    .from<"recipes", RecipeResponse>("recipes")
    .select("*")
    .order("created_at", { ascending: false }) // Most Recent First
    .limit(10);

  return (
    <>
      <div className="px-5 text-slate-500 text-lg">Recently Added</div>
      <div className="md:px-10">
        <div className="flex flex-col items-center md:items-start">
          {mostRecent &&
            mostRecent.map((recipe) => (
              <RecentlyAddedCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
      </div>
    </>
  );
};

export default RecentlyAdded;
