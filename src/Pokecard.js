import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API_IMG = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
  render() {
    const props = this.props;
    let imgSrc = `${POKE_API_IMG}${props.id}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{props.name}</h1>
        <img src={imgSrc} alt="{props.name}" />
        <div className="Pokecard-data">Type: {props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}
export default Pokecard;
