import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "@/app/_components/footer.css";
import Footer from "@/app/_components/footer";
import Navbar from "@/app/_components/navbar";

// font used on fastnear.com
const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FASTNEAR Subscriptions",
  description: "Freemium and premium RPC and indexing services for NEAR Protocol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`} style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
