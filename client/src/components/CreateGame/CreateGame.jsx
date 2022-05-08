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

/*

<div className="container creategame-box" style={{width:'40%',paddingBottom:'4%'}}>
      <h1>Create Game</h1>

      <div style={{ paddingLeft: "10%"}}>
        <div style={{paddingRight: "10%"}}>
        <div style={{ display: "flex", marginBottom: "5%" }}>
          <div class="input-group input-group-lg" style={{ marginRight: "5%" }}>
            <input
              type="text"
              class="form-control"
              placeholder="title"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
          <select
            className="form-select form-select-lg mh-100"
            aria-label=".form-select-lg example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column",marginBottom:'5%',marginLeft:'4%' }}>
          <div
            className="form-check"
            style={{ display: "flex", alignItems: "center",marginBottom:'2%' }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              style={{ height: "30px", width: "30px", marginRight: "10px" }}
            />
            <label className="form-check-label">Public</label>
          </div>

          <div
            className="form-check"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              style={{ height: "30px", width: "30px", marginRight: "10px" }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Private
            </label>
          </div>
        </div>
        </div>

        <div style={{display:'flex',justifyContent:'space-between',marginRight:'6%'}}>
          <button className="btn btn-lg btn-primary btn-block createlobby-btn">Creat Lobby</button>
          <button className="btn btn-lg btn-secondary back-btn">Back →</button>
        </div>
      </div>
    </div>
*/
