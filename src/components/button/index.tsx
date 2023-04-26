import { Icon } from '@/components'

import * as Styles from './styles'

import { ButtonProps } from './types'
import { PropsWithChildren } from 'react'

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { 
    children, 
    icon, 
    loading, 
    disabled, 
    type,  
    ...otherProps 
  } = props

  return (
    <Styles.Button
      type={type}
      disabled={disabled || loading}
      {...otherProps}
    >
      {icon && <Icon {...icon} />}
      {children}
    </Styles.Button>
  )
}