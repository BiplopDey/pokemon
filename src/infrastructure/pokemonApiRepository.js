import axios from "axios";
import { apiUrl } from "../services/apiUrl";

export function PokemonApiRepository() {
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
