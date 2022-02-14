import { useEffect, useState } from "react";
import { PokemonService } from "../services/pokemonCardService";

export default function PokemonCard({ id }) {
  const service = new PokemonService(id);
  let [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    service.getPokemon().then((pk) => {
      pokemon = pk;
      setPokemon(pk);
      console.log(pokemon);
      setLoading(false);
    });
  }, []);

  if (loading) return <>Loading...</>;
  if (!pokemon) return <h1>Pokemon not found</h1>;

  return (
    <>
      {/* <img src={pokemon.image} alt="Italian Trulli" /> */}
      <div>Name:{pokemon.name}</div>
    </>
  );
}
