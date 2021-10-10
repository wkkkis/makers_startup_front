import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <div>
        <img className="product-card__image" src={item.image} />
      </div>
      <div className="product-card-desc">
        <div>{item.name}</div>
        <div>{item.price}</div>
      </div>
      <div className="icon-block">
        <Link to="/add">
          <div className={'icon-div'}>
            <AiOutlineEdit className={'edit-icon'} />
          </div>
        </Link>
        <div className={'icon-div'}>
          <AiOutlineDelete className={'delete-icon'} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
