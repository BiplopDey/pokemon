import axios from "axios";
import { apiUrl } from "./apiUrl";

export function PokemonListService() {
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
    return url.slice(-2, -1);
  }
}
// export class PokemonListService {
//   static async getPokemonsIdByPage(page) {
//     const limit = 5;
//     const offset = page * limit;

//     const response = await axios.get(apiUrl.pokemon, {
//       params: { offset: offset, limit: limit },
//     });
//     const data = response.data.results;
//     return data.map((dt) => dt.url.slice(-2, -1));
//   }
//   getIdByUrl(url) {
//     return url.slice(-2, -1);
//   }
// }
