import ProductCard from '@/components/ProductCard'
import React from 'react'

const ProductsPage = async () => {

  const productsList = await fetch('https://dummyjson.com/products?limit=50&skip=10&select=id,title,price,description,discountPercentage,images')
  .then(async res => {
    return {success: true, data: await res.json()

    }})
  .catch((error)=> {
    console.error('Error:', error);
    return {success: false, data: []}; 
  });

  return (
    <div className='w-full p-4 m-auto'>
        <div className='flex flex-wrap sm:justify-around justify-center m-auto'>
          {
            productsList.success ? productsList.data.products.map((product, index) => {
              return (
                <ProductCard key={index} product={product}/>
              )
            }) : <p>Something went wrong</p>
          }
        </div>
    </div>
  )
}

export default ProductsPage