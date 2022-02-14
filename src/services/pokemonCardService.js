import axios from "axios";
import Pokemon from "../domain/Pokemon";
import { apiUrl } from "./apiUrl";

export function PokemonService(id) {
  this.url = apiUrl.pokemon + `/${id}/`;

  this.getPokemon = async function () {
    const response = await axios.get(this.url); //remove this. keyword
    const data = response.data;

    const name = data.forms[0].name;
    const image = data.sprites.other.home.front_default;

    return new Pokemon(name, image);
  };
}
// export class PokemonService {
//   constructor(id) {
//     this.url = apiUrl.pokemon + `/${id}/`;
//   }
//   async getPokemon() {
//     const response = await axios.get(this.url);
//     const data = response.data;

//     const name = data.forms[0].name;
//     const image = data.sprites.other.home.front_default;

//     return new Pokemon(name, image);
//   }
