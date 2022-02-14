import { useEffect, useState } from "react";
import useFetchData from "../hook/useFetchData";
import { PokemonService } from "../services/pokemonCardService";

export default function PokemonCard({ id }) {
  const service = new PokemonService(id);
  const [loading, pokemon, error] = useFetchData(service.getPokemon());

  if (loading) return <>Loading...</>;
  if (error) return <h1>An error ocurred:{error.message}</h1>;
  if (!pokemon) return <h1>Pokemon not found</h1>;

  return (
    <>
      <img src={pokemon.image} alt={pokemon.name} />
      <div>Name: {pokemon.name}</div>
    </>
  );
}
