import Navbar from "./components/navbar";
import Footer from "./components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page | Assignment 2-PIAIC",
  description: "Created By Muhammad Ahmad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
