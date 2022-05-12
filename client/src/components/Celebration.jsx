import React, { useState, useRef, useEffect } from "react";
import Confetti from "react-dom-confetti";

function Celebration() {
  const [ height, setHeight ] = useState(null);
  const [ width, setWidth ] = useState(null);
  const [ show, setShow ] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, [])

  const handleShow = toggle => {
    setShow(toggle);
  }

  return (
    <div className="Celebration">
      <div
      onMouseEnter = {() => handleShow(true)}
      onMouseLeave = {() => handleShow(false)}
      className="confetti-wrap"
      ref={confettiRef}>
        <p> yada yada</p>
        <Confetti
        recycle={show}
        numberOfPieces={100}
        width={width}
        height={height}
        />
      </div>
    </div>
  );
}

export default Celebration;