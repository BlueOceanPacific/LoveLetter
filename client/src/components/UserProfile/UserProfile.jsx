/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';

function UserProfile() {
  return (
    <div className="container">
      <div className="col-3" />
      <div className="col-6">
        <div className="row close"> </div>
        <div className="row avatar"> </div>
        <div className="row pronouns "> </div>
        <div className="row username"> </div>
        <div className="row edit"> </div>
        <div className="row logout"> </div>
      </div>
      <div className="col-3" />
    </div>

  );
}

export default UserProfile;
