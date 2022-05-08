import React from 'react';

function Rules() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#rules-modal"
      >
        Rules
      </button>
      <div
        className="modal fade"
        id="rules-modal"
        tabIndex="-1"
        aria-labelledby="rules-modal-label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="rules-modal-label">
                Rules
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              <ul>
                <b>Love Letter Cards</b>
                <li>
                  (1)Prince/Princess/My Liege - Value 8 - If you discard this
                  card for any reason, you are out of the round.{' '}
                </li>
                <li>
                  (1)Minister - Value 7 - If the value of your hand is 12 or
                  higher, you are out of the round (this effect is instant. If
                  you draw a card of value 5 or higher while holding the
                  Minister, immediately discard both cards and you are out of
                  the round)
                </li>
                <li>
                  (1)General - Value 6 - Change hands with target player (must
                  target someone other than self)
                </li>
                <li>
                  (2)Wizard - Value 5 - Target player discards hand, draws new
                  card (can target self)
                </li>
                <li>
                  (2)Priestess - Value 4 - You cannot be targeted by other
                  players until your next turn
                </li>
                <li>
                  (2)Knight - Value 3 - Compare hands with target player. Lowest
                  value is out of the round.
                </li>
                <li>(2)Clown - Value 2 - Look at target player’s hand </li>
                <li>
                  (5)Soldier - Value 1 - Choose a card type other than
                  “Soldier”. If target player has that card, they are out of the
                  round (do not show card if it doesn’t match)
                </li>
              </ul>
              <ol>
                <b>How to Play:</b>
                <li>Shuffle all 16 cards.</li>
                <li>
                  Place the top card face down in the center of the table. This
                  card will NOT be used this round.
                </li>
                <li>Deal one card to each player.</li>
                <li>
                  First player draws a single card from the remaining deck.
                </li>
                <li>
                  Player chooses one of the two cards to discard, playing the
                  effect of the discarded card.
                </li>
                <li>Play continues to the next player.</li>
                <li>
                  The round continues until only one player remains or the deck
                  runs out of cards.
                </li>
                <li>
                  If only one player remains, they get a point. If there is more
                  than one player, the player with the highest valued card gets
                  a point.
                </li>
                <li>
                  Reshuffle the entire deck (including the removed card) and
                  start again until a player has won 4 times.
                </li>
                <br />
                <b>Notes:</b>
                Cards are played face up so everyone can see what cards have
                been played. (except the removed card at the start of each
                round. This is face down so no one knows what card is out of
                play) When you are out of the round for any reason, discard all
                cards face up. You MUST take the action on the discard, if
                possible. Only the Wizard can target themselves.
              </ol>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rules;
