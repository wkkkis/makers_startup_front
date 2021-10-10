import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const ProductList = () => {

  const { products } = useSelector(({productReducer}) => productReducer)

  console.log(products)

  return products ? (
    <div className="product-list">
      {products.map((item) => (
          <ProductCard item={item} />
      ))}
    </div>
  ) : null
};

export default ProductList;