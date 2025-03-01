import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Employee Manager",
  description: ""
};

import NavBar from "@/components/NavBar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
           <div className="py-4 px-6  bg-gray-50 min-h-screen">
            {children}
           </div>
        </Providers>
      </body>
    </html>
  );
}
