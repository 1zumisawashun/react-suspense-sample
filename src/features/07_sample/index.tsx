import { useEffect, useState } from "react";

import { fetchData } from "./hooks/preload";
import { fetchLocationData } from "../08_sample/hooks/usePokemonData";

const data = fetchData("pikachu");

function PokemonEncounters() {
  const encounters = data.encounters.read();
  return (
    <>
      <strong>Can be found at:</strong>
      <ul>
        {encounters.map((encounter: any) => (
          <li key={encounter.location_area.name}>
            <strong>{encounter.location_area.name}</strong>
            <LocationDetails
              url={encounter.location_area.url}
              pokemonName={"pikachu"}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

function LocationDetails({ url, pokemonName }: any) {
  const [otherPokemon, setOtherPokemon] = useState(null);

  useEffect(() => {
    fetchLocationData(url, "pikachu").then((encounters: any) => {
      setOtherPokemon(encounters.join(", "));
    });
  }, [url, pokemonName]);

  if (otherPokemon === null) {
    return <p>Loading other encounters...</p>;
  }

  return <p>Other encounters: {otherPokemon}</p>;
}

export function Sample7() {
  const pokemon = data.pokemon.read();
  return (
    <>
      <h1>{pokemon.name}</h1>;
      <PokemonEncounters />
    </>
  );
}
