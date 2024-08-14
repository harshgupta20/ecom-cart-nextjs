import Image from 'next/image'
import React from 'react'

const ProductCard = () => {

    const productData = [
        {
            id: 1,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
            mrp: 2000
        },
        {
            id: 2,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
            mrp: 2000
        },
        {
            id: 3,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
            mrp: 2000
        },
        {
            id: 4,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
            mrp: 2000
        },
        {
            id: 5,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
            mrp: 2000
        },
        {
            id: 6,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
            mrp: 2000
        },
        {
            id: 7,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
            mrp: 2000
        },
        {
            id: 8,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
            mrp: 2000
        },
        {
            id: 9,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
            mrp: 2000
        },
        {
            id: 10,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
            mrp: 2000
        },
        {
            id: 11,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
            mrp: 2000
        },
        {
            id: 12,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
            mrp: 2000
        },
        {
            id: 13,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
        },
        {
            id: 14,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
        },
        {
            id: 15,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
        },
        {
            id: 16,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
        },
        {
            id: 17,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
        },
        {
            id: 18,
            image: '/assets/productImage.webp',
            title: 'Noise 250 Carbon',
            price: 2000,
            discount: 60,
        }
    ]


  return (
    <>
        {
            productData.map((product) => (
                <div key={product.id} className='flex flex-col gap-3 my-4 border-2 border-gray-300 p-2 rounded-md'>
                    <Image src={product.image} width={300} height={300} loading="lazy" alt='Product'/>
                    <div>
                        <p>{product.title}</p>
                        <div className='flex gap-2'>
                            <p className='font-bold'>{product.price} INR</p>
                            <del className='text-gray-400'>{product.mrp} INR</del>
                            <p className='text-green-600 font-semibold'>{product.discount} % off</p>
                        </div>
                    </div>
                    <button className='w-full py-2 px-5 bg-indigo-600 rounded-md text-white'>Add to Cart</button>
                </div>
            ))
        }
    </>
  )
}

export default ProductCard