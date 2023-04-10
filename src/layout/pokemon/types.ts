import { Pokemon, PokemonFindManyResponse } from "@/services/pokeapi/pokemon/types";

export interface PokemonPageProps {
  data: PokemonFindManyResponse<Pokemon>
}