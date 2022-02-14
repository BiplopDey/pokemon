export function PokemonService(repository) {
  this.repository = repository;
  this.getPokemonById = async function (id) {
    return repository.getPokemonById(id);
  };
}
