import axios from "axios";
import Pokemon from "../domain/Pokemon";
import { apiUrl } from "./apiUrl";

export function PokemonApiRepository() {
  this.getPokemonById = async function (id) {
    const response = await axios.get(apiUrl.pokemon + `/${id}/`);
    const data = response.data;

    const name = data.forms[0].name;
    const image = data.sprites.other.home.front_default;

    return new Pokemon(name, image);
  };

  this.getPokemonsIdByPage = async function (page) {
    const limit = 5;
    const offset = page * limit;

    const response = await axios.get(apiUrl.pokemon, {
      params: { offset: offset, limit: limit },
    });
    const data = response.data.results;
    return data.map((dt) => getIdByUrl(dt.url));
  };

  function getIdByUrl(url) {
    let re = /(?<=\/)\d+(?=\/$)/g;
    return re.exec(url)[0];
  }
}
