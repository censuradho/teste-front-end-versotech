import * as Styles from './styles'
import { SkillsProps } from './types'

export function Skills (props: SkillsProps) {
  const { data } = props

  const renderSkills = data?.abilities?.map((value, index) => (
    <li key={index}>
      {value.ability.name}
    </li>
  ))

  return (
    <Styles.Container>
      <Styles.List>
        {renderSkills}
      </Styles.List>
    </Styles.Container>
  )
}