import { Box, Typography } from '@/components'
import * as Styles from './styles'
import { InfoProps } from './types'

export function Info (props: InfoProps) {
  const { data } = props

  const renderStats = data.stats?.map((value, index) => (
    <Box gap={3} key={index} justifyContent="space-between">
      <Typography as="strong">{value?.stat?.name}</Typography>
      <Typography color="heading">{value.base_stat}</Typography>
    </Box>
  ))


  return (
    <Styles.Container>
      <Box gap={3} justifyContent="space-between">
        <Typography as="strong">Height</Typography>
        <Typography color="heading">{data.height}</Typography>
      </Box>
      <Box gap={3} justifyContent="space-between">
        <Typography as="strong">Weight</Typography>
        <Typography color="heading">{data.weight}</Typography>
      </Box>
      {renderStats}
    </Styles.Container>
  )
}