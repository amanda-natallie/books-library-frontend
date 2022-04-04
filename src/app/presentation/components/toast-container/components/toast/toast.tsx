import { useEffect } from 'react'

import { Box, Snackbar } from '@mui/material'
import { Alert } from '@material-ui/lab'

import { ToastTypes } from '~/store/features/toast/types'

import { useToast } from '~/app/presentation/hooks'

import { useStyles } from './toast-styles'

type Props = {
  id: string
  text: string
  type: ToastTypes
}

const Toast = ({ id, text, type }: Props) => {
  const { removeToast } = useToast()

  const classes = useStyles()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [id])

  return (
    <Box>
      <Snackbar className={classes.root} open={Boolean(id)}>
        <Alert elevation={6} variant='filled' severity={type}>
          {text}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Toast
