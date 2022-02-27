export function PokemonListService(repository) {
  this.getPokemonsIdByPage = async function (page) {
    return await repository.getPokemonsIdByPage(page);
  };
}
