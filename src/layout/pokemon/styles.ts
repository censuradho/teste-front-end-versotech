import { styled } from 'stitches.config'

export const Container = styled('div', {
  paddingTop: '2rem',
  padding: '1rem'
})

export const List = styled('ul', {
  listStyle: 'none',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',

  '@table-min': {
    gridTemplateColumns: 'repeat(3, 1fr)',

  }
})

export const Form = styled('form', {
  width: '100%',
  margin: '1.3rem 0'
})