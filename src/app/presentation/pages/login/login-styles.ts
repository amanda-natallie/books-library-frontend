import { Grid, styled, Theme } from '@mui/material'

export const LoginContainer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: 'relative',
  minHeight: '80vh',
  overflow: 'hidden'
}))

export const GridContainer = styled(Grid)(() => ({
  marginBlock: 20,
  marginInline: 40,
  '& *:not(button, svg)': {
    marginBottom: 10,
    marginLeft: 10
  }
}))

export const IllustrationWrapper = styled('div')(() => ({
  width: '100%',
  position: 'absolute',
  right: -210,
  bottom: -150,
  zIndex: 0,
  '& > svg[data-test-id="login-illustration"]': {
    width: '100%',
    opacity: 0.7
  }
}))
