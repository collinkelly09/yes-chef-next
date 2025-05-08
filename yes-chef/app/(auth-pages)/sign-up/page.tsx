"use client";

import { loginWithOauthAction, signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import { useTransition } from "react";
import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Signup(props: { searchParams: Promise<Message> }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // const searchParams = await props.searchParams;
  // if ("message" in searchParams) {
  //   return (
  //     <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
  //       <FormMessage message={searchParams} />
  //     </div>
  //   );
  // }

  const handleClickLoginButton = (provider: Provider) => {
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
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
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
            className="bg-black border-white border w-85 py-2 rounded-md justify-center hover:bg-gray-950"
            onClick={() => handleClickLoginButton("google")}
            disabled={isPending}
          >
            {isPending ? "Logging in" : "Sign in with Google"}
          </button>
          {/* <FormMessage message={searchParams} /> */}
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}
