import Image from 'next/image'
import React from 'react'

const CartProductCard = () => {
  return (
    <div className='p-4'>
        <div className='flex justify-between'>
            <div className='flex gap-6'>
                <Image src={"/assets/productImage.webp"} width={150} height={150} loading="lazy" alt='Product'/>
                <div className='flex flex-col justify-between py-2'>
                    <div>
                        <h3 className='text-2xl'>Product Name</h3>
                        <p className='text-sm text-gray-500'>Product Description</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>{2000} INR</p>
                        <del className='text-gray-400'>{3000} INR</del>
                        <p className='text-green-600 font-semibold'>{33} % off</p>
                    </div>
                </div>
            </div>
            <div>
                <p>Delivered By 21 Auguest</p>
            </div>
        </div>
        <div className='flex place-items-center gap-3 justify-end'>
            <div className='flex place-items-center gap-3 border-2 border-gray-200 rounded-md'>
                <button className='p-2 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-tl-md rounded-bl-md'>-</button>
                <p className='text-sm'>20</p>
                <button className='p-2 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-tr-md rounded-br-md'>+</button>
            </div>

            <button className='bg-red-600 text-white text-sm py-2 px-8 rounded-md'>Remove</button>
        </div>
    </div>
  )
}

export default CartProductCard