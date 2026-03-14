import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khadija Ansari - AI Engineer – LLM Systems - Intelligent Automation",
  description: "Portfolio of Khadija Ansari, an aspiring AI & ML engineer and Python developer from Tamil Nadu, India",
  keywords: "AI, ML, Python, Developer, Portfolio, Artificial Intelligence, Machine Learning",
  openGraph: {
    title: "Khadija Ansari- AI Engineer – LLM Systems - Intelligent Automation",
    description: "Passionate AI/ML enthusiast and full-stack developer exploring the future of technology",
    type: "website",
  },
  twitter: {
    title: "Khadija Ansari- AI Engineer – LLM Systems - Intelligent Automation",
    description: "Passionate AI/ML enthusiast and full-stack developer exploring the future of technology",
  },
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