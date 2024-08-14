import ProductCard from '@/components/ProductCard'
import React from 'react'

const ProductsPage = () => {
  return (
    <div className='w-full p-4 m-auto'>
        <div className='flex flex-wrap sm:justify-around justify-center m-auto'>
            <ProductCard/>
        </div>
    </div>
  )
}

export default ProductsPage