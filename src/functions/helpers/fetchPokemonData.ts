import { wrapPromise } from "@/functions/helpers/wrapPromise";
import { useSuspenseQuery } from "@tanstack/react-query";

const API = {
  pokemon: (name: string) => `https://pokeapi.co/api/v2/pokemon/${name}`,
  encounter: (name: string) =>
    `https://pokeapi.co/api/v2/pokemon/${name}/encounters`,
};

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const getRandomDelay = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export async function fetchPokemonData(name: string) {
  console.log("start fetch " + name + Date.now());
  const response = await fetch(API.pokemon(name));
  await sleep(getRandomDelay(250, 900));
  if (!response.ok) throw new Error("fetch failed");
  return await response.json();
}

export async function fetchEncounterData(name: string) {
  console.log("start fetch " + name + Date.now());
  const response = await fetch(API.encounter(name));
  await sleep(getRandomDelay(250, 900));
  if (!response.ok) throw new Error("fetch failed");
  return await response.json();
}

export async function fetchLocationData(url: any, pokemonName: any) {
  const response = await fetch(url);
  if (!response.ok) throw new Error("fetch failed");
  const data = await response.json();

  return data.pokemon_encounters
    .filter((e: any) => e.pokemon.name !== pokemonName)
    .map((e: any) => e.pokemon.name);
}

/** @see https://zenn.dev/mylifeasjosh/articles/d12e231adbde15 */
export function usePokemonData(name: string) {
  return useSuspenseQuery({
    queryKey: ["pokemonData", name],
    queryFn: () => fetchPokemonData(name),
  });
}

export function fetchData(name: any) {
  const pokemon = fetchPokemonData(name);
  const encounters = fetchEncounterData(name);

  return {
    pokemon: wrapPromise(pokemon),
    encounters: wrapPromise(encounters),
  };
}
