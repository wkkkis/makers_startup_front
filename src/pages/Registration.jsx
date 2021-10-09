import React from 'react';

const Registration = () => {
  return (
    <div className="form-wrapper">
      <form method="post" className="auth-form">
        <div className="auth-container">
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
          <select>
            <option value="0">Select role:</option>
            <option value="1">client</option>
            <option value="2">seller</option>
          </select>

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
