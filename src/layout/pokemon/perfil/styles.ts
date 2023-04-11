import { styled } from 'stitches.config'

export const Container = styled('div', {})

export const Hero = styled('div', {
  width: '100%',
  borderBottom: '1px solid $border',
  background: '$foreground',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
})

export const Main = styled('main', {

})



export const Content = styled('div', {
  padding: '3rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})


export const Type = styled('strong', {
  fontWeight: 500,
  fontSize: '$xsm',
  background: '$primaryLight',
  padding: '0.5rem',
  borderRadius: '$default',
  color: '#fff'
})