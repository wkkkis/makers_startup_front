import React from 'react';

const Login = () => {
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

          <button type="submit">Login</button>
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

export default Login;
