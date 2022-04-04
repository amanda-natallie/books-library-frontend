import { Typography, Button, Grid } from '@mui/material'

import { useTranslation } from '~/app/presentation/hooks'
import {
  IllustrationWrapper,
  LoginContainer,
  GridContainer
} from './login-styles'
import { CustomPaper, Illustrations } from '../../components'
import LoginForm from './components/login-form'

const LoginPage = () => {
  const { translate } = useTranslation()

  return (
    <>
      <CustomPaper customStyles={{ overflow: 'hidden' }}>
        <LoginContainer>
          <GridContainer container>
            <Grid item xs={12} md={5}>
              <Illustrations.Logo />
              <Typography variant='h4'>{translate('login.title')}</Typography>
              <Typography variant='h6'>
                {translate('login.subtitle')}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ mb: 5 }} />
            <Grid item xs={12} md={4}>
              <LoginForm />
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
