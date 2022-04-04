import { ContainerModule } from 'inversify'

import { ValidationTypes } from '~/ioc/types/validation'

import {
  ValidationBuilder,
  ValidationComposite
} from '~/app/validation/validators'

import { Validation } from '~/app/presentation/common/protocols'

export const AddBookValidationModule = new ContainerModule((bind) => {
  bind<Validation>(ValidationTypes.BOOK.ADD_BOOK_FORM).toConstantValue(
    ValidationComposite.build([
      ...ValidationBuilder.field('name').required().build(),
      ...ValidationBuilder.field('description').required().build()
    ])
  )
})
