import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createSupabaseClient = async () => {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
};

export async function getAuth() {
  const { auth } = await createSupabaseClient();
  return auth;
}

export async function getUser() {
  const { auth } = await createSupabaseClient();
  const user = (await auth.getUser()).data.user;

  return user;
}

export async function protectRoute() {
  const user = await getUser();
  if (!user) throw Error("Unauthorized");
}
