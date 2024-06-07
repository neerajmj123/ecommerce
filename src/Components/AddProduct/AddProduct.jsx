import React, { useState, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ShopContext } from '../Context/ShopContext';

function AddProduct() {
  const [name, setName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageBase64, setImageBase64] = useState(null);

  

  const accessToken = localStorage.getItem("token");
  if (!accessToken) {
    console.error("Access token not found in localStorage");
    return null;
  }

  const payloadBase64 = accessToken.split('.')[1];
  const decodedPayload = atob(payloadBase64);
  const decodedToken = JSON.parse(decodedPayload);
  const userId = decodedToken.user_id;

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImageBase64(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!imageBase64) {
        throw new Error("Please select an image");
      }

      const response = await axios.post('http://localhost:4000/addproduct', {
        id: userId,
        name,
        new_price: newPrice,
        old_price: oldPrice,
        category,
        imageBase64,
      });

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Product added successfully!',
        }).then(() => {
          setName("");
          setNewPrice("");
          setOldPrice("");
          setCategory("");
          setImageBase64(null);
    
        });
      }
    } catch (error) {
      console.error(error);
      let errorMessage = "Something went wrong!";
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
      });
    }
  };

  return (
    <div className='max-w-lg mx-auto px-4 py-8'>
      <h1 className='text-2xl font-semibold text-center mb-8'>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-lg font-semibold mb-2'>Product Title</label>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Type here' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' />
        </div>
        <div className='flex flex-col md:flex-row md:space-x-4'>
          <div className='mb-4 flex-1'>
            <label className='block text-lg font-semibold mb-2'>Price</label>
            <input type="text" name="new_price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} placeholder='Type here' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' />
          </div>
          <div className='mb-4 flex-1'>
            <label className='block text-lg font-semibold mb-2'>Offer Price</label>
            <input type="text" name="old_Price" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} placeholder='Type here' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' />
          </div>
        </div>
        <div className='mb-4'>
          <label className='block text-lg font-semibold mb-2'>Product Category</label>
          <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'>
            <option value="">Select Category</option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-lg font-semibold mb-2'>Product Image</label>
          <div className='flex items-center'>
            {imageBase64 && <img src={imageBase64} alt="Selected" className='w-20 h-20 object-cover mr-4' />}
            <input type="file" id="image-input" name="image" onChange={handleImageChange} className='w-full' />
          </div>
        </div>
        <button type="submit" className='w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300'>Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
