import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/actions/authActions';

const Login = () => {

  const dispatch = useDispatch()

  const [state, setState] = useState({
    email: null,
    password: null
  });

  const setEvent = e => {
    const { name, value } = e.target
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const loginBtn = () => {
      dispatch(userLogin(state))
  }

  return (
    <div className="form-wrapper">
      <div method="post" className="auth-form" >
        <div className="auth-container">

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={setEvent}
            required
          />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={setEvent}
            required
          />

          <button
            // type="submit"
            onClick={()=> loginBtn()}
          >
            Login
          </button>
        </div>

        {/* <div className="container">
        <span className="psw">
          Forgot <a href="#">password?</a>
        </span>
      </div> */}
      </div>
    </div>
  );
};

export default Login;
