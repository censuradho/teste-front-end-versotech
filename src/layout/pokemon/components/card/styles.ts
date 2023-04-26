import { styled } from '@/stitches.config'

export const Container = styled('div', {
  padding: '1.5rem 1rem',
  background: '$foreground',
  borderRadius: '$default',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid $border'
})

export const Type = styled('strong', {
  fontWeight: 500,
  fontSize: '$xsm',
  background: '$primaryLight',
  padding: '0.5rem',
  borderRadius: '$default',
  color: '#fff'
})