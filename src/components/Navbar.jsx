"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

  const pathRoute = usePathname();

  const allRoutes = [ 
        {
            route: "/products",
            name: "Products"
        },
        {
            route: "/cart",
            name: "Cart"
        }
    ];

  return (
    <>
        <nav className='w-full p-4 flex justify-between place-items-center bg-indigo-600 text-white'>
            <p>Site</p>
            <ul className='flex flex-col justify-center place-items-center sm:flex-row gap-3'>
                {
                    allRoutes.map((route, index) => {
                            return (
                                <Link key={index} href={route.route} className={`${pathRoute===route.route ? "bg-white text-indigo-600 py-2 px-4 rounded-md" : ""}`}><li>{route.name}</li></Link>
                            )
                    })
                }
            </ul>
        </nav>
    </>
  )
}

export default Navbar