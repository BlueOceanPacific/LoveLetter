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
  const [showDropdown, setShowDropdown] = useState(false);
  const [data, setData] = useState({
    pronouns: user.pronouns,
    avatar: user.avatar
  })
  const { pronouns, avatar } = data;


  const changeHandler = (e) => {
    console.log('clicked', e.target);
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('updated data', data.pronouns, data.avatar);
    axios.put('/user/profile', data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      <div className="userprofile-main">
        <div className="col-sm" />
        <div className="col-lg middle">
          <form onSubmit={submitHandler}>
            <div className="username">
              <p className="UP-username-hello">{`Hello ${user.username}!`}</p>
              <p className="UP-username-pronouns">{`[${user.pronouns}]`}</p>
            </div>
            <div className="avatar">
              <div>
                {/* add url to chosen avatar {avatar}
                "/images/avatars/disgustedCat.png" */}

                <img className="avatarRound" src={`${user.avatar}`} alt="avatar" />
              </div>
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Choose your avatar
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <div className="row">
                    <button type="button"  name="avatar" id="blueCat"  className="dd-btn"  value="/images/avatars/blueFlowersCat.png" onClick={changeHandler}><img className="dd-thumbnail" src="/images/avatars/blueFlowersCat.png" /><span>Blue</span></button>
                    {/*  */}
                  </div>
                  <div className="row">
                    <button type="button" className="dd-btn" name="avatar" value="/images/avatars/redHatCat.png" onClick={changeHandler}><img className="dd-thumbnail" src="/images/avatars/redHatCat.png" />
                      <span> Red</span></button>
                  </div>
                  <div className="row">
                    <button type="button" className="dd-btn" name="avatar" value="/images/avatars/underBlanketCat.png" onClick={changeHandler}><img className="dd-thumbnail" src="/images/avatars/underBlanketCat.png" />
                      <span>Grey</span></button>
                  </div>
                  <div className="row">
                    <button type="button" className="dd-btn" name="avatar" value="/images/avatars/voidCat.png" onClick={changeHandler}><img className="dd-thumbnail" src="/images/avatars/voidCat.png" />
                      <span>Black</span></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pronouns">
              <input
                type="text" className="form-control UP-textinput" name="pronouns" placeholder="Your pronouns" onChange={changeHandler}
              />
            </div>
            <div className="edit">
              <button type="button" data-bs-target="#" className="btn btn-primary UP-edit-btn">Cancel</button>

              <button type="submit" name="submit" className="btn btn-primary UP-edit-btn"> Save</button>
            </div>
          </form>
        </div>
        <div className="col-sm" />
      </div >
    </div>
  );
}

export default UserProfile;
