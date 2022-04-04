import { DeleteFunction } from '~/app/domain/common/types'
import { BookModel } from '~/app/domain/models'

export interface DeleteBook
  extends DeleteFunction<DeleteBook.Model, DeleteBook.Params> {}

export namespace DeleteBook {
  export type Params = {
    bookId: string
  }
  export type Model = BookModel
}
