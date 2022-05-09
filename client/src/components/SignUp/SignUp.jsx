import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import { useQuery } from 'react-query';
import useStore from '../Store/store';
import './SignUp.scss';

//3. if fields are valid, the front end will allow the submission to run a post on the signup route
// POST all fields in a single object

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    pronouns: '',
    avatar: '',
  });

  const user = useStore((state) => state.user);

  const { username, password, email, pronouns, avatar } = formData;

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: [event.target.value] });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post('/user/signup', formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container" id="su-container">
      <h3>{` Create an Account ${formData.password}`}</h3>
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
            Please choose a username my lord.
          </div>
        </div>

        <div className="mb-3 su-password">
          <label htmlFor="SignUpInputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="SignUpInputPassword"
            placeholder="Password"
            aria-describedby="passwordHelp"
            name="password"
            onChange={changeHandler}
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
            type="email"
            className="form-control"
            id="SignUpInputEmail"
            placeholder="Email Address"
            aria-describedby="emailHelp"
            onChange={changeHandler}
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
            type="input"
            className="form-control"
            id="SignUpInputPronoun"
            placeholder="Pronouns"
            aria-describedby="pronounHelp"
            onChange={changeHandler}
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
                id="avatar"
                name="avatar"
                type="file"
                aria-describedby="avatarHelp"
                onChange={changeHandler}
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

// const { data, isFetching, isError } = useQuery(
//   '/user/signup',
//   () => {
//     console.log(form.values);
//   },
//   {
//     enabled: false,
//     retry: false,
//   }
// );
// console.log('data: ', data);
// console.log('isFetching', isFetching);
// if the error data comes back we need to rerender the
// useEffect(() => {
//   if (data?.length) {
//     setResults(data);
//   }
// }, [data, setResults]);
