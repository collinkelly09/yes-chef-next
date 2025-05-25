"use client";

import { loginWithOauthAction, signUpAction } from "@/app/actions";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { AuthAction } from "./AuthPage";

interface Props {
  setAuthAction: React.Dispatch<React.SetStateAction<AuthAction>>;
}

export default function Signup({ setAuthAction }: Props) {
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
    <form className="flex flex-col min-w-64 max-w-64 mx-auto">
      <h1 className="text-2xl font-medium">Sign up</h1>
      <p className="text-sm text text-foreground">
        Already have an account?{" "}
        <button
          className="text-foreground font-medium underline"
          onClick={() => {
            setAuthAction("sign-in");
          }}
        >
          Sign up
        </button>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="you@example.com" required />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          minLength={6}
          required
        />
        <SubmitButton formAction={signUpAction} pendingText="Signing up...">
          Sign up
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
