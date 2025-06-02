import Hero from "@/components/Hero";
import { getUser } from "@/utils/supabase/server";
import AuthPage from "./(auth-pages)/_components/AuthPage";
import ProtectedHomePage from "@/components/home/ProtectedHomePage";
import MenuButton from "@/components/menu/MenuButton";

export default async function Home() {
  const user = await getUser();
  return (
    <>
      <div className="flex ">
        <div>
          <MenuButton />
          <div className="h-full"></div>
        </div>
        <Hero />
      </div>
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
