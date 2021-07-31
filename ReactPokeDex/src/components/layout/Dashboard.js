import React, { Component } from 'react';

import PokemonList from '../pokemon/PokemonList';
//import SearchBar from '../search/SearchBar';

export default class Dashboard extends Component {
  render() {
    // La search Bar esta sin terminar de codificar
    return (
      <div className="row">
        <div className="col">
          <PokemonList />
        </div>
      </div>
    );
  }
}
