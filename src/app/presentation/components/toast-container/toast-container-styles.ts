import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

type StyleProps = {
  width: number
}

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 9999,
    position: 'fixed',
    left: ({ width }: StyleProps) => `calc(50% - ${width / 2}px)`,
    top: 24,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    '& > div:not(:first-child)': {
      marginTop: theme.spacing(1)
    }
  }
}))
