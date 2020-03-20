import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API_IMG = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// if number is less than 999 then add two 0's to the front of the number and return the last 3 digits on the number.
// e.g. number 12 will become 0012 then slice the last 3 digits which will be 012
let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const props = this.props;
    let imgSrc = `${POKE_API_IMG}${padToThree(props.id)}.png`;
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
