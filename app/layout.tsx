import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../Styles/globals.css";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["greek"] });

export const metadata: Metadata = {
  title: "Sage Phileo",
  description: "An educator portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col gap-2`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
