import React from "react";
import useStore from "../../Store/store";

import Card from "../Cards/Card";
import "./DiscardPile.scss";

function DiscardPile() {
  const game = useStore(state => state.game);

  const cards = game.currentRound.discardPile.map((card) => <Card currentCard={ card.image }/>)

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
