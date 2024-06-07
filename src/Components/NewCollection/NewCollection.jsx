import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import new_collection from '../Assets/new_collections'
const NewCollection = () => {

  return (
    <div className="flex flex-col items-center gap-4 h-auto lg:h-[90vh] px-4">
      <h1 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4 text-center">NEW COLLECTION</h1>
      <hr className="w-2/3 sm:w-[400px] h-[6px] rounded-[10px] bg-gray-800" />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-screen-xl px-4">
        {new_collection.map((item, i) => (
          <Item
          key={i}
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
