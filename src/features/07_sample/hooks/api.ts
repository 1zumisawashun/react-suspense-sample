export async function fetchPokemon(name: any) {
  console.log(`fetch ${name}...`);

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) {
      console.error("Error fetching location", res.status);
    }
    return await res.json();
  } catch (e) {
    console.error("Error fetching location", e);
  }
}

export async function fetchEncounters(name: any) {
  console.log("fetch encounters...");

  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}/encounters`
    );
    if (!res.ok) {
      console.error("Error fetching location", res.status);
    }
    return await res.json();
  } catch (e) {
    console.error("Error fetching location", e);
  }
}

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
  const pokemon = fetchPokemon(name);
  const encounters = fetchEncounters(name);

  return {
    pokemon: wrapPromise(pokemon),
    encounters: wrapPromise(encounters),
  };
}

export async function fetchLocation(url: any, pokemonName: any) {
  console.log("fetch location...");

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Error fetching location", res.status);
    }
    const data = await res.json();
    const otherEncounters = data.pokemon_encounters
      .filter((e: any) => e.pokemon.name !== pokemonName)
      .map((e: any) => e.pokemon.name);
    return otherEncounters;
  } catch (e) {
    console.error("Error fetching location", e);
  }
}
