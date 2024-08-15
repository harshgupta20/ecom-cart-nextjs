"use client";

import CartProductCard from '@/components/CartProductCard';
import { ProductsContext } from '@/context/products';
import { useContext, useEffect, useState } from 'react';

const CartPage = () => {

  const {cartProducts} = useContext(ProductsContext);

  const [priceDetails, setPriceDetails] = useState({
    totalAmount: 0,
    totalDiscountedAmount: 0,
    totalPayableAmount: 0,
    platformFee: 0,
    deliveryCharges: 0,
    totalSaving: 0
  });

  function calculateTotalPricing() {
    let totalAmount = 0;
    let totalDiscountedAmount = 0;
    let totalPayableAmount = 0;
    cartProducts.forEach(product => {
      // totalAmount += ((product?.price*product?.discountPercentage)/100).toFixed(2);
      // To get the actual price of the product before discount
      totalAmount += ((product?.price*100)/(100 - product?.discountPercentage))* (product?.quantity ?? 1);
      // To get the discounted amount of the product
      totalDiscountedAmount += (((product?.price*100)/(100 - product?.discountPercentage)) - product?.price)* (product?.quantity ?? 1);
      totalPayableAmount += (product?.price)* (product?.quantity ?? 1);

    });  
    const platformFee = 3;
    const deliveryCharges = 150;
    const totalSaving = totalDiscountedAmount+  deliveryCharges;

    setPriceDetails({totalAmount,totalDiscountedAmount,totalPayableAmount,platformFee,deliveryCharges,totalSaving});
  } 

  useEffect(() => {
    calculateTotalPricing();
  }, [cartProducts]);

  return (
    <>
      <div className='w-full h-screen flex bg-gray-100 p-4'>
        <div className='sm:w-8/12 p-6'>
          <div className='w-full p-4 shadow-md'>
            {
              cartProducts.length === 0 ? (
                <div className='text-center'>
                  <h1 className='text-2xl'>No products in cart</h1>
                  <p className='text-gray-500'>Add products to cart to see them here</p>
                </div>
              ) : (
                cartProducts.map((product, key) => <CartProductCard key={key} product={product}/>)
              )
            }
          </div>
        </div>
        <div className='sm:w-4/12 py-6'>
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            {
              cartProducts.length === 0 ? (
                <>
                  <div className="px-4 py-2">
                    <h1 className="text-3xl text-gray-800 font-bold">Order Summary</h1>
                    <p className="text-sm text-gray-600">No payable amount.</p>
                  </div>
                </>
              )
              : (
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th colSpan="2" className="text-left p-4 text-gray-600 font-medium">PRICE DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4 text-gray-600">Price ({cartProducts.length} Products)</td>
                      <td className="p-4 text-right font-medium text-gray-800">{priceDetails.totalAmount.toFixed(2)} INR</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 text-gray-600">Discount</td>
                      <td className="p-4 text-right font-medium text-green-600">{priceDetails.totalDiscountedAmount.toFixed(2)} INR</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 text-gray-600">Platform Fee</td>
                      <td className="p-4 text-right font-medium text-gray-800">{priceDetails.platformFee} INR</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 text-gray-600">Delivery Charges</td>
                      <td className="p-4 text-right font-medium text-gray-800"><s>{priceDetails.deliveryCharges} INR</s> <span className="text-green-600">Free</span></td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 text-gray-600 font-medium">Total Amount</td>
                      <td className="p-4 text-right font-medium text-gray-800">{priceDetails.totalPayableAmount.toFixed(2)} INR</td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-green-50">
                    <tr className="border-t">
                      <td colSpan="2" className="p-4 text-green-600 text-center font-medium">You will save {priceDetails.totalSaving.toFixed(2)} INR on this order</td>
                    </tr>
                  </tfoot>
                </table>
              )
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default CartPage