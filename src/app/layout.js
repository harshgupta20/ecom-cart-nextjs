"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Toaster } from 'sonner';
import { ProductsContext } from "@/context/products";
import { useEffect, useState } from "react";
import { getProducts } from "@/utils/localstorage";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const products = getProducts();
    setCartProducts(products);
  },[]);

  return (
    <>
    <ProductsContext.Provider value={{cartProducts, setCartProducts}}>
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        <Toaster />
      </body>
    </html>
    </ProductsContext.Provider>
    </>
  );
}
