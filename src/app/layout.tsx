import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NutriHeaven - Pure Nutrition Better Living",
  description: "Direct from local farms. Premium organic vegetables, homemade products, and fresh groceries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-b from-white to-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
