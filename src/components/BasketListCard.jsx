import React from 'react';

const BasketListCart = () => {
  return (
    <>
      <table className="basket-list" style={{}}>
        <tr className="basket-list__header">
          <th>Item</th>
          <th className="basket-item-description">Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        {/* {rocketsData.map((item) => (
          <tr className="basket-item">
            <td>
              <div className="basket-item-img">
                <img
                  src="https://cdn.webshopapp.com/shops/326934/files/380423129/image.jpg"
                  alt=""
                />
              </div>
            </td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>
              <input type="number" className="basket-item-quantity" />
            </td>
            <td>{item.price}</td>
          </tr>
        ))} */}
        <tr className="basket-item">
          <td>
            <div className="basket-item-img">
              <img
                src="https://cdn.webshopapp.com/shops/326934/files/380423129/image.jpg"
                alt=""
              />
            </div>
          </td>
          <td>Iphone 13</td>
          <td>$750</td>
          <td>
            <input type="number" className="basket-item-quantity" />
          </td>
          <td>$750</td>
        </tr>
        <tr className="basket-item">
          <td>
            <div className="basket-item-img">
              <img
                src="https://cdn.pixabay.com/photo/2020/06/26/12/21/macbook-pro-5342546_960_720.png"
                alt=""
              />
            </div>
          </td>
          <td>Iphone 13</td>
          <td>$1350</td>
          <td>
            <input type="number" className="basket-item-quantity" />
          </td>
          <td>$750</td>
        </tr>
        <tr className="basket-list-total">
          <td></td>
          <td></td>
          <td>Total to Pay :</td>
          <td></td>
          <td>$2100</td>
        </tr>
      </table>
    </>
  );
};

export default BasketListCart;
