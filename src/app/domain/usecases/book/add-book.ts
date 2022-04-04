import { AddFunction } from '../../common/types'
import { AddBookModel } from '../../models'

export interface AddBook extends AddFunction<AddBook.Model, AddBook.Params> {}

export namespace AddBook {
  export type Params = AddBookModel
  export type Model = void
}
