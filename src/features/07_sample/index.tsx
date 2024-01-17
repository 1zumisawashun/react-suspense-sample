import { Suspense, useEffect, useState } from "react";

import { fetchData, fetchLocation } from "./hooks/api";

const data = fetchData("pikachu");

function PokemonPage() {
  console.log("rerender");
  const pokemon = data.pokemon.read();

  return (
    <>
      <h1>{pokemon.name}</h1>
    </>
  );
}

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
    fetchLocation(url, "pikachu").then((encounters: any) => {
      setOtherPokemon(encounters.join(", "));
    });
  }, [url, pokemonName]);

  if (otherPokemon === null) {
    return <p>Loading other encounters...</p>;
  }

  return <p>Other encounters: {otherPokemon}</p>;
}

export function Sample7() {
  return (
    <>
      <Suspense fallback={<h1>Loading pokemon...</h1>}>
        <PokemonPage />
      </Suspense>
      <Suspense fallback={<p>Loading encounters...</p>}>
        <PokemonEncounters />
      </Suspense>
    </>
  );
}
