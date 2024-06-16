import { usePokemonData } from "@/functions/helpers/fetchPokemonData";

/**
 * ネストさせると、いつも通りウォーターフォール問題が発生する
 * @see https://zenn.dev/mylifeasjosh/articles/d12e231adbde15
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

function PokemonData({ name }: { name: string }) {
  const { data } = usePokemonData(name);

  return <h1>{data.name}</h1>;
}

export default function Page() {
  return <Parent />;
}
