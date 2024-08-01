import Footer from "@/src/components/Layout/Footer";
import Header from "@/src/components/Layout/Header";
import LayoutBox from "@/src/components/Layout/LayoutBox";
import Theme from "@/src/lib/theme/theme";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathématiques Tools",
  description: "Regroupe un ensemble d'outils mathématiques",
  icons: "/images/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Theme>
          <LayoutBox>
            <Header />
            {children}
            <Footer />
          </LayoutBox>
        </Theme>
      </body>
    </html>
  );
}
