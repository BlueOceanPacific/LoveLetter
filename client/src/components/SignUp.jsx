import React from 'react';

function SignUp() {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
  );
}

export default SignUp;
