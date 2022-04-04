import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '80vw',
      margin: '10vh auto',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    },

    defaultPaper: {
      padding: 0,
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.spacing(4),
      display: 'flex',
      justifyContent: 'inherit',
      alignItems: 'inherit',
      width: '100%',
      boxSizing: 'border-box'
    }
  })
)
