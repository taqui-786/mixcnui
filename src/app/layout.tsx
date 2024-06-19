import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/Navbar";

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
            "flex flex-col relative w-screen break-words min-h-screen "
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main></body>
    </html>
  );
}
