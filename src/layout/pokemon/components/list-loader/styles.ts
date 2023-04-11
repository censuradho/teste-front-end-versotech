import { styled, keyframes } from 'stitches.config'

const skeleton = keyframes({
  '0%': {
    background: '$foreground'
  },
  '100%': {
    background: '$background'
  }
})

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',

  '@table-min': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  svg: {
    width: '100%'
  }
})

export const Card = styled('div', {
  animation: `${skeleton} 1s linear infinite alternate`,
  padding: '1.5rem 1rem',
  width: '100%',
  height: '250px'
})