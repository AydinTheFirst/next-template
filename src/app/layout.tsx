import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import React from "react";

import NextThemesProvider from "@/providers/NextThemesProvider";
import SwrProvider from "@/providers/SwrProvider";
import ToastProvider from "@/providers/ToastProvider";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  description: "Generated by create next app",
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextThemesProvider>
          <SwrProvider>
            {children}
            <ToastProvider />
          </SwrProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
