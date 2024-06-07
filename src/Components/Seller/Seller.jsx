import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import ListProduct from '../ListProduct/ListProduct';
import AddProduct from '../AddProduct/AddProduct';

const Seller = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        <Routes>
          <Route path='addProduct' element={<AddProduct />} />
          <Route path='listProduct' element={<ListProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default Seller;
