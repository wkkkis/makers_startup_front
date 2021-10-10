import React from 'react';

const Registration = () => {
  return (
    <div className="form-wrapper">
      <form method="post" className="auth-form">
        <div className="auth-container">
          <label for="username">
            <b>Userame</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />

          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label for="psw-confirm">
            <b>Password Confirm</b>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="psw-confirm"
            required
          />

          <select>
            <option value="0">Select role:</option>
            <option value="1">client</option>
            <option value="2">seller</option>
          </select>
          <label for="bio">
            <b>Bio</b>
          </label>
          <input type="text" placeholder="Bio" name="bio" required />
          <label for="country">
            <b>Country</b>
          </label>
          <input type="text" placeholder="Country" name="country" required />
          <label for="city">
            <b>City</b>
          </label>
          <input type="text" placeholder="City" name="city" required />

          <label for="avatar">
            <b>Avatar</b>
          </label>
          <input type="file" class="custom-file-input" name="avatar" />

          <button type="submit">Register</button>
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

export default Registration;
