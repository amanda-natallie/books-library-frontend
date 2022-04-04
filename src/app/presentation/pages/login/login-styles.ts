import { createStyles, makeStyles } from '@mui/styles'
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
  [theme.breakpoints.up('lg')]: {
    marginBlock: 'auto'
  },
  '& form * ': {
    marginInline: 0,
    textTransform: 'none',
    fontWeight: 600
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

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bolder',
      marginBottom: 20
    },
    inputContainer: {
      marginTop: 26
    },
    input: {
      marginTop: 6,
      '&.MuiOutlinedInput-input:-webkit-autofill,input:-webkit-autofill': {
        WebkitBoxShadow: 'inset 0 0 0px 9999px #f8f7fc'
      },
      '& .MuiInputBase-root': {
        background: '#f8f7fc'
      },
      '& .MuiOutlinedInput-root': {
        height: 48,
        borderRadius: 8,
        '& fieldset': {
          borderColor: 'rgba(206, 212, 218, 0.5)'
        },
        '&:hover fieldset': {
          borderColor: 'rgba(206, 212, 218, 0.7)'
        },
        '&.Mui-focused fieldset': {
          borderColor: 'rgba(206, 212, 218, 0.7)'
        }
      }
    },
    forgot: {
      alignSelf: 'flex-end',
      marginTop: 24,
      color: '#1E1E20',
      textDecoration: 'none'
    },
    button: {
      height: 48,
      backgroundColor: '#007297',
      color: '#fff',
      fontSize: 16,
      fontWeight: 500,
      borderRadius: 24,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#007297'
      }
    },
    icon: {
      color: '#909498'
    }
  })
)
