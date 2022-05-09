/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../Store/store.js';
import './UserProfile.scss';

// identify user (id sent in props)
// do get request when opening?
function UserProfile({
  username, pronouns, avatar, showUserProfile,
}) {
  const [data, setData] = useState({
    username: { username },
    pronouns: { pronouns },
    avatar: { avatar },
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <div className="userprofile-main">
        <div className="col-sm" />
        <div className="col-lg">
          <form onSubmit={submitHandler}>
            <div className="close">
              {/* add functionality: close modal >> conditional at origin? */}
              <button type="button" className="btn-primary closebtn">X</button>
            </div>
            <div className="username">
              <span className="UP-username-msg">USERNAME</span>
            </div>
            <div className="avatar">
              <div>
                {/* add url to chosen avatar {avatar}  */}
                <img className="avatarRound" src="/images/avatars/disgustedCat.png" alt="avatar" />
              </div>
              {/* add drop down menu */}
              {/* conditional view of dropdown? */}
              <span>Choose your avatar:</span>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>

            <div className="pronouns">
              <input
                type="text"
                className="form-control UP-textinput"
                name="pronouns"
                placeholder="to add: variable current pronouns"
                value={pronouns}
                onChange={changeHandler}
              />
            </div>
            <div className="edit">
              {/* cancel clears form - new get? */}
              <button type="submit" className="btn btn-primary UP-edit-btn"> Cancel</button>
              <button type="submit" name="submit" className="btn btn-primary UP-edit-btn"> Save</button>
            </div>
          </form>
        </div>
        <div className="col-sm" />
      </div>
    </div>
  );
}

export default UserProfile;
