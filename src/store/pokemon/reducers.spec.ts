import { Pokemon, PokemonFindManyResponse } from "@/services/pokeapi/pokemon/types";
import {
  initialState,
  pokemonReducer as reducer,
  setPokemons
} from './slice'
import { PokemonState } from './types'

describe('pokemon reducers', () => {
  it ('should return initial state', () => {
    expect(
      reducer(
        undefined,
        { type: undefined }
      )
    ).toEqual(initialState)
  })

  it ('should handle the pokemons being added an empty list', () => {
    const prevState: PokemonState =  {}
    const payload: PokemonFindManyResponse<Pokemon> = {
      count: 0,
      results: []
    }

    const pokemons: PokemonState = {
      pokemons: payload
    }

    expect(
      reducer(
        prevState,
        setPokemons(payload)
      )
    ).toEqual(pokemons)
  })
})