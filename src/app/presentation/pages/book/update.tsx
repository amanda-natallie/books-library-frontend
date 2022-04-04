import { Box, Typography, IconButton, Grid, Button } from '@mui/material'
import { useHistory } from 'react-router-dom'

import { useToggleTheme, useTranslation } from '~/app/presentation/hooks'
import UpdateBookForm from './components/update-book-form'

import { ContentContainer } from './book-styles'

const UpdateTodoPage = () => {
  const { translate } = useTranslation()
  const history = useHistory()

  const { toggleTheme, type } = useToggleTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw'
      }}
    >
      <ContentContainer>
        <Grid container spacing={3} justifyContent='space-between'>
          <Grid item>
            <Button
              variant='outlined'
              color='primary'
              onClick={() => history.push('/book-library')}
              data-testid='add-button'
            >
              {translate('common:book.goBack')}
            </Button>
          </Grid>

          <Grid item>
            <Typography variant='h4' align='center' sx={{ pb: 2 }}>
              {translate('common:book.add')}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={toggleTheme}>{type}</IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <UpdateBookForm />
          </Grid>
        </Grid>
      </ContentContainer>
    </Box>
  )
}

export default UpdateTodoPage
