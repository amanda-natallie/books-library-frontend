import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BookModel } from '~/app/domain/models'
import { LoadBook } from '~/app/domain/usecases'

import {
  useLoadBookQuery,
  useToggleTheme,
  useTranslation
} from '~/app/presentation/hooks'
import { TextInput } from '../../components'

import { ContentContainer } from './book-styles'
import BookTable from './components/book-table'

const LoadTodoPage = () => {
  const history = useHistory()
  const { translate } = useTranslation()
  const { toggleTheme, type } = useToggleTheme()
  const { data } = useLoadBookQuery()
  const [dataBooks, setDataBooks] = useState<BookModel[]>(data)

  const handleSearch = (value: string) => {
    if (value) {
      const filteredData = data.filter(
        (book) =>
          book.name.toLowerCase().includes(value.toLowerCase()) ||
          book.description.toLowerCase().includes(value.toLowerCase())
      )
      setDataBooks(filteredData)
    }
  }

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
          <Grid item xs={2}>
            <TextField
              id='outlined-basic'
              label={translate('common:book.search')}
              variant='outlined'
              size='small'
              onChange={({ target }) => handleSearch(target.value)}
            />
          </Grid>
          <Grid item>
            <Typography
              variant='h4'
              align='center'
              sx={{
                pb: 2,
                color: '#1976d2'
              }}
            >
              {translate('common:book.title')}
            </Typography>
          </Grid>
          <Grid item xs={2} alignContent='right'>
            <Button
              variant='contained'
              color='primary'
              onClick={() => history.push('/book-library/add')}
              data-testid='add-button'
              size='large'
              sx={{ marginLeft: 'auto', display: 'block' }}
            >
              {translate('common:book.actions.add')}
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            style={{
              height: '52vh',
              overflowX: 'hidden',
              marginTop: 30,
              paddingTop: 0
            }}
          >
            <BookTable books={dataBooks ?? data} />
          </Grid>
        </Grid>
      </ContentContainer>
    </Box>
  )
}

export default LoadTodoPage
