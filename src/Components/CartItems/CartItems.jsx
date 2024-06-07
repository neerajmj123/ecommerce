import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='mt-8 mx-4 lg:mx-12 xl:mx-24'>
      <>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 lg:gap-6 py-3 px-4 bg-gray-100 text-gray-700 font-semibold text-lg rounded-lg'>
          <p className='col-span-2 sm:col-span-1'>Product</p>
          <p className='hidden sm:block'>Title</p>
          <p className='hidden sm:block'>Price</p>
          <p className='hidden sm:block'>Quantity</p>
          <p className='hidden sm:block'>Total</p>
          <p className='col-span-1'>Remove</p>
        </div>
        <hr className='my-2 h-px bg-gray-300 border-0' />
        {Array.isArray(all_product) && all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id} className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 lg:gap-6 py-3 px-4 bg-white text-gray-700 font-semibold text-lg rounded-lg shadow-md mb-5'>
                <img src={e.image} alt={e.name} className='col-span-2 sm:col-span-1 h-20 sm:h-32 lg:h-40 object-cover rounded-md' />
                <p className='hidden sm:block'>{e.name}</p>
                <p className='hidden sm:block'>${e.new_price}</p>
                <p className='hidden sm:block'>${cartItems[e.id]}</p>
                <p className='hidden sm:block'>{e.new_price * cartItems[e.id]}</p>
                <button 
                  onClick={() => removeFromCart(e.id)} 
                  className='col-span-1 flex justify-center items-center gap-2 w-10 h-10 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-red-500 text-white'>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            );
          }
          return null; // Ensure a default return value if the condition is not met
        })}
        <div className='mt-8 p-4 bg-gray-100 rounded-lg shadow-md'>
          <h1 className='text-2xl font-bold mb-4'>Cart Total</h1>
          <div className='text-lg'>
            <div className='flex justify-between mb-2'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2 h-px bg-gray-300 border-0' />
            <div className='flex justify-between mb-2'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className='my-2 h-px bg-gray-300 border-0' />
            <div className='flex justify-between font-semibold text-xl'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <button className='mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default CartItems;
