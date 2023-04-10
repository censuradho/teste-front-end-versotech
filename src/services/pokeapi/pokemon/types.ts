interface Ability {
  is_hidden: boolean
  ability: {
    name: string
    url: string
  }
}

interface Specie {
  name: string
}

interface Stat {
  base_stat: number
  stat: {
    name: string
  }
}

interface Type {
  type: {
    name: string
  }
}

export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  abilities: Ability[]
  species: Specie
  sprites: {
    back_default: string
    front_default: string
  }
  stats: Stat[]
  types: Type[]
}

export interface PokemonFindManyResponse<T> {
  count: number
  results: Array<T>
}

export interface PokemonFindManyQuery {
  limit?: number
}