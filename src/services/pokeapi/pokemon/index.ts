import { pokeApi } from ".."
import { PokemonFindManyResponse, Pokemon, PokemonFindManyQuery } from "./types"
import axios from 'axios'

function getIdFromUrl (path: string) {
  const id = path.split('pokemon')[1].replace(/\//g, '')
  return id
}

function findById (id: string) {
  return pokeApi.get<Pokemon>(`/pokemon/${id}`)
}


async function findMany (params?: PokemonFindManyQuery): Promise<PokemonFindManyResponse<Pokemon>> {
  const { data } = await pokeApi.get<PokemonFindManyResponse<{ url: string }>>(`/pokemon`, {
    params: {
      limit: params?.limit || 12
    }
  })

  const endpoints = data.results.map(value => value.url)

  const allResults = await axios.all(
    endpoints.map(endpoint => findById(getIdFromUrl(endpoint)))
  )

    return {
      ...data,
      results: allResults.map(value => value.data)
    }
  }

 export const pokemonService = {
  findMany,
  findById
}