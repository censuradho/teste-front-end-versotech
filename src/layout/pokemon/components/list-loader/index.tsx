import * as Styles from './styles'
import { ListLoaderProps } from './types'

export function ListLoader ({ loading }: ListLoaderProps) {
  
  if (!loading) return null

  return (
    <Styles.Container>
      <Styles.Card></Styles.Card>
      <Styles.Card></Styles.Card>
      <Styles.Card></Styles.Card>
      <Styles.Card></Styles.Card>
      <Styles.Card></Styles.Card>
      <Styles.Card></Styles.Card>
    </Styles.Container>
  )
}

