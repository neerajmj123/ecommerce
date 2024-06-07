import React, { useContext } from 'react';
import Item from './Item/Item';
import { ShopContext } from './Context/ShopContext';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className="flex flex-col items-center">
      <img src={props.banner} alt="" className="block my-8 w-11/12 md:w-10/12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-12 lg:px-24 xl:px-32 mb-5">
        { all_product.map((item) => {
          if (props.category === item.category) {
            return (
              <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              />
            )
          }
          else{
          return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
