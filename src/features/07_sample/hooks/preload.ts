import {
  fetchPokemonData,
  fetchEncounterData,
} from "../../08_sample/hooks/usePokemonData";

function wrapPromise(promise: any) {
  let status = "pending";
  let result: any;
  const suspender = promise
    .then((data: any) => {
      status = "success";
      result = data;
    })
    .catch((e: any) => {
      status = "error";
      result = e;
    });

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else {
        return result;
      }
    },
  };
}

export function fetchData(name: any) {
  const pokemon = fetchPokemonData(name);
  const encounters = fetchEncounterData(name);

  return {
    pokemon: wrapPromise(pokemon),
    encounters: wrapPromise(encounters),
  };
}
