import Hero from "@/components/Hero";
import { getUser } from "@/utils/supabase/server";
import AuthPage from "./(auth-pages)/_components/AuthPage";
import ProtectedHomePage from "@/components/home/ProtectedHomePage";
import MenuButton from "@/components/menu/MenuButton";

export default async function Home() {
  const user = await getUser();
  return (
    <>
      {!user ? (
        <>
          <AuthPage />
        </>
      ) : (
        <>
          <ProtectedHomePage />
        </>
      )}
    </>
  );
}
