import React from "react";
import Clown from "../Cards/Clown";
import Priestess from "../Cards/Minister";
import PlayingCard from "../Cards/PlayingCard";
import Soldier from "../Cards/Soldier";
import Wizard from "../Cards/Wizard";
import Knight from "../Cards/Knight";
import Liege from "../Cards/Liege";
import General from "../Cards/General";
import Minister from "../Cards/Minister";

import Card from "../Cards/Card";
import "./DiscardPile.scss";

function DiscardPile({ game }) {
  const { discardPile } = game.currentRound;
  console.log(discardPile);
  let cards = discardPile.map((card) => <Card currentCard={ card.image }/>)
  cards.push(
    <Card currentCard={'/images/cards/Minister_Card.png'}/>
  )
  cards.push(
    <Card currentCard={'/images/cards/Minister_Card.png'}/>
  )
  cards.push(
    <Card currentCard={'/images/cards/Minister_Card.png'}/>
  )
  cards.push(
    <Card currentCard={'/images/cards/Minister_Card.png'}/>
  )

  return (
    <div className="discard-pile">
      <div className="discard-header">Discard Pile</div>
      <ul className="list-group list-group-horizontal">
        { cards }
        {/* {discardPile.map((card) => <Card currentCard={ card.image }/>)} */}
      </ul>
    </div>
  );
}

export default DiscardPile;
