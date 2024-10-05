"use client";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import clsx from "clsx";
import { Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400", "800"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body
          className={clsx(`${manrope.variable} antialiased scroll-smooth`, "")}
        >
          {children}
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
