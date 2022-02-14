export function PokemonService(repository) {
  this.repository = repository;
  this.getPokemonById = async function (id) {
    return repository.getPokemonById(id);
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
