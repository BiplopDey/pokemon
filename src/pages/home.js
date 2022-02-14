import PokemonCard from "../components/pokemonCard";
import PokemonCardList from "../components/pokemonCardList";

export default function Home() {
  return (
    <>
      {/* <PokemonCard id={1} /> */}
      <PokemonCardList pokemonIdList={[1, 2, 4, 5]} />
    </>
  );
}
