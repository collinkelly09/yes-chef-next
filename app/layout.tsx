import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Italianno, Jacques_Francois } from "next/font/google";

export const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-italianno",
});

const jacquesFrancois = Jacques_Francois({
  weight: "400",
  display: "swap",
  variable: "--font-jacques",
  subsets: ["latin"],
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "yesChef",
  description: "A sleek way to store and organize your favorite recipes!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={jacquesFrancois.className}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center pt-10">
            <div>
              {children}
              {/* <div className="flex-1 w-screen  max-w-screen-2xl px-16 py-4">
                <div className="flex justify-between">
                  <div className={`${italianno.className} text-8xl px-6 `}>
                    yesChef
                  </div>
                  <div className="pt-4">
                    {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div>
              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <p>
                  Powered by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Supabase
                  </a>
                </p>
                <ThemeSwitcher />
              </footer>
            </div> */}
          </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
