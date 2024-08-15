import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Toaster } from 'sonner';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profile.fyi Assignment",
  description: "Frontend assignment for Profile.fyi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
