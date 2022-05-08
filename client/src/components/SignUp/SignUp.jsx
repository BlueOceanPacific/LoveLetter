import React from 'react';
import './SignUp.scss';

function SignUp() {
  return (
    <div className="container" id="su-container">
      <h3> Create an Account </h3>
      <form>
        <div className="mb-3 email">
          <label htmlFor="SignUpInputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="SignUpInputEmail"
            placeholder="Email Address"
            requried
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else my liege.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="SignUpInputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="SignUpInputPassword"
            placeholder="Password"
            required
            aria-describedby="passwordHelp"
          />
          <div id="passwordHelp" className="form-text">
            Use 8 or more characters with a mix of letters, numbers, and symbols to build the
            strongest castle in all of England.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="InputUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="InputUsername"
            placeholder="Username"
            required
            aria-describedby="usernameHelp"
          />
          <div id="usernameHelp" className="form-text">
            Use 4 or more characters my lord.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="choose-avatar" className="form-label">
            Choose Avatar
          </label>
          <div className="kv-avatar">
            <div className="choose-avatar">
              <input id="avatar" name="avatar" type="file" aria-describedby="avatarHelp" />
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
