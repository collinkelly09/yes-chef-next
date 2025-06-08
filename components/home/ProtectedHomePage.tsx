import React from "react";
import Recipes from "./Recipes";
import RecentlyAdded from "./RecentlyAdded";

const ProtectedHomePage = () => {
  return (
    <>
      <div className="w-screen flex flex-col items-center">
        <div className="w-[86%]">
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
