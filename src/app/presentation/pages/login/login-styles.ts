import { Grid, styled } from '@mui/material'

export const LoginContainer = styled('div')(() => ({
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: 'relative',
  minHeight: '70vh',
  overflow: 'hidden'
}))

export const GridContainer = styled(Grid)(({ theme }) => ({
  zIndex: 10,
  marginBlock: 20,
  marginInline: 40,
  '& *:not(button, svg)': {
    marginBottom: 10,
    marginLeft: 10
  },
  [theme.breakpoints.up('lg')]: {
    marginBlock: 'auto'
  }
}))

export const IllustrationWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  right: '-35%',
  bottom: -150,
  zIndex: 0,
  [theme.breakpoints.down('sm')]: {
    width: '150%',
    right: -80,
    bottom: -50
  },
  [theme.breakpoints.down('md')]: {
    right: -110,
    bottom: -80
  },
  '& > svg[data-test-id="login-illustration"]': {
    width: '100%',
    opacity: 0.7
  }
}))
