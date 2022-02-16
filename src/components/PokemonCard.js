import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { name, sprites, hp } = pokemon;
  const { front, back } = sprites;
  const [clicked, setClicked] = useState(false);

  function handleCardClick(e) {
    setClicked(!clicked);
  }

  return (
    <Card>
      <div>
        <div onClick={handleCardClick} className="image">
          <img src={clicked ? back : front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
