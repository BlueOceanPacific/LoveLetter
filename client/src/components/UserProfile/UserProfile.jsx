/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';

// identify user (id sent in props) before sending put
function UserProfile(props) {
  const [showUPModal, setShowUPModal] = useState(true);

  return (
    <div>
      <div className="userprofile-main">
        <div className="col-sm">
          {/* <p> left</p> */}
        </div>
        <div className="col-lg">
          <div className="close">
            <button type="button" className="btn-primary closebtn">X</button>
          </div>
          <div className="avatar">
            <div>
              <img className="avatarRound" src="/images/avatars/disgustedCat.png" alt="avatar" />
            </div>
            <button type="button" className="btn btn-primary avatarEditBtn"> edit avatar</button>
          </div>
          <div className="pronouns ">
            <input
              type="text"
              className="form-control UP-textinput"
              id="UP-input-pronouns"
              placeholder="your pronouns"
            />
          </div>
          <div className="username">
            <input
              type="text"
              className="form-control UP-textinput"
              id="UP-input_username"
              placeholder="your new username"
            />
          </div>
          <div className="edit">
            <button type="button" className="btn btn-primary"> edit</button>
          </div>
          <div className="logout">
            <button type="button" className="btn btn-primary">logout</button>
          </div>
        </div>
        <div className="col-sm">
          {/* <p> right</p> */}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
