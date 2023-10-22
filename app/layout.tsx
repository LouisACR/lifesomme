import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import { cn } from "@/libs/utils";
import ModalProvider from "@/providers/ModalProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { TailwindIndicator } from "@/components/TailwindIndicator";

export const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lifesomme",
  description: "A Lifesum clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          lora.className,
          "bg-blanc dark:bg-stone-900 -z-10 scroll-smooth"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider />
              {children}
            </UserProvider>
          </SupabaseProvider>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
