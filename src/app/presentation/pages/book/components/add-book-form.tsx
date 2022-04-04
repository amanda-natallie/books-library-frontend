import React from 'react'

import { Box, Button } from '@mui/material'

import { ValidationTypes } from '~/ioc/types/validation'

import { Validation } from '~/app/presentation/common/protocols'
import { TextInput } from '~/app/presentation/components'
import { useAddBookMutation, useTranslation } from '~/app/presentation/hooks'
import { useService } from '~/app/presentation/hooks/use-service'
import { FormProvider } from '~/app/presentation/providers'
import { AddBookModel } from '~/app/domain/models'

const AddBookForm = () => {
  const validationSchema = useService<Validation>(
    ValidationTypes.BOOK.ADD_BOOK_FORM
  )

  const [addBook] = useAddBookMutation()

  const { translate } = useTranslation()

  const onSubmit = async (values: AddBookModel) => {
    addBook(values)
  }

  return (
    <FormProvider validationSchema={validationSchema} mode='onBlur'>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextInput
              sx={{
                pb: 2
              }}
              name='name'
              label={{
                text: 'common:book.form.title'
              }}
            />
            <TextInput
              name='description'
              label={{
                text: 'common:book.form.description'
              }}
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
              {translate('actions.add')}
            </Button>
          </Box>
        </form>
      )}
    </FormProvider>
  )
}

export default AddBookForm
