import React from 'react';
import BasketListCart from '../components/BasketListCard';
import BasketTotalCard from '../components/BasketTotalCard';

const Basket = () => {
  return (
    <>
      <div className="basket-container">
        <BasketListCart />
        <BasketTotalCard />
      </div>
    </>
  );
};

export default Basket;
