// todo REMOVE THIS FILE WHEN AUTH IS FULLY IMPLEMENTED
"use client";

import { signOutAction } from "@/app/actions";

import React from "react";

const Logout = () => {
  const handleSignOut = async () => {
    signOutAction();
  };

  return (
    <>
      <button onClick={handleSignOut}>logout</button>
    </>
  );
};

export default Logout;
