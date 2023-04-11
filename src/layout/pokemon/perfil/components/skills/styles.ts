import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})


export const List = styled('ul', {
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
  listStyle: 'none',
  alignItems: 'flex-start',

  li: {
    background: '$text',
    color: '$background',
    padding: '0.5rem',
    borderRadius: '$default',
    fontWeight: 500,
    fontSize: '$xsm'
  }
})