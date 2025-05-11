import { createBrowserClient } from "@supabase/ssr";

export const createSupabaseClient = () =>
  createBrowserClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

export async function getUser() {
  const { auth } = createSupabaseClient();
  const user = (await auth.getUser()).data.user;

  return user;
}
