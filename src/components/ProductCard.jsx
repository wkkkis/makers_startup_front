import React from 'react';

const ProductCard = ({item}) => {
    return (
        <div className="product-card">
            <div>
              <img className="product-card__image" src={item.image} alt=""/>
            </div>
            <div className="product-card-desc">
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
        </div>
    );
};

export default ProductCard;