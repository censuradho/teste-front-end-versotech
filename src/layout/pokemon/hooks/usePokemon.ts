import { paths } from "@/constants/paths";
import { pokemonService } from "@/services/pokeapi/pokemon";
import { PokemonFindManyQuery } from "@/services/pokeapi/pokemon/types";
import { RootState } from "@/store";
import { setPokemons } from "@/store/pokemon/slice";
import { PokemonState } from "@/store/pokemon/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

interface Params {
  defaultValue?: PokemonState['pokemons']
}

export function usePokemon (params?: Params) {
  const { 
    query: {
      limit = 12,
      page = 1,
      search
    },
    query,
    ...router
  } = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const pokemon = useSelector((state: RootState) => state.pokemon)
  const dispatch = useDispatch()

  const _page = Number(page)
  const _limit = Number(limit)
  const _totalPages = (pokemon.pokemons?.count || 0) / _limit
  const _search = search ? String(search) : undefined

  const isLike = (value: string, compare: string) => {
    return value.indexOf(compare) > -1
  }

  const getPokemons = async (params?: PokemonFindManyQuery) => {
    try {
      setIsLoading(true)

      const { search, page = 0, limit = 0 } = params || {}
  
      if (page >= limit || page <= 0) return;
  
      const response = await pokemonService.findMany({
        limit: _limit,
        page: _page,
        ...params
      })
      dispatch(setPokemons(response))
  
  
      if (search) {
        const results = response?.results || []
  
        const filtered = results?.filter(value => 
          isLike(value.name, search)
          || value.types?.filter(value => isLike(value.type.name, search)).length > 0
        )
  
        dispatch(setPokemons({
          count: 0,
          ...(pokemon?.pokemons || {}),
          results: filtered
        }))
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleChangeLimit = (limit: string | number) => {
    router.push({
      pathname: paths.home,
      query: {
        ...query,
        limit
      }
    })
  }

  const handlePageChange = (page: number) => {
    router.push({
      pathname: paths.home,
      query: {
        ...query,
        page
      }
    })
  }

  const handleSearch = (value: string) => {
    if (!value) return router.push({
      pathname: router.pathname,
      query: {
        ...query,
        search: undefined
      },
    })
  
    router.push({
      pathname: paths.home,
      query: {
        ...query,
        search: value
      }
    })
  }

  const handleResetFilters = () => {
    router.push(router.pathname)
  }

  useEffect(() => {
    if (!query) return

    getPokemons({
      limit: _limit,
      search: _search,
      page: _page,
    })
  }, [_limit, query])

  useEffect(() => {
    if (params?.defaultValue) {
      dispatch(setPokemons(params?.defaultValue))
    }
  }, [])

  return {
    ...pokemon,
    getPokemons,
    totalPages: _totalPages,
    isLoading,
    onChangeLimit: handleChangeLimit,
    onPageChange: handlePageChange,
    onSearch: handleSearch,
    onResetFilters: handleResetFilters,
    query: {
      search,
      page: _page,
      limit: _limit
    }
  }

}