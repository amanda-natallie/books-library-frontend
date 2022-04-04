import { Box, Typography, IconButton, Button, Paper, Grid } from '@mui/material'
import { Google as GoogleIcon } from '@mui/icons-material'

import {
  useTranslation,
  useLazyGoogleSignInQuery
} from '~/app/presentation/hooks'
import {
  IllustrationWrapper,
  LoginContainer,
  GridContainer
} from './login-styles'
import { CustomPaper, Illustrations } from '../../components'

const LoginPage = () => {
  const { translate } = useTranslation()
  const [googleSignIn] = useLazyGoogleSignInQuery()

  return (
    <>
      <CustomPaper customStyles={{ overflow: 'hidden' }}>
        <LoginContainer>
          <GridContainer container>
            <Grid item xs={6}>
              <Illustrations.Logo />
              <Typography variant='h4'>{translate('login.title')}</Typography>
              <Typography variant='h6'>
                {translate('login.subtitle')}
              </Typography>
            </Grid>
            <Grid item xs={12} />
            <Grid item xs={4}>
              <Button
                type='button'
                fullWidth
                variant='contained'
                color='primary'
                data-testid='login-button'
                onClick={() => googleSignIn()}
              >
                <GoogleIcon style={{ marginRight: 15 }} />
                {translate('actions.enter')}
              </Button>
            </Grid>
          </GridContainer>
          <IllustrationWrapper>
            <Illustrations.Login />
          </IllustrationWrapper>
        </LoginContainer>
      </CustomPaper>
    </>
  )
}

export default LoginPage
