
import { Icon } from '@/components'
import { VariantProps } from '@stitches/react'
import {
  ButtonHTMLAttributes,
  ComponentProps
} from 'react'
import { Button } from './styles'

type RootButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'onFocus' | 'id' | 'type' | 'disabled' | 'form'
>;

export interface ButtonProps
  extends VariantProps<typeof Button>,
    RootButtonProps {
  icon?: ComponentProps<typeof Icon>;
  loading?: boolean;
}