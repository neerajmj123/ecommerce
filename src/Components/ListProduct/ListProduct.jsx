import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function ListProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const payloadBase64 = token.split('.')[1];
        const decodedPayload = atob(payloadBase64);
        const decodedToken = JSON.parse(decodedPayload);
        const userId = decodedToken.user_id; // Extracting userId from decoded token
        console.log(userId);

        const response = await axios.get('http://localhost:4000/getProducts', {
          params: { id: userId }
        });

        setProducts(response.data.data);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to fetch products!',
        });
      }
    };

    fetchProducts();
  }, []);

  const handleRemoveProduct = async (id) => {
    try {
      const response = await axios.post('http://localhost:4000/removeProduct', { id });
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Product has been removed.',
        });
        setProducts(products.filter(product => product.id !== id));
      }
    } catch (error) {
      console.error("There was an error removing the product!", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to remove product!',
      });
    }
  };

  return (
    <div className='max-w-5xl mx-auto px-4 py-8'>
      <h1 className='text-2xl font-semibold text-center mb-8'>All Products List</h1>
      <div className='grid grid-cols-6 gap-4 font-semibold'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <hr className='my-4' />
      {products.length > 0 ? (
        products.map(product => (
          <div key={product._id} className='grid grid-cols-6 gap-4 items-center py-2'>
            <img src={`http://localhost:4000${product.image}`} alt={product.name} className='w-20 h-20 object-cover' />
            <p>{product.name}</p>
            <p>{product.old_price}</p>
            <p>{product.new_price}</p>
            <p>{product.category}</p>
            <button
              onClick={() => handleRemoveProduct(product.id)}
              className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300'
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}

export default ListProduct;
