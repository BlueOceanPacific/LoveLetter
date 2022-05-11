import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import useStore from '../Store/store';

function Login() {
  const logIn = useStore((state) => state.logIn);
  const navigate = useNavigate();

  const forgotPassword = () => {
    alert('Users are not able to reset passwords or change username');
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validatesLogin = () => {
    axios
      .post('/user/login', { username, password })
      .then(({ data }) => {
        console.log('logged in as: ', data);
        if (data.user) {
          logIn(data.user);
        }
        return navigate('/');
      })
      .catch((err) => {
        console.log(err);
        alert('Invalid username or password');
      });
  };

  return (
    <div className="d-flex justify-content-center" id="login">
      <h1>Welcome!</h1>
      <br />

      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="username"
          id="login-input"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <br />
        <input
          className="input"
          type="text"
          placeholder="password"
          id="login-input"
          onChange={(event) => setPassword(event.target.value)}
        />
      </form>

      <br />
      <button
        type="button"
        className="btn btn-primary btn-sm"
        id="login-btn"
        onClick={validatesLogin}
      >
        Submit
      </button>
      <br />
      <Link to="/signup">
        <button type="button" className="btn btn-secondary btn-sm">
          Sign Up
        </button>
      </Link>
      <br />
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        id="login-pw-btn"
        onClick={forgotPassword}
      >
        Forgot Password
      </button>
    </div>
  );
}

export default Login;
