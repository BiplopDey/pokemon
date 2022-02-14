import { useEffect } from "react";
import useFetchData from "./useFetchData";

export default function useFetchPage(pageInput, fetchFunction) {
  let [page, setPage] = useEffect(pageInput);
  let [loading, pokemonList, error] = useFetchData(fetchFunction(page));
}
