import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaList } from 'react-icons/fa'; // Import the addProduct and list icons

const Sidebar = () => {
  return (
    <div className="flex flex-col pt-8 gap-5 w-full max-w-xs h-screen bg-white shadow-md">
      <Link to={'/seller/addProduct'} className="no-underline">
        <div className="flex items-center p-4 md:p-3 text-gray-800 hover:bg-gray-100 transition duration-300 rounded-lg">
          <FaPlus className="mr-3 md:mr-2 text-xl" /> {/* Add Product icon */}
          <span className="hidden md:block">Add Product</span>
        </div>
      </Link>
      <Link to={'/seller/listProduct'} className="no-underline">
        <div className="flex items-center p-4 md:p-3 text-gray-800 hover:bg-gray-100 transition duration-300 rounded-lg">
          <FaList className="mr-3 md:mr-2 text-xl" /> {/* List icon */}
          <span className="hidden md:block">Product List</span>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
