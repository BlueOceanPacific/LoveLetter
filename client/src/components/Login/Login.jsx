import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import './Login.scss';
import useStore from '../Store/store';

function Login() {
  const logIn = useStore((state) => state.logIn);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameHelper, setUsernameHelper] = useState(() => '');

  const validateLogin = () => {
    axios
      .post('/user/login', { username, password })
      .then(({ data }) => {
        if (data.user) {
          logIn(data.user);
        }
        return navigate('/');
      })
      .catch(() => {
        document.getElementById('login-username-help').style.color = '#ff0000';
        setUsernameHelper('the credentials you entered did not match our records.');
      });
  };

  return (
    <div className="container" id="login-container">
      <div className="d-flex justify-content-center" id="login">
        <h1>Welcome!</h1>

        <form className="form">
          <div className="row">
            <input
              className="input"
              type="text"
              placeholder="Username"
              id="login-input"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div id="login-username-help" className="form-text">
            {usernameHelper}
          </div>

          <div className="row">
            <input
              className="input"
              type="password"
              placeholder="Password"
              id="password-input"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </form>

        <div className="row">
          <button type="button" className="btn btn-primary" id="login-btn" onClick={validateLogin}>
            Submit
          </button>
        </div>

        <Link to="/signup">
          <div className="row">
            <button type="button" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </Link>
        <div className="row">
          <button
            type="button"
            className="btn btn-primary"
            id="login-pw-btn"
            data-toggle="modal"
            data-target=".bd-example-modal-sm"
            data-bs-target="#forgotPasswordModal"
            data-bs-toggle="modal"
          >
            Forgot Password
          </button>
        </div>

        <div
          className="modal fade bd-example-modal-sm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
          id="forgotPasswordModal"
        >
          <div className="modal-dialog modal-sm modal-dialog-centered">
            <div className="modal-content">Users are not able to reset passwords</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
