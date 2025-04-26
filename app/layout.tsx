import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AosWrapper from "./components/AosWrapper";


// const inter = Inter({ subsets: ["latin"] });

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-outfit'
})
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700'],
//   variable: '--font-outfit'
// })

export const metadata: Metadata = {
  title: "ServEase",
  description: "Get services that simplify living—in just one click.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${outfit.variable}`}>
        <AosWrapper />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
