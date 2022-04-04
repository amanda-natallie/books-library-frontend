import { Box, Typography, IconButton, Button } from '@mui/material'
import { Google as GoogleIcon } from '@mui/icons-material'

import {
  useToggleTheme,
  useTranslation,
  useLazyGoogleSignInQuery
} from '~/app/presentation/hooks'
import { ContentContainer, RootContainer, FormContainer } from './login-styles'

const LoginPage = () => {
  const { translate } = useTranslation()
  const [googleSignIn] = useLazyGoogleSignInQuery()

  const { toggleTheme, type } = useToggleTheme()

  return (
    <RootContainer>
      <ContentContainer>
        <FormContainer>
          <Typography variant='h4' align='center'>
            {translate('common:HELLO')}
          </Typography>
          <Typography
            variant='h6'
            align='center'
            sx={{
              pb: 2
            }}
          >
            Bem vindo ao Books Library
            <br />
            Faça Login para Continuar
          </Typography>

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

          <Box
            mt={2}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <IconButton onClick={toggleTheme}>{type}</IconButton>
          </Box>
        </FormContainer>
      </ContentContainer>
    </RootContainer>
  )
}

export default LoginPage
