import React from 'react';

const BasketTotalCard = () => {
  return (
    <>
      <div className="total_card">
        <div className="total_card__info">
          <div>Total to pay</div>
          <div className="total_price">$2100</div>
        </div>
        <div>
          <button className="button_checkout">Proceed to checkout</button>
        </div>
      </div>
    </>
  );
};

export default BasketTotalCard;
