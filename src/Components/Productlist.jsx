import React, { useContext } from 'react';
import { ShopContext } from './Context/ShopContext';
import Item from './Item'; // Ensure you import the Item component

const ProductList = () => {
  const { all_product } = useContext(ShopContext);

  if (!all_product || all_product.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-4">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {all_product.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
