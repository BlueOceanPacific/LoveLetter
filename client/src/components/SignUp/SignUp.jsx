import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.scss';

function SignUp() {
  const navigate = useNavigate();
  const [usernameHelper, setUsernameHelper] = useState(() => 'Please choose a username my lord.');

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    pronouns: '',
    avatar: '/images/avatars/blueFlowersCat.png',
  });

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post('/user/signup', formData)
      .then(() => {
        document.getElementById('usernameHelp').style.color = '#ff0000';
        setUsernameHelper('username added');
        navigate('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === '11000') {
          document.getElementById('usernameHelp').style.color = '#ff0000';
          setUsernameHelper('this username already exists my lord');
        } else if (errorCode === 'ERR_BAD_RESPONSE') {
          document.getElementById('usernameHelp').style.color = '#ff0000';

          setUsernameHelper('error creating an account, please refresh and try again later');
        }
      });
  };

  return (
    <div className="container" id="su-container">
      <h3>{' Create an Account '}</h3>
      <form className="su-form" onSubmit={submitHandler}>
        <div className="mb-3 su-username">
          <label htmlFor="SignUpInputUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="SignUpInputUsername"
            placeholder="Username"
            aria-describedby="usernameHelp"
            onChange={changeHandler}
            name="username"
            required
            pattern="^[A-Z]{1,15}$"
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
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}"
          />
          <div id="passwordHelp" className="form-text">
            Use 8 or more characters with a mix of uppercase and lowercase letters, numbers, and
            symbols to build the strongest castle in all of England.
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

        <div className="mb-3 su-avatar avatar">
          <div>
            <img className="avatarRound" src={`${formData.avatar}`} alt="Avatar" />
          </div>

          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Choose your avatar
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div className="row" value="/images/avatars/blueFlowersCat.png">
                <button
                  type="button"
                  name="avatar"
                  id="blueCat"
                  className="dd-btn"
                  value="/images/avatars/blueFlowersCat.png"
                  onClick={() =>
                    changeHandler({
                      target: {
                        name: 'avatar',
                        value: '/images/avatars/blueFlowersCat.png',
                      },
                    })
                  }
                >
                  <img
                    className="dd-thumbnail"
                    src="/images/avatars/blueFlowersCat.png"
                    alt="Blue Flowers Cat"
                  />
                  <span>Blue</span>
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="dd-btn"
                  name="avatar"
                  value="/images/avatars/redHatCat.png"
                  onClick={() =>
                    changeHandler({
                      target: {
                        name: 'avatar',
                        value: '/images/avatars/redHatCat.png',
                      },
                    })
                  }
                >
                  <img
                    className="dd-thumbnail"
                    src="/images/avatars/redHatCat.png"
                    alt="Red Hat Cat"
                  />
                  <span> Red</span>
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="dd-btn"
                  name="avatar"
                  value="/images/avatars/underBlanketCat.png"
                  onClick={() =>
                    changeHandler({
                      target: {
                        name: 'avatar',
                        value: '/images/avatars/underBlanketCat.png',
                      },
                    })
                  }
                >
                  <img
                    className="dd-thumbnail"
                    src="/images/avatars/underBlanketCat.png"
                    alt="Under Blanket Cat"
                  />
                  <span>Grey</span>
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="dd-btn"
                  name="avatar"
                  value="/images/avatars/voidCat.png"
                  onClick={() =>
                    changeHandler({
                      target: {
                        name: 'avatar',
                        value: '/images/avatars/voidCat.png',
                      },
                    })
                  }
                >
                  <img className="dd-thumbnail" src="/images/avatars/voidCat.png" alt="Void Cat" />
                  <span>Black</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="su-buttons" id="su-buttons">
          <button type="button" className="btn btn-primary" id="su-back-button">
            Back
          </button>
          <button type="submit" className="btn btn-primary" id="su-submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
