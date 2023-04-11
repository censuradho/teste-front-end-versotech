import { Pokemon, PokemonFindManyResponse } from "@/services/pokeapi/pokemon/types";

export interface PokemonState {
  pokemons?: PokemonFindManyResponse<Pokemon> | null
}