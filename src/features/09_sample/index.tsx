import { usePokemonData } from "@/functions/helpers/fetchPokemonData";

/**
 * ネストさせるとウォーターフォール問題が発生する
 */
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

function PokemonData({ name }: { name: string }) {
  const { data } = usePokemonData(name);

  return <h1>{data.name}</h1>;
}
