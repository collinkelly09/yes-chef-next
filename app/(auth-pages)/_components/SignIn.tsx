"use client";

import { loginWithOauthAction, signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Provider } from "@supabase/auth-js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import { AuthAction } from "./AuthPage";

interface Props {
  setAuthAction: React.Dispatch<React.SetStateAction<AuthAction>>;
}

export default function Signin({ setAuthAction }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleClickSigninButton = (provider: Provider) => {
    startTransition(async () => {
      const { errorMessage, url } = await loginWithOauthAction(provider);
      if (!errorMessage && url) {
        router.push(url);
      } else {
        toast.error(errorMessage);
      }
    });
  };

  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">Sign in</h1>
      <p className="text-sm text-foreground">
        Don&apos;t have an account?{" "}
        <button
          className="text-foreground font-medium underline"
          onClick={() => {
            setAuthAction("sigh-up");
          }}
        >
          Sign up
        </button>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="you@example.com" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
        <SubmitButton pendingText="Signing In..." formAction={signInAction}>
          Sign in
        </SubmitButton>

        <button
          className="bg-black text-white border w-85 py-2 rounded-md justify-center hover:bg-gray-950"
          onClick={() => handleClickSigninButton("google")}
          disabled={isPending}
        >
          {isPending ? "Logging in" : "Sign in with Google"}
        </button>
      </div>
    </form>
  );
}
