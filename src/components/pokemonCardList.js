import PokemonCard from "./pokemonCard";

export default function PokemonCardList({ pokemonIdList }) {
  return (
    <>
      <h1>Pokemons</h1>
      <ul>
        {pokemonIdList.map((id) => {
          return (
            <li key={id}>
              <PokemonCard id={id} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
