import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <div className="transform hover:scale-105 transition duration-600 p-4">
      <Link to={`/product/${id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={image}
          alt={name}
          className="mb-3 w-full object-cover"
        />
      </Link>
      <p className="mb-3 text-center text-sm sm:text-base lg:text-lg font-medium">{name}</p>
      <div className="flex justify-center items-center gap-3">
        <div className="text-gray-800 text-base sm:text-lg font-semibold">
          ${new_price}
        </div>
        <div className="text-gray-500 text-base sm:text-lg font-medium line-through">
          ${old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
