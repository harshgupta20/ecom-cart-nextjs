"use client";

import { ProductsContext } from '@/context/products';
import { errorAlert, successAlert } from '@/utils/alerts';
import { deleteSingleProduct } from '@/utils/localstorage';
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const CartProductCard = ({product}) => {

    const [loading, setLoading] = useState(false);
    const {setCartProducts} = useContext(ProductsContext);

    const handleRemoveFromCart = async () => {
        try{
            setLoading(true);
            // simulate loading behavior
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const newProductsList = deleteSingleProduct(product);
            successAlert(`${product?.title} removed from cart`);
            setLoading(false);
            setCartProducts(newProductsList);
        }
        catch(error){
            errorAlert(error.message);
            setLoading(false);
        }
    }

    const handleCountChange = (countWithSign) => {
        try{
            const newProduct = {...product};
            newProduct.quantity = (newProduct?.quantity ?? 1) + countWithSign;

            if(newProduct.quantity > 10){
                throw new Error("You can't add more than 10 items");
            }
            else if(newProduct.quantity < 1){
                throw new Error("Quantity can't be less than 1");
            }

            setCartProducts((products) => products.map((product) => product.id === newProduct.id ? newProduct : product));
            successAlert("Quantity updated");
        }
        catch(error){
            errorAlert(error.message);
        }
    }
    

  return (
    <div className='p-4'>
        <div className='flex justify-between'>
            <div className='flex gap-6'>
                <Image src={product?.images[0]} width={150} height={150} loading="lazy" alt='Product'/>
                <div className='flex flex-col justify-between py-2'>
                    <div>
                        <h3 className='text-2xl'>{product?.title}</h3>
                        <p className='text-sm text-gray-500'>{product?.description}</p>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        <p className='font-bold'>{product?.price} INR</p>
                        <del className='text-gray-400'>{((product?.price) + (product?.price*product?.discountPercentage)/100).toFixed(2) } INR</del>
                        <p className='text-green-600 font-semibold'>{product.discountPercentage} % off</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-sm'>Delivered By 21 Auguest</p>
            </div>
        </div>
        <div className='flex place-items-center gap-3 justify-end'>
            <div className='flex place-items-center gap-3 border-2 border-gray-200 rounded-md'>
                <button onClick={() => handleCountChange(-1)} className='p-2 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-tl-md rounded-bl-md'>-</button>
                <p className='text-sm'>{product?.quantity ?? 1}</p>
                <button onClick={() => handleCountChange(1)} className='p-2 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-tr-md rounded-br-md'>+</button>
            </div>

            <button onClick={handleRemoveFromCart} disabled={loading} className='bg-red-600 text-white text-sm py-2 px-8 rounded-md'>{loading ? "Removing..." : "Remove"}</button>
        </div>
    </div>
  )
}

export default CartProductCard