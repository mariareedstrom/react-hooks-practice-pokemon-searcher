import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const newPokemonObj = { name: "", hp: "", sprites: { front: "", back: "" } };

function PokemonForm({ setPokemon }) {
  const [newPokemon, setNewPokemon] = useState(newPokemonObj);

  function handleChange(e) {
    setNewPokemon((current) => {
      const name = e.target.name;
      if (name === "front" || name === "back") {
        return {
          ...current,
          sprites: { ...current.sprites, [name]: e.target.value },
        };
      }

      return {
        ...current,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((resp) => resp.json())
      .then((data) =>
        setPokemon((currentPokemons) => [...currentPokemons, data])
      );
    setNewPokemon(newPokemonObj);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={newPokemon.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={newPokemon.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={newPokemon.sprites.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={newPokemon.sprites.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
