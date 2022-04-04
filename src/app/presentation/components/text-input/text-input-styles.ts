import { makeStyles, createStyles } from '@mui/styles'
import { Theme } from '@mui/material'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      background: 'transparent',
      flexDirection: 'column',
      '& .MuiInputBase-root': {
        background: 'transparent',
        borderRadius: 8
      },
      '& .MuiInputBase-input': {
        background: 'transparent',
        borderRadius: 8
      },
      '& label': {
        marginBottom: theme.spacing(1),
        fontFamily: 'Open Sans',
        fontSize: theme.typography.pxToRem(14),
        lineHeight: theme.typography.pxToRem(17),
        fontWeight: 600
      },
      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
        {
          border: '1px solid  rgba(206, 212, 218, 0.5)'
        }
    },
    outlined: {
      borderColor: 'rgba(206, 212, 218, 0.5)'
    },
    input: {
      color: '#000',
      fontWeight: 600,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(17),
      fontFamily: 'Open Sans',
      '&.MuiInputBase-inputAdornedEnd': {
        marginRight: '14px'
      },
      '&:-webkit-autofill': {
        WebkitBoxShadow: 'inset 0 0 0px 9999px white'
      }
    },
    labelError: {
      '& label': {
        color: `${theme.palette.error.main} !important`
      }
    }
  })
)
