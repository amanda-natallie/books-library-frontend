import { LoadFunction } from '../../common/types'
import { BookModel } from '../../models'

export interface LoadBook
  extends LoadFunction<LoadBook.Model, LoadBook.Params> {}

export namespace LoadBook {
  export type Model = BookModel[]
  export type Params = void
}
