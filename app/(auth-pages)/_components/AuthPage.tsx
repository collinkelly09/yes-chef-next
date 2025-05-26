"use client";

import React, { useState } from "react";
import Signin from "./SignIn";
import Signup from "./SignUp";

export type AuthAction = "sign-in" | "sign-up";

export default function AuthPage() {
  const [authAction, setAuthAction] = useState<AuthAction>("sign-in");

  return (
    <>
      <div className="flex-1 flex justify-center pt-16 pb-8 md:pt-0 md:items-center md:mb-52">
        {authAction === "sign-in" ? (
          <Signin setAuthAction={setAuthAction} />
        ) : (
          <Signup setAuthAction={setAuthAction} />
        )}
      </div>
    </>
  );
}
