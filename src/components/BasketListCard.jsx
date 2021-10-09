import React from 'react';

const BasketListCart = () => {
  return (
    <>
      <div className="container">
        <div className="card_list">
          <div className="card_list__header">
            <div className="card_list__column">Item</div>
            <div className="card_list__column">Description</div>
            <div className="card_list__column">Price</div>
            <div className="card_list__column">Quantity</div>
            <div className="card_list__column">Subtotal</div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default BasketListCart;
