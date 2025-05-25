"use client";

import React, { useState } from "react";
import Signin from "./SignIn";
import { User } from "@supabase/supabase-js";
import Signup from "./SignUp";

export type AuthAction = "sign-in" | "sign-up";

export default function AuthPage({ user }: { user: User | null }) {
  const [authAction, setAuthAction] = useState<AuthAction>("sign-in");

  return (
    <>
      {!user && (
        <>
          {authAction === "sign-in" ? (
            <Signin setAuthAction={setAuthAction} />
          ) : (
            <Signup setAuthAction={setAuthAction} />
          )}
        </>
      )}
    </>
  );
}
