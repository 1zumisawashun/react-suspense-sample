import { usePokemonData } from "@/functions/helpers/fetchPokemonData";

/**
 * フェッチが並行で処理される
 * @see https://zenn.dev/mylifeasjosh/articles/d12e231adbde15
 */
function PokemonData({ name }: { name: string }) {
  const { data } = usePokemonData(name);

  return <h1>{data.name}</h1>;
}

export default function Page() {
  return (
    <>
      <PokemonData name="1" />
      <PokemonData name="2" />
      <PokemonData name="3" />
    </>
  );
}
