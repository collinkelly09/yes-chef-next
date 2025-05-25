import Hero from "@/components/Hero";
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
