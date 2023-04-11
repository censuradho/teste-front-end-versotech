import { Pokemon, PokemonFindManyResponse } from "@/services/pokeapi/pokemon/types";

export interface PokemonState {
  current?: Pokemon | null
  pokemons?: PokemonFindManyResponse<Pokemon> | null
}