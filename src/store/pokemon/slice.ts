import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PokemonState } from "./types";
import { Pokemon, PokemonFindManyResponse } from "@/services/pokeapi/pokemon/types";

const initialState: PokemonState = {
  current: null,
  pokemons: null
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<Pokemon>) => {
      state.current = action.payload
    },
    setPokemons: (state, action: PayloadAction<PokemonFindManyResponse<Pokemon>>) => {
      state.pokemons = action.payload
    }
  }
})

export const { setCurrent, setPokemons } = pokemonSlice.actions

export const pokemonReducer =  pokemonSlice.reducer