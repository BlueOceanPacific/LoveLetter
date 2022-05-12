import React from "react";
import useStore from "../../Store/store";

import Card from "../Cards/Card";
import "./DiscardPile.scss";

function DiscardPile() {
  const game = useStore(state => state.game);

  const map = {
    '1': '/images/cards/Soldier_Card.png',
    '2': '/images/cards/Clown_Card.png',
    '3': '/images/cards/Knight_Card.png',
    '4': '/images/cards/Priestess_Card.png',
    '5': '/images/cards/Wizard_Card.png',
    '6': '/images/cards/General_Card.png',
    '7': '/images/cards/Minister_Card.png',
    '8': '/images/cards/MyLiege_Card.png'
  }


  const cards = game.currentRound.discardPile.map((card) => <Card key={`${card.value} ${game.currentRound.turnNumber}`} currentCard={ map[card.value] }/>)

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
