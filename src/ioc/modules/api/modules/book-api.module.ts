import { ContainerModule } from 'inversify'

import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const BookApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.BOOK.LOAD_BOOK).toDynamicValue(() =>
    makeApiUrl('book-library')
  )
  bind<string>(ApiTypes.BOOK.UPDATE_BOOK).toDynamicValue(() =>
    makeApiUrl('book-library')
  )
  bind<string>(ApiTypes.BOOK.ADD_BOOK).toDynamicValue(() =>
    makeApiUrl('book-library')
  )
  bind<string>(ApiTypes.BOOK.DELETE_BOOK).toDynamicValue(() =>
    makeApiUrl('book-library')
  )
})
