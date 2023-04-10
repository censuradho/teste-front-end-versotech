import { Box, Typography } from '@/components'
import * as Styles from './styles'
import { CardProps } from './types'
import Image from 'next/image'

export function Card (props: CardProps) {
  const { data } = props

  const renderTypes = data.types?.map((value, index) => (
    <Styles.Type key={index}>{value.type.name}</Styles.Type>
  ))

  return (
    <Styles.Container>

      <Typography 
        size="md"
        fontWeight="600"
        color="heading"
      >
        {data?.name}
      </Typography>
      <Styles.Figure>
        <Image src={data.sprites.front_default}  alt="sprit" fill />
      </Styles.Figure>
      <Box gap={0.5} flexDirection="row" fullWidth>
        {renderTypes}
      </Box>
    </Styles.Container>
  )
}