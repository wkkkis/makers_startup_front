import React from 'react';

const AddProduct = () => {
  return (
    <div className="form-wrapper">
      <form method="post" className="auth-form">
        <div className="auth-container">
          <label for="title">
            <b>Title</b>
          </label>
          <input type="text" placeholder="Enter Title" name="title" required />

          <label for="description">
            <b>Description</b>
          </label>
          <input
            type="text"
            placeholder="Describe your product"
            name="description"
          />

          <label for="price">
            <b>Price</b>
          </label>
          <input type="text" placeholder="Enter Price" name="price" />

          <label for="amount">
            <b>Amount</b>
          </label>
          <input type="text" placeholder="Enter Amount" name="amount" />

          <select>
            <option value="0">Product Status:</option>
            <option value="1">In Stock</option>
            <option value="2">Out of Stock</option>s
            <option value="3">Awaiting</option>
          </select>

          <label for="main_photo">
            <b>Main Photo</b>
          </label>
          <input
            type="file"
            placeholder="Upload Main Photo"
            name="main_photo"
          />
          <select>
            <option value="0">Category:</option>
            <option value="1">Electronics</option>
            <option value="2">Clothing</option>s
            <option value="3">Beauty</option>
          </select>
          <button type="submit">Add Product</button>
        </div>

        {/* <div className="container">
        <span className="psw">
          Forgot <a href="#">password?</a>
        </span>
      </div> */}
      </form>
    </div>
  );
};

export default AddProduct;
