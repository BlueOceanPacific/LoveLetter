/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './SignUp.scss';

function SignUp() {
  return (
    <div className="container">
      <form>
        <div className="mb-3 email">
          <label htmlFor="InputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            requried
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else my leige.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="InputPassword"
            required
            aria-describedby="passwordHelp"
          />
          <div id="passwordHelp" className="form-text">
            {` Use 8 or more characters with a mix of letters, numbers, and symbols to build the strongest
              castle in all of England.`}
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
              <input id="avatar" name="avatar" type="file" required aria-describedby="avatarHelp" />
            </div>
          </div>
          <div id="avatarHelp" className="form-text">
            Choose your avatar or be seen as a peasent.
          </div>
        </div>

        <div className="buttons">
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
