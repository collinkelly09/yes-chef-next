import { ThemeProvider } from "next-themes";
import { Italianno, Jacques_Francois } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Nav from "@/components/menu/Nav";

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
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex flex-col">
              <Nav />
              <div className="  md:pt-12 flex flex-col">{children}</div>
            </div>
            {/* <div>
              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                
              </footer>
            </div> */}
          </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
