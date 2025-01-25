import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/Navbar";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MixUi",
  description: "Npx tool component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><main
          className={cn(
            "flex flex-col relative w-full break-words h-full min-h-dvh max-w-full"
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
        <Analytics /></body>
    </html>
  );
}
