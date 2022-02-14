import { useEffect, useState } from "react";
import PokemonCardList from "../components/pokemonCardList";
import useFetchData from "../hook/useFetchData";
import { PokemonListService } from "../services/pokemonCardListService";

export default function Home() {
  let [page, setPage] = useState(0);
  let [loading, pokemonIdList, error] = useFetchData(
    new PokemonListService().getPokemonsIdByPage(page)
  );

  if (loading) return <>Loading ...</>;
  if (error) return <>Error: {error.message}</>;

  return (
    <>
      <button
        onClick={() => {
          setPage(page++);
        }}
      >
        Next
      </button>
      <PokemonCardList pokemonIdList={pokemonIdList} />
    </>
  );
}
