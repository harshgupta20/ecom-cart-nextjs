"use client";
import { successAlert } from '@/utils/alerts';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

const ProductCard = ({product}) => {

    const [loading, setLoading] = useState(false);

    const handleAddToCart = async () => {
        console.log('Product added to cart')
        setLoading(true);

        // simulate loading behaviour
        await new Promise((resolve) => setTimeout(resolve, 1000));
        successAlert(`${product?.title} added to cart`);
        setLoading(false);
    }

  return (
    <>   
        <div key={product?.id} className='flex flex-col gap-3 my-4 border-2 border-gray-300 p-2 rounded-md min-w-[300px] min-h-[350px]'>
            <div className='relative min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px]'>
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
            <button onClick={handleAddToCart} disabled={loading} className={`w-full py-2 px-5 bg-indigo-600 rounded-md text-white ${loading && "opacity-80"}`}>{loading ? "Adding..." : "Add to Cart"}</button>
        </div>

    </>
  )
}

export default ProductCard