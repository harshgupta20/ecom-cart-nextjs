import CartProductCard from '@/components/CartProductCard'
import React from 'react'

const CartPage = () => {
  return (
    <>
      <div className='w-full h-screen flex bg-gray-100 p-4'>
        <div className='sm:w-8/12 p-6'>
          <div className='w-full p-4 shadow-md'>
            <CartProductCard/>
          </div>
        </div>
        <div className='sm:w-4/12 py-6'>
          <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <table class="w-full">
              <thead class="bg-gray-100">
                <tr>
                  <th colspan="2" class="text-left p-4 text-gray-600 font-medium">PRICE DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t">
                  <td class="p-4 text-gray-600">Price (2 items)</td>
                  <td class="p-4 text-right font-medium text-gray-800">₹13,989</td>
                </tr>
                <tr class="border-t">
                  <td class="p-4 text-gray-600">Discount</td>
                  <td class="p-4 text-right font-medium text-green-600">−₹10,192</td>
                </tr>
                <tr class="border-t">
                  <td class="p-4 text-gray-600">Platform Fee</td>
                  <td class="p-4 text-right font-medium text-gray-800">₹3</td>
                </tr>
                <tr class="border-t">
                  <td class="p-4 text-gray-600">Delivery Charges</td>
                  <td class="p-4 text-right font-medium text-gray-800"><s>₹150</s> <span class="text-green-600">Free</span></td>
                </tr>
                <tr class="border-t">
                  <td class="p-4 text-gray-600 font-medium">Total Amount</td>
                  <td class="p-4 text-right font-medium text-gray-800">₹3,800</td>
                </tr>
              </tbody>
              <tfoot class="bg-green-50">
                <tr class="border-t">
                  <td colspan="2" class="p-4 text-green-600 text-center font-medium">You will save ₹10,189 on this order</td>
                </tr>
              </tfoot>
            </table>
          </div>

        </div>
      </div>
    </>
  )
}

export default CartPage