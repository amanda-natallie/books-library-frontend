import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'

import {
  useLoadBookQuery,
  useToggleTheme,
  useTranslation
} from '~/app/presentation/hooks'

import { ContentContainer } from './book-styles'
import BookTable from './components/book-table'

const LoadTodoPage = () => {
  const history = useHistory()
  const { translate } = useTranslation()
  const { toggleTheme, type } = useToggleTheme()
  const { data } = useLoadBookQuery()

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
            <IconButton onClick={toggleTheme}>{type}</IconButton>
          </Grid>
          <Grid item>
            <Typography
              variant='h4'
              align='center'
              sx={{
                pb: 2
              }}
            >
              {translate('common:book.title')}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              onClick={() => history.push('/book-library/add')}
              data-testid='add-button'
            >
              {translate('common:book.actions.add')}
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <BookTable books={data} />
          </Grid>
        </Grid>
      </ContentContainer>
    </Box>
  )
}

export default LoadTodoPage
