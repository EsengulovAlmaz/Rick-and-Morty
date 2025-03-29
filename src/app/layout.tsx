import type { Metadata } from "next";
import { Creepster, Patrick_Hand } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

const creepster = Creepster({
  variable: "--font-creepster",
  subsets: ["latin"],
  weight: "400",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-patrick-hand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Поиск персонажей Rick and Morty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${creepster.variable} ${patrickHand.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
