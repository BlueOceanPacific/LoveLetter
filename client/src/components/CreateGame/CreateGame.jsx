/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../Store/store";
import "./CreateGame.css";

// TODO: validate form inputs

export default function CreateGame() {
  const [nameTaken, setNameTaken] = useState(false);
  const [lobbyName, setLobbyName] = useState("");
  const [prize, setPrize] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const navigate = useNavigate();
  const user = useStore((state) => state.user);

  const lobbyNameChangeHandler = (ev) => setLobbyName(ev.target.value);
  const prizeChangeHandler = (ev) => setPrize(ev.target.value);
  const isPublicChangeHandler = (ev) => setIsPublic(ev.target.value);

  const leaveLoobbyHandler = () => {
    navigate('/');
  }

  const createLobbyHandler = (event) => {
    event.preventDefault();
    axios
      .post("/games", {
        name: lobbyName,
        privacy: isPublic ? "public" : "private",
        prize,
        user,
      })
      .then((res) => {
        // console.log(res.data);
        navigate(`/play/lobby/${res.data}`);
      })
      .catch((err) => {
        if (err.response.status === 500) {
          // show error message
          setNameTaken(true);
          // console.log("The room name has been taken!");
        }
      });
  };

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
              placeholder="Lobby Name"
              onChange={lobbyNameChangeHandler}
            />
            {nameTaken ? (
              <span style={{ color: "red" }}>
                This name is already taken, please select a different name
              </span>
            ) : null}
          </div>

          <div className="col">
            <select
              className="form-select form-select-lg"
              onChange={prizeChangeHandler}
            >
              <option defaultValue>Who will you playing for?</option>
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
            value={true}
            id="defaultCheck1"
            defaultChecked
            onChange={isPublicChangeHandler}
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
            value={false}
            id="defaultCheck1"
            onChange={isPublicChangeHandler}
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
              onClick={createLobbyHandler}
            >
              Create Lobby
            </button>
          </div>
          <div className="col back-btn-col">
            <button
              className="btn btn-primary btn-lg  back-btn mt-5"
              type="button"
              onClick={leaveLoobbyHandler}
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
