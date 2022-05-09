/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../Store/store';
import './UserProfile.scss';

function UserProfile() {
  const [user, setUser] = useState({});
  // const user = useStore((state) => state.user);

  const testUser = {
    username: 'twheeler',
  };

  // testing: get req - refresh component
  useEffect(() => {
    axios.get('/user/profile', testUser)
      .then((result) => {
        setUser(result.data);
        console.log('data from get req', result.data);
      })
      .catch((err) => console.log(err));
  }, [testUser]);

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('updated data', user);
    // put request
    axios.put('/user/profile', user)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="userprofile-main">
        <div className="col-sm" />
        <div className="col-lg">
          <form onSubmit={submitHandler}>
            {/* <div className="close"> */}
            {/* add functionality: close modal >> conditional at origin? */}
            {/* <button type="button" className="btn-primary closebtn">X</button> */}
            {/* </div> */}
            <div className="username">
              <span className="UP-username-msg">{user.username}</span>
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
                placeholder={`${user.pronouns}`}
                value={user.pronouns}
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
