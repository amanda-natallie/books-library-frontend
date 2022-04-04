import { styled } from '@mui/material'

export const RootLayoutContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'inherit',
  alignItems: 'inherit',
  width: '100vw',
  height: '100vh',
  overflowY: 'auto',
  overflowX: 'hidden',
  boxSizing: 'border-box',
  background: 'linear-gradient(to bottom left, #94AEE7, #7F82D7)',
  '& svg[data-test-id="logo-illustration"]': {
    alignSelf: 'baseline',
    maxWidth: '200px',
    marginInline: 10
  },
  '& button[data-test-id="toggle-theme-button"]': {
    alignSelf: 'baseline',
    justifySelf: 'flex-end',
    position: 'absolute',
    right: '10px',
    top: '10px',
    '& span': {
      marginLeft: '0.5rem',
      fontSize: '0.8rem'
    }
  },
  '& h1,& h2, & h3, & h4, & h5, & h6': {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 700,
    opacity: 0.7
  },
  '& p, & span, & button': {
    fontFamily: "'Open Sans', sans-serif"
  }
}))
