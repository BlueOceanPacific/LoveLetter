/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.scss';

function SignUp() {
  let navigate = useNavigate();
  const [usernameHelper, setUsernameHelper] = useState(() => 'Please choose a username my lord.');

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    pronouns: '',
    avatar: '',
  });

  // const { username, password, email, pronouns, avatar } = formData;

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post('/user/signup', formData)
      .then((response) => {
        const status = JSON.parse(response.status);
        document.getElementById('usernameHelp').style.color = '#ff0000';
        setUsernameHelper('username added');
        navigate('/login');
      })
      .catch((error) => {
        console.log('error: ', error);
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode === '11000') {
          console.log('this username already exists my lord');
          document.getElementById('usernameHelp').style.color = '#ff0000';
          setUsernameHelper('this username already exists my lord');
        } else if (errorCode === 'ERR_BAD_RESPONSE') {
          document.getElementById('usernameHelp').style.color = '#ff0000';
          console.log('error creating an account, please refresh and try again later');
          setUsernameHelper('error creating an account, please refresh and try again later');
        }
      });
  };

  return (
    <div className="container" id="su-container">
      <h3>{' Create an Account '}</h3>
      <form className="su-form" onSubmit={submitHandler}>
        <div className="mb-3 su-username">
          <label htmlFor="InputUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="InputUsername"
            placeholder="Username"
            aria-describedby="usernameHelp"
            onChange={changeHandler}
            name="username"
            required
          />
          <div id="usernameHelp" className="form-text">
            {usernameHelper}
          </div>
        </div>

        <div className="mb-3 su-password">
          <label htmlFor="SignUpInputPassword" className="form-label">
            Password
          </label>
          <input
            aria-describedby="passwordHelp"
            className="form-control"
            id="SignUpInputPassword"
            name="password"
            onChange={changeHandler}
            placeholder="Password"
            required
            type="password"
          />
          <div id="passwordHelp" className="form-text">
            Use 8 or more characters with a mix of letters, numbers, and symbols to build the
            strongest castle in all of England.
          </div>
        </div>

        <div className="mb-3 su-email">
          <label htmlFor="SignUpInputEmail" className="form-label">
            Email address
          </label>
          <input
            aria-describedby="emailHelp"
            className="form-control"
            id="SignUpInputEmail"
            name="email"
            onChange={changeHandler}
            placeholder="Email Address"
            type="email"
            required
          />
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else my liege.
          </div>
        </div>

        <div className="mb-3 su-pronoun">
          <label htmlFor="SignUpInputPronoun" className="form-label">
            Pronouns
          </label>
          <input
            aria-describedby="pronounHelp"
            className="form-control"
            id="SignUpInputPronoun"
            name="pronouns"
            onChange={changeHandler}
            placeholder="Pronouns"
            type="input"
          />
          <div id="pronounHelp" className="form-text">
            How would you like to be addressed my liege.
          </div>
        </div>

        <div className="mb-3 su-avatar">
          <label htmlFor="choose-avatar" className="form-label">
            Choose Avatar
          </label>
          <div className="kv-avatar">
            <div className="choose-avatar">
              <input
                aria-describedby="avatarHelp"
                id="avatar"
                name="avatar"
                onChange={changeHandler}
                type="file"
              />
            </div>
          </div>
          <div id="avatarHelp" className="form-text">
            Choose your avatar or be seen as a peasant.
          </div>
        </div>

        <div className="su-buttons" id="su-buttons">
          <button type="button" className="btn btn-primary">
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
