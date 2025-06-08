import React from "react";
import Recipes from "./Recipes";
import RecentlyAdded from "./RecentlyAdded";

const ProtectedHomePage = () => {
  return (
    <>
      <div className="w-screen md:w-full flex flex-col items-center">
        <div className="md:w-[86%] w-screen">
          <Recipes />
          <div>
            <RecentlyAdded />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtectedHomePage;
