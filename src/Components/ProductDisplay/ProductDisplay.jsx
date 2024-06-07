import React, { useContext,useState,useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (productId ) => { 
  const { all_product, addToCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const selectedProduct = all_product.find((product) => product.id === Number(productId));
    setProduct(selectedProduct);
  }, [all_product, productId]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col lg:flex-row mx-4 lg:mx-40 my-8 gap-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-row lg:flex-col gap-4">
          <img src={`http://localhost:4000${product.image}`} alt="Product thumbnail" className="w-20 h-20 object-cover lg:w-34 lg:h-24 xl:w-28 xl:h-28 border rounded-lg" />
          <img src={product.image} alt="Product thumbnail" className="w-20 h-20 object-cover lg:w-24 lg:h-24 xl:w-28 xl:h-28 border rounded-lg" />
          <img src={product.image} alt="Product thumbnail" className="w-20 h-20 object-cover lg:w-24 lg:h-24 xl:w-28 xl:h-28 border rounded-lg" />
          {/* <img src={product.image} alt="Product thumbnail" className="w-20 h-20 object-cover lg:w-24 lg:h-24 xl:w-28 xl:h-28 border rounded-lg" /> */}
        </div>
        <div>
          <img src={product.image} alt="Product main" className="w-full h-auto object-cover rounded-lg border" />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:ml-8">
        <h1 className="text-xl lg:text-2xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-gray-300" />
          <p className="text-sm text-gray-500">(122)</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold text-gray-500 line-through">${product.old_price}</div>
          <div className="text-lg font-bold text-gray-800">${product.new_price}</div>
        </div>
       
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Select Size</h2>
          <div className="flex gap-2 flex-wrap">
            <div className="border border-gray-300 px-3 py-1 rounded cursor-pointer hover:bg-gray-100">S</div>
            <div className="border border-gray-300 px-3 py-1 rounded cursor-pointer hover:bg-gray-100">M</div>
            <div className="border border-gray-300 px-3 py-1 rounded cursor-pointer hover:bg-gray-100">L</div>
            <div className="border border-gray-300 px-3 py-1 rounded cursor-pointer hover:bg-gray-100">XL</div>
            <div className="border border-gray-300 px-3 py-1 rounded cursor-pointer hover:bg-gray-100">XXL</div>
          </div>
        </div>
        <button 
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out" 
          onClick={() => addToCart(product.id)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
