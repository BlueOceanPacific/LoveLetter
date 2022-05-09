/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateGame.css';

export default function CreateGame() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }
  return (
    <div className="container creategame-box my-auto ">
      <div className="row">
        <h1>Create Game</h1>
      </div>
      <hr />
      <form>
        {/* Input Select */}
        <div className="row ">
          <div className="col">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Lobby name"
            />
          </div>

          <div className="col">
            <select className="form-select form-select-lg">
              <option selected>Select Prize</option>
              <option value="1">Prince</option>
              <option value="2">Princess</option>
              <option value="3">My Liege</option>
            </select>
          </div>
        </div>
        {/* Check Box */}
        <div className="form-check my-5">
          <input
            className="form-check-input "
            type="radio"
            name="flexRadioDefault"
            value="Public"
            id="defaultCheck1"
          />
          <label className="form-check-label " htmlFor="defaultCheck1">
            Public
          </label>
        </div>
        <div className="form-check my-5">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="Private"
            id="defaultCheck1"
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Private
          </label>
        </div>

        {/* Buttons */}
        <div className="row btn-row">
          <div className="col ">
            <button
              className="btn btn-primary btn-lg createlobby-btn mt-5"
              type="submit"
            >
              Create Lobby
            </button>
          </div>
          <div className="col back-btn-col">
            <button
              className="btn btn-primary btn-lg  back-btn mt-5"
              type="button"
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
