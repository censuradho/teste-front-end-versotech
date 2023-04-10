import { Box, Container, Input, Typography } from '@/components'
import * as Styles from './styles'
import { PokemonPageProps } from './types'
import { Card } from './components'
import { useRouter } from 'next/router'

export function PokemonLayout (props: PokemonPageProps) {
  const {
    data
  } = props

  const { 
    query: {
      limit = 12
    }
  } = useRouter()

  const renderItems = data.results.map(value => (
    <li key={value.id}>
      <Card 
        data={value}
      />
    </li>
  ))

  return (
    <Styles.Container>
      <Container>
        <Typography
          as="h1"
          size="xlg"

        >Pokedex</Typography>
        <Styles.Form>
          <Input 
            label="Pesquisar"
            placeholder="Nome, Tipo"
          />
        </Styles.Form>
        <Box flexDirection="column" gap={1} marginTop={2}>
          <Typography size="sm" color="heading" fontWeight="800">{`${data?.count} Resultados`}</Typography>
          <Styles.List>{renderItems}</Styles.List>
        </Box>
      </Container>
    </Styles.Container>
  )
}