import { Box, Typography } from '@/components'
import * as Styles from './styles'
import { CardProps } from './types'
import Image from 'next/image'
import Link from 'next/link'
import { resolvePath } from '@/utils/helpers'
import { paths } from '@/constants/paths'

export function Card (props: CardProps) {
  const { data } = props

  const renderTypes = data?.types?.map((value, index) => (
    <Styles.Type key={index}>{value.type.name}</Styles.Type>
  ))

  return (
    <Link href={resolvePath(paths.perfil, { id: data.id })}>
      <Styles.Container>
        <Typography 
          size="md"
          fontWeight="600"
          color="heading"
        >
          {data?.name}
        </Typography>
        <Image 
          src={data?.sprites?.front_default}  
          alt="sprit" 
          width={96} 
          height={95} 
          style={{ objectFit: 'contain' }}
        />
        <Box gap={0.5} flexDirection="row" fullWidth>
          {renderTypes}
        </Box>
      </Styles.Container>
    </Link>
  )
}