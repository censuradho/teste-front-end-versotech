import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PokemonState } from "./types";
import { Pokemon, PokemonFindManyResponse } from "@/services/pokeapi/pokemon/types";

const initialState: PokemonState = {
  pokemons: null
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<PokemonFindManyResponse<Pokemon>>) => {
      state.pokemons = action.payload
    }
  }
})

export const { setPokemons } = pokemonSlice.actions

export const pokemonReducer =  pokemonSlice.reducer