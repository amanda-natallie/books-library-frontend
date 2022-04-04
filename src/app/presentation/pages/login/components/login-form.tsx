import React, { useEffect } from 'react'
import { Box, Button, Grid } from '@mui/material'

import { ValidationTypes } from '~/ioc/types/validation'

import { Validation } from '~/app/presentation/common/protocols'
import { TextInput, GenericButton } from '~/app/presentation/components'
import {
  useEmailSignInMutation,
  useTranslation
} from '~/app/presentation/hooks'
import { useService } from '~/app/presentation/hooks/use-service'
import { FormProvider } from '~/app/presentation/providers'
import { useHistory } from 'react-router-dom'
import { AppRoutes } from '~/app/presentation/common/constants'
import { ToastType } from '~/app/presentation/common/types'
import { addToast } from '~/store/features/toast/actions'

const LoginForm = () => {
  const history = useHistory()
  const { translate } = useTranslation()

  const validationSchema = useService<Validation>(
    ValidationTypes.AUTH.SIGN_IN_FORM
  )

  const [emailSignIn, { isLoading, isSuccess, isError, error }] =
    useEmailSignInMutation()

  const onSubmit = async (values: { email: string; password: string }) => {
    emailSignIn(values)
  }

  useEffect(() => {
    console.log('isSuccess: ', isSuccess)
    if (!isSuccess) return
    history.push('/home')
  }, [isSuccess, history])

  useEffect(() => {
    if (!isError || !error) return
    addToast({
      text: (error as { message: string })?.message,
      type: ToastType.ERROR
    })
  }, [isError, error])

  return (
    <FormProvider validationSchema={validationSchema} mode='onBlur'>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            sx={{
              pb: 2
            }}
            name='email'
            label={{ text: 'common:EMAIL' }}
            autoComplete='email'
          />
          <TextInput
            name='password'
            label={{ text: 'common:PASSWORD' }}
            type='password'
            autoComplete='current-password'
          />

          <Grid
            container
            sx={{
              mt: 4
            }}
          >
            <Grid item xs={12} md={8}>
              <Button
                sx={{ mr: 5 }}
                type='button'
                fullWidth
                variant='text'
                color='primary'
                data-testid='signup-button'
              >
                {translate('actions.signup')}
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericButton
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                data-testid='submit-button'
                isLoading={isLoading}
                typeButton={'primary'}
              >
                {translate('actions.enter')}
              </GenericButton>
            </Grid>
          </Grid>
        </form>
      )}
    </FormProvider>
  )
}

export default LoginForm
