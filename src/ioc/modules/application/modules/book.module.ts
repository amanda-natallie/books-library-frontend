import { ContainerModule } from 'inversify'

import { ServicesTypes } from '~/ioc/types'

import {
  AddBook,
  DeleteBook,
  LoadBook,
  UpdateBook
} from '~/app/domain/usecases/book'

import {
  RemoteAddBook,
  RemoteDeleteBook,
  RemoteLoadBook,
  RemoteUpdateBook
} from '~/app/application/services'

export const BookModule = new ContainerModule((bind) => {
  //   usecase      simbolo                      implemnentacao do usecase (service)
  bind<LoadBook>(ServicesTypes.BOOK.LOAD_BOOK).to(RemoteLoadBook)
  bind<AddBook>(ServicesTypes.BOOK.ADD_BOOK).to(RemoteAddBook)
  bind<UpdateBook>(ServicesTypes.BOOK.UPDATE_BOOK).to(RemoteUpdateBook)
  bind<DeleteBook>(ServicesTypes.BOOK.DELETE_BOOK).to(RemoteDeleteBook)
})
