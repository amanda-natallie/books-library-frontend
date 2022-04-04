import React, { useEffect } from 'react'

import { Box, Button } from '@mui/material'

import { ValidationTypes } from '~/ioc/types/validation'

import { Validation } from '~/app/presentation/common/protocols'
import { TextInput } from '~/app/presentation/components'
import {
  useUpdateBookMutation,
  useTranslation,
  useLoadBookQuery
} from '~/app/presentation/hooks'
import { useService } from '~/app/presentation/hooks/use-service'
import { FormProvider } from '~/app/presentation/providers'
import { AddBookModel, UpdateBookModel } from '~/app/domain/models'
import { useHistory, useParams } from 'react-router-dom'

const UpdateBookForm = () => {
  const [defaultData, setDefaultData] = React.useState<UpdateBookModel>(null)
  // @ts-ignore
  const { id } = useParams()
  const history = useHistory()
  const validationSchema = useService<Validation>(
    ValidationTypes.BOOK.UPDATE_BOOK_FORM
  )

  const [updateBook] = useUpdateBookMutation()
  const { data } = useLoadBookQuery()

  useEffect(() => {
    if (data) {
      const book = data.find((book) => book.id === id)
      if (book) {
        setDefaultData(book)
      }
    }
  }, [data, id])

  const { translate } = useTranslation()

  const onSubmit = async (values: AddBookModel) => {
    const res = await updateBook({ toDoId: id, payload: values })
    if (res) {
      alert('Todo updated successfully')
      history.push('/book-library')
    }
  }

  return (
    <FormProvider
      validationSchema={validationSchema}
      mode='onBlur'
      defaultValues={defaultData}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextInput
              sx={{
                pb: 2
              }}
              name='name'
              label={'common:book.form.title'}
            />
            <TextInput
              name='description'
              label={'common:book.form.description'}
              rows={5}
            />
          </div>
          <Box
            sx={{
              mt: 2
            }}
          >
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              data-testid='submit-button'
            >
              {translate('actions.update')}
            </Button>
          </Box>
        </form>
      )}
    </FormProvider>
  )
}

export default UpdateBookForm
