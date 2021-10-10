import React from 'react';

const ProductDetail = () => {

  return (
    <div className="product_detail_page">

      <div className="product_detail_page__product_image">

        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
      </div>
      <div className="product_detail_page__product_description">

        <div className="product_detail_page__product_description__brand">
          <span>Louiviton</span>
        </div>

        <div className="product_detail_page__product_description__title">
          <span>Bag</span>
        </div>

        <div className="product_detail_page__product_description__rating">
          ***
        </div>

        <div className="product_detail_page__product_description__options">

          <div className="options__size">

            <div className="options__size__title">
              <span>Delivery</span>
            </div>

            <div className="options__size__content">
              <select name="" id="">
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
              </select>
            </div>
          </div>

          <div className="options__size">
            <span>Price</span>
            <span>234$</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductDetail;