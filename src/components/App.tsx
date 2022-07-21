import * as React from "react";
import './App.css';

export const App = () => {

  const [pokeData, setPokeData] = React.useState([]);

  React.useEffect(() => {

    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => response.json())
      .then((allpokemon) => {
        console.log(allpokemon);
        setPokeData(allpokemon.results);
    })

  }, []);

  return (
    <div>
      <h1 className="heading">
        Hey, Hi! Welcome to Pokemons' World!
      </h1>

      <div className="table-container">
        {
          pokeData.map((pokemon, index) => {
            return (
              <div key={`poke-${index}`} className="p-row">
                <div>{pokemon.name}</div>
                <div>{pokemon.url}</div>
                <div><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} /></div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
};