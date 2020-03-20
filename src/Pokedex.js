import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const props = this.props;
    let title;
    if (props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total Exerpience: {props.exp}</h4>
        <div className="Pokedex-cards">
          {props.pokemon.map(poke => (
            <Pokecard id={poke.id} name={poke.name} type={poke.type} exp={poke.base_experience} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
