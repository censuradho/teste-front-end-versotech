import { forwardRef } from 'react'
import { Icon } from '../icon'
import * as Styles from './styles'
import { ButtonIconProps } from './types'

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>((props, ref) => {
  const {
    icon,
    label,
    ...otherProps
  } = props

  return (
    <Styles.Button aria-label={label} {...otherProps}>
      <Icon {...icon}  />
    </Styles.Button>
  )
}) 