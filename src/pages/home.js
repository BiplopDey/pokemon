import { useEffect, useState } from "react";
import PokemonCardList from "../components/pokemonCardList";
import useFetchData from "../hook/useFetchData";
import useFetchPage from "../hook/useFetchPage";
import { PokemonApiRepository } from "../infrastructure/pokemonApiRepository";
import { PokemonListService } from "../services/pokemonCardListService";

export default function Home() {
  const service = new PokemonListService(new PokemonApiRepository());
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pokemonIdList, setPokemonIdList] = useState([]);

  useEffect(() => {
    setLoading(true);
    service
      .getPokemonsIdByPage(page)
      .then((data) => setPokemonIdList([...data]))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [page]);

  if (loading) return <>Loading ...</>;
  if (error) return <>Error: {error.message}</>;

  return (
    <>
      <button
        disabled={page <= 0}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
      <PokemonCardList pokemonIdList={pokemonIdList} />
    </>
  );
}
