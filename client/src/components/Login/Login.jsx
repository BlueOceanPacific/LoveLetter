import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div
      className="d-flex justify-content-center"
      id="login">
      <h1>Welcome!</h1>
      <br></br>
      <input
        type="text"
        placeholder="username"
        id="login-input"
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="password"
        id="login-input"
      ></input>
      <br></br>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        id="login-btn"
      >
        Submit
      </button>
      <br></br>
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        id="login-btn"
      >
        Sign Up
      </button>
      <br></br>
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        id="login-pw-btn"
      >
        Forgot Password
      </button>
    </div>
  );
}

export default Login;
