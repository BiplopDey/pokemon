export function PokemonListService(repository) {
  this.repository = repository;
  this.getPokemonsIdByPage = async function (page) {
    return await repository.getPokemonsIdByPage(page);
  };
}
