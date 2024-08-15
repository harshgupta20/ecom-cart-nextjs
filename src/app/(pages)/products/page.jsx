"use client";

import ProductCard from '@/components/ProductCard'
import React, { useEffect, useState } from 'react'

const ProductsPage = () => {

  const [productsList, setCartProducts] = useState({success: "pending", data: []});

  const fetchProducts = async () => {
    await fetch('https://dummyjson.com/products?limit=10&skip=10&select=id,title,price,description,discountPercentage,images')
    .then(async res => {
      setCartProducts({success: true, data: await res.json()});
      })
      .catch((error)=> {
        return {success: false, data: []}; 
      });
    }

  useEffect(() => {
    fetchProducts();
  },[]);

  return (
    <div className='w-full p-4 m-auto'>
        <div className='flex flex-wrap sm:justify-around justify-center m-auto'>
          {
            productsList.success === true ? productsList.data.products.map((product, index) => {
              return (
                <ProductCard key={index} product={product}/>
              )
            }) : productsList.success == "pending" ? "Loading Products..." : <p>Something went wrong</p>
          }
        </div>
    </div>
  )
}

export default ProductsPage