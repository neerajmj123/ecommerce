import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDisplay from './ProductDisplay/ProductDisplay';
import RelatedProduct from './RelatedProducts/RelatedProduct';

const Product = () => {
  const { productId } = useParams();

  return (
    <div>
      <ProductDisplay productId={productId} />
      <RelatedProduct />
    </div>
  );
};

export default Product;
