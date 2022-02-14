import axios from "axios";
import { PokemonApiRepository } from "../infrastructure/pokemonApiRepository";
import { apiUrl } from "./apiUrl";

export function PokemonListService(repository) {
  this.repository = repository;
  this.getPokemonsIdByPage = async function (page) {
    return await repository.getPokemonsIdByPage(page);
  };
}

// export function PokemonListService() {
//   this.getPokemonsIdByPage = async function (page) {
//     const limit = 5;
//     const offset = page * limit;

//     const response = await axios.get(apiUrl.pokemon, {
//       params: { offset: offset, limit: limit },
//     });
//     const data = response.data.results;
//     return data.map((dt) => getIdByUrl(dt.url));
//   };

//   function getIdByUrl(url) {
//     let re = /(?<=\/)\d+(?=\/$)/g;
//     return re.exec(url)[0];
//   }
// }
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
