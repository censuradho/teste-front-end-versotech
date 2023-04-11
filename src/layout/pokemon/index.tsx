import { Box, Container, Input, Pagination, Select, Typography } from '@/components'
import { useDebounceCallback } from '@/hooks/useDebounceCallback'
import { Card } from './components'
import { usePokemon } from './hooks/usePokemon'
import * as Styles from './styles'
import { PokemonPageProps } from './types'
import { ChangeEvent, FormEvent, useState } from 'react'

export function PokemonLayout (props: PokemonPageProps) {
  const { 
    pokemons, 
    query,
    onChangeLimit,
    totalPages,
    isLoading,
    onPageChange,
    onSearch,
  } = usePokemon({
    defaultValue: props.data
  })

  const { page, search, limit } = query

  const [querySearch, setSearch] = useState(String(search || ''))

  const renderItems = pokemons?.results?.map(value => (
    <li key={value.id}>
      <Card 
        data={value}
      />
    </li>
  ))

  const getPokemonsCallback = useDebounceCallback((value: string) => onSearch(value), 300)


  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearch(value)

    getPokemonsCallback(value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    getPokemonsCallback(querySearch)

  }

  return (
    <Styles.Container>
      <Container>
        <Box fullWidth justifyContent="space-between" alignItems="flexStart">
          <Typography
            as="h1"
            size="xlg"
            color="heading"
          >Pokedex</Typography>
          <Select
            defaultValue={String(limit || 12)}
            onValueChange={onChangeLimit}
            label="Quantidade por página"
            options={[
              {
                label: '12 itens',
                value: 12,
              },
              {
                label: '24 itens',
                value: 24,
              }
            ]}
          />
        </Box>
        <Styles.Form onSubmit={handleSubmit}>
          <Input
            label="Pesquisar"
            id="search"
            placeholder="Nome, Tipo"
            value={querySearch}
            leftIcon={{
              name: 'search',
              color: 'text'
            }}
            inputMode="search"
            onChange={handleChangeSearch}
          />
        </Styles.Form>
        <Box flexDirection="column" gap={1} marginTop={2}>
          <Styles.List>{renderItems}</Styles.List>
          {renderItems?.length === 0 && (
            <Box 
              flexDirection="column" 
              gap={0.5} 
              fullWidth 
              justifyContent="center" 
              alignItems="center"
            >
              <Typography size="lg" color="heading">Ooops 😶</Typography>
              <Typography>Não há dados para exibir com este filtro</Typography>
            </Box>
          )}
        </Box>
        <Box justifyContent="flex-end" marginTop={2}>
          <Pagination 
            currentPage={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </Box>
      </Container>
    </Styles.Container>
  )
}