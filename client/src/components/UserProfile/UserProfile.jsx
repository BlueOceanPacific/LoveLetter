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
  const user = useStore((state) => state.user);

  const [data, setData] = useState({
    pronouns:user.pronouns,
    avatar: user.avatar
  })

  const { pronouns, avatar } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('updated data', data);
    // axios.put('/user/profile', data)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="userprofile-main">
        <div className="col-sm" />
        <div className="col-lg middle">
          <form onSubmit={submitHandler}>
            <div className="username">
              <p className="UP-username-msg">{`Hello ${user.username}!`}</p>
              <p className="UP-username-msg">{user.pronouns}</p>
            </div>
            <div className="avatar">
              <div>
                {/* add url to chosen avatar {avatar}
                "/images/avatars/disgustedCat.png" */}
                <p> {`${user.avatar}`}</p>
                <img className="avatarRound" src={`${user.avatar}`} alt="avatar" />
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
                placeholder="Your pronouns"
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
