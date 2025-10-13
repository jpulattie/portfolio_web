import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./footer"
import Header from "./header"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Josh Pulattie",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex flex-col w-full justify-center max-h-[90vh]">
        {children}
        </main>
      
      <Footer />
      </body>
    </html>
  );
}
