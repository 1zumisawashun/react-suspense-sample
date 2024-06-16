import { usePokemonData } from "../08_sample/hooks/usePokemonData";
import { PokemonData } from "../08_sample/components/PokemonData";

function Parent() {
  const { data } = usePokemonData("1");
  return (
    <>
      <h1>{data.name}</h1>
      <Child />
    </>
  );
}

function Child() {
  const { data } = usePokemonData("2");
  return (
    <>
      <h1>{data.name}</h1>
      <PokemonData name="3" />
    </>
  );
}

export function Sample9() {
  return <Parent />;
}
