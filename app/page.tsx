import Hero from "@/components/hero";
import Signin from "./(auth-pages)/_components/SignIn";
import { getUser } from "@/utils/supabase/client";
import AuthPage from "./(auth-pages)/_components/AuthPage";

export default async function Home() {
  const user = await getUser();
  return (
    <>
      <Hero />
      <AuthPage user={user} />
    </>
  );
}
