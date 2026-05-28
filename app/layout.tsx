import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Architecture Checkpoint — Enterprise & Cloud Architecture Consulting",
  description:
    "Specialized in enterprise architecture, solution architecture, and cloud architecture for digital transformation. Expert guidance for AI adoption and modernization.",
  keywords: [
    "enterprise architecture",
    "solution architecture",
    "cloud architecture",
    "digital transformation",
    "AI adoption",
    "modernization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
