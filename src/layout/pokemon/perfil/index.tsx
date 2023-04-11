import { Box, ButtonIcon, Container, Typography } from '@/components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as Styles from './styles'
import { PokemonPerfilProps } from './types'

export function PokemonPerfilLayout (props: PokemonPerfilProps) {
  const {
    data
  } = props

  const router = useRouter()

  const renderStats = data.stats?.map((value, index) => (
    <Box gap={3} key={index} justifyContent="space-between">
      <Typography as="strong">{value?.stat?.name}</Typography>
      <Typography color="heading">{value.base_stat}</Typography>
    </Box>
  ))

  const renderTypes = data?.types?.map((value, index) => (
    <Styles.Type key={index}>{value.type.name}</Styles.Type>
  ))

  return (
    <Styles.Container>

      <Styles.Hero>
        <Box gap={1} alignItems="center">
          <ButtonIcon 
            onClick={() => router.back()}
            label="backward"
            icon={{ name: 'backward' }}
          />
          <Typography 
            as="h1"
            size="xlg"
            color="heading"
          >{data.name}</Typography>
        </Box>
        <Image src={data?.sprites.front_default} width={200} height={200} style={{ objectFit: 'contain' }} alt="sprit" />
        <Box gap={0.5} marginTop={1}>
          {renderTypes}
        </Box>
      </Styles.Hero>
      <Styles.Main>
        <Container>
          <Styles.Content>
            <Box gap={3} justifyContent="space-between">
              <Typography as="strong">Height</Typography>
              <Typography color="heading">{data.height}</Typography>
            </Box>
            <Box gap={3} justifyContent="space-between">
              <Typography as="strong">Weight</Typography>
              <Typography color="heading">{data.weight}</Typography>
            </Box>
            {renderStats}
          </Styles.Content>
        </Container>
      </Styles.Main>
    </Styles.Container>
  )
}