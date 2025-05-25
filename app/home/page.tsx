import { protectRoute } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  const user = await protectRoute();

  if (!user) redirect("/");

  return <div>Home</div>;
};

export default Home;
