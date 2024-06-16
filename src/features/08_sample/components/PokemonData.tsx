import { usePokemonData } from "../hooks/usePokemonData";

/** @see https://zenn.dev/mylifeasjosh/articles/d12e231adbde15 */

export function PokemonData({ name }: { name: string }) {
  const { data } = usePokemonData(name);

  return <h1>{data.name}</h1>;
}
