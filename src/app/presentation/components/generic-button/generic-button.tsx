import { Button, ButtonProps, CircularProgress } from '@mui/material'

import { useStyles } from './generic-button-styles'

type Props = ButtonProps & {
  typeButton: 'primary' | 'secondary'
  className?: string
  isLoading?: boolean
}

const GenericButton = ({
  children,
  typeButton,
  className,
  isLoading,
  ...rest
}: Props) => {
  const classes = useStyles({ typeButton })
  return (
    <Button
      {...rest}
      className={`${classes.button} ${className}`}
      disabled={rest.disabled ?? isLoading}
    >
      {children}
      {isLoading && <CircularProgress size={18} className={classes.progress} />}
    </Button>
  )
}

export default GenericButton
