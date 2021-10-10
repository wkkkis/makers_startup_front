import React from 'react';

import { Rate } from 'antd';
import ProductCommentsList from '../components/ProductCommentsList';

const ProductDetail = () => {

  return (
    <div className="container">
    <div className="product_detail_page">

      <div className="product_detail_page__product_image">

        <img className="product_detail_image" src="https://n.nordstrommedia.com/id/sr3/64e67a24-b4e2-43b9-a5e6-1d19132f16db.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838" alt="" />
      </div>

      <div className="product_detail_page__product_description">

        <div className="product_detail_page__product_description__brand">
          <span>Louiviton</span>
        </div>

        <div className="product_detail_page__product_description__title">
          <span>Bag</span>
        </div>

        <div className="product_detail_page__product_description__rating">
        <Rate defaultValue={5} />
        </div>

        <div className="product_detail_page__product_description__options">

          <div className="options__size">

            <div className="options__size__title">
              <span>Delivery</span>
            </div>
          </div>

          <div className="options__size">
            <span>Price</span>
            <span>234$</span>
          </div>
          <div className="product_detail_page__buttons">
            <button className="product_detail_page__add-to-favo-btn">Add to favorites</button>
            <button className="product_detail_page__add-to-cart-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="product-comments">
     <ProductCommentsList />
    </div>
    </div>
  )
};

export default ProductDetail;