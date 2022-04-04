import { UpdateFunction } from '../../common/types'
import { BookModel, UpdateBookModel } from '../../models'

export interface UpdateBook
  extends UpdateFunction<UpdateBook.Model, UpdateBook.Params> {}

export namespace UpdateBook {
  export type Params = {
    bookId: string
    payload: UpdateBookModel
  }
  export type Model = {
    data: BookModel
  }
}
