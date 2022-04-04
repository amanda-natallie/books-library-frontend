import { makeStyles, createStyles } from '@mui/styles'
import { alpha, Theme } from '@mui/material'

type StyleProps = {
  typeButton: 'primary' | 'secondary'
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      height: 48,
      width: '100%',
      backgroundColor: ({ typeButton }: StyleProps) =>
        typeButton === 'primary' ? theme.palette.primary.main : 'transparent',
      color: ({ typeButton }: StyleProps) =>
        typeButton === 'primary'
          ? theme.palette.common.white
          : theme.palette.common.black,
      border: '1px solid',
      borderColor: ({ typeButton }: StyleProps) =>
        typeButton === 'primary' ? 'transparent' : theme.palette.primary.main,
      fontSize: 16,
      fontWeight: 600,
      borderRadius: 100,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: ({ typeButton }: StyleProps) =>
          typeButton === 'primary'
            ? alpha(theme.palette.primary.main, 0.7)
            : alpha(theme.palette.primary.main, 0.1)
      },
      '&.Mui-disabled': {
        backgroundColor: alpha(theme.palette.primary.main, 0.5),
        color: theme.palette.common.white
      }
    },
    progress: {
      color: '#fff',
      marginLeft: theme.spacing(1)
    }
  })
)
