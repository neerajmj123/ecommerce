import React from 'react';
import Item from '../Item/Item';
import data_product from '../Assets/data';

const RelatedProduct = () => {
  return (
    <div className="flex flex-col items-center gap-2.5 min-h-screen">
      <h1 className="text-[#171717] text-3xl sm:text-4xl lg:text-5xl font-semibold">Related Products</h1>
      <hr className="w-2/3 sm:w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-12 lg:px-24 xl:px-32">
        {data_product.map((item, i) => (
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
};

export default RelatedProduct;
