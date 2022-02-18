import PokemonCard from "./pokemonCard";

export default function PokemonCardList({ pokemonIdList }) {
  return (
    <>
      <h1>Pokemons</h1>
      <ul>
        {pokemonIdList.map((id) => {
          return <PokemonCard id={id} key={id} />;
        })}
      </ul>
    </>
  );
}
