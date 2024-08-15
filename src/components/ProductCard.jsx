"use client";
import { ProductsContext } from '@/context/products';
import { errorAlert, successAlert } from '@/utils/alerts';
import { deleteSingleProduct, getProducts, setProduct } from '@/utils/localstorage';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

const ProductCard = ({product}) => {
   
    const [loading, setLoading] = useState(false);
    const [isProductInCart, setIsProductInCart] = useState(false);
    const {setCartProducts} = useContext(ProductsContext);
   
    const handleAddToCart = async () => {
        try{
            setLoading(true);
    
            // simulate loading behavior
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const newProductsList = setProduct(product);
            successAlert(`${product?.title} added to cart`);
            setLoading(false);
            setIsProductInCart(true);
            setCartProducts(newProductsList);
        }
        catch(error){
            errorAlert(error.message);
            setLoading(false);
        }
    }

    const handleRemoveFromCart = async () => {
        try{
            setLoading(true);
            // simulate loading behavior
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const newProductsList = deleteSingleProduct(product);
            successAlert(`${product?.title} removed from cart`);
            setLoading(false);
            setIsProductInCart(false);
            setCartProducts(newProductsList);
        }
        catch(error){
            errorAlert(error.message);
            setLoading(false);
        }
    }


    function checkProductInCart(productId){
        let userProducts = getProducts();
        if(userProducts){
            userProducts = userProducts.map((product) => product.id);
            if(userProducts.includes(productId)){
                setIsProductInCart(true);
            }
        }
    }

    useEffect(() => {
        checkProductInCart(product?.id);
    },[isProductInCart]);

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
            {
                isProductInCart ?
                <button onClick={handleRemoveFromCart} disabled={loading} className={`w-full py-2 px-5 bg-orange-600 rounded-md text-white ${loading && "opacity-80"}`}>{loading ? "Removing..." : "Remove from Cart"}</button>
                :
                <button onClick={handleAddToCart} disabled={loading} className={`w-full py-2 px-5 bg-indigo-600 rounded-md text-white ${loading && "opacity-80"}`}>{loading ? "Adding..." : "Add to Cart"}</button>
            }
        </div>

    </>
  )
}

export default ProductCard