"use client";
import { ProductsContext } from '@/context/products';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

const Navbar = () => {

  const pathRoute = usePathname();
  const {cartProducts} = useContext(ProductsContext);

  return (
    <>
        <nav className='w-full p-4 flex justify-between place-items-center bg-indigo-600 text-white'>
            <Link href='/'><h1>MyCart</h1></Link>
            <ul className='flex justify-center place-items-center gap-3'>

                <Link href="/products" className={`${pathRoute==="/products" ? "bg-white text-indigo-600 py-2 px-4 rounded-md" : ""}`}><li>Products</li></Link>
                <Link href="/cart" className={`${pathRoute==="/cart" ? "bg-white text-indigo-600 py-2 px-4 rounded-md" : ""}`}><li>Cart <sup className='py-1 px-2 bg-orange-600 text-white rounded-xl'>{cartProducts.length}</sup></li></Link>
            </ul>
        </nav>
    </>
  )
}

export default Navbar