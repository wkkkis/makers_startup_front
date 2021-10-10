import React from 'react';

import './ProductCard.css';

const ProductCard = ({item}) => {
    return (
        <div className="product-card">
            <div><img className="product-card__image" src={item.image}/></div>
            <div className="product-card-desc">
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
            
            
        </div>
    );
};

export default ProductCard;