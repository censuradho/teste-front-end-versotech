import { styled } from 'stitches.config'
import * as Tabs from '@radix-ui/react-tabs';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
})

export const Hero = styled('div', {
  width: '100%',
  borderBottom: '1px solid $border',
  background: '$foreground',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  gap: '1.5rem'
})

export const Main = styled('main', {
  flex: 1,
  overflow: 'auto'
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

export const TabsRoot = styled(Tabs.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const TabsList = styled(Tabs.List, {
  flexShrink: 0,
  display: 'flex',
  width: '100%',
  background: '$background',
  position: 'sticky',
  top: 0,
});

export const TabsTrigger = styled(Tabs.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  color: '$text',
  background: '$background',
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: '$heading' },
  '&[data-state="active"]': {
    color: '$primary',
    background: '$primaryLighter',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { color: '$heading' },

});

export const TabsContent = styled(Tabs.Content, {
  flexGrow: 1,
  padding: 20,
  width: '100%',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
});
