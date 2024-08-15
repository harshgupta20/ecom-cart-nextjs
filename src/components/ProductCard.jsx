import Image from 'next/image'
import React from 'react'

const ProductCard = ({product}) => {
  return (
    <>   
        <div key={product?.id} className='flex flex-col gap-3 my-4 border-2 border-gray-300 p-2 rounded-md min-w-[300px] min-h-[350px]'>
            <div className='relative min-h-[300px]'>
                <Image src={product?.images[0]} fill={true} loading="lazy" alt='Product'/>
            </div>
            <div>
                <p>{product?.title}</p>
                <div className='flex gap-2'>
                    <p className='font-bold'>{product?.price} INR</p>
                    <del className='text-gray-400'>{((product?.price) + (product?.price*product?.discountPercentage)/100).toFixed(2) } INR</del>
                    <p className='text-green-600 font-semibold'>{product.discountPercentage} % off</p>
                </div>
            </div>
            <button className='w-full py-2 px-5 bg-indigo-600 rounded-md text-white'>Add to Cart</button>
        </div>
    </>
  )
}

export default ProductCard