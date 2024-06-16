import { usePokemonData } from "@/functions/helpers/fetchPokemonData";

// フェッチが並行で処理される
export function Sample8() {
  return (
    <>
      <PokemonData name="1" />
      <PokemonData name="2" />
      <PokemonData name="3" />
    </>
  );
}

function PokemonData({ name }: { name: string }) {
  const { data } = usePokemonData(name);

  return <h1>{data.name}</h1>;
}
