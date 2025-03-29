import type { Metadata } from "next";
import { Creepster } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

const creepster = Creepster({
  variable: "--font-creepster",
  subsets: ["latin"],
  weight: "400",
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
        className={`${creepster.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
