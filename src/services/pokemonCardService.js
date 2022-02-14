import axios from "axios";
import Pokemon from "../domain/Pokemon";

export class PokemonService {
  constructor(id) {
    this.url = "https://pokeapi.co/api/v2/pokemon/1/";
  }
  async getPokemon() {
    const response = await axios.get(this.url);
    const data = response.data;

    const name = data.forms[0].name;
    const image = data.sprites.other.home.front_default;

    return new Pokemon(name, image);
  }
}
