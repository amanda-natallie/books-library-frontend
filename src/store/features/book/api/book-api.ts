/* loadCoupons: builder.query<LoadCoupons.Model, LoadCoupons.Params>({
  queryFn: async (params) => queryAdapter(loadCouponsService.load(params))
}), */

import { getDependencies } from '~/ioc/helpers/get-dependencies'
import { ServicesTypes } from '~/ioc/types'

import { apiSlice } from '~/store/features/api/slice/api-slice'
import { queryAdapter } from '~/store/helpers'

import {
  AddBook,
  DeleteBook,
  LoadBook,
  UpdateBook
} from '~/app/domain/usecases'

//                                        usecase (define os tipos e os methods do services)
const [loadBookService, addBookService, updateBookService, deleteBookService] =
  getDependencies<[LoadBook, AddBook, UpdateBook, DeleteBook]>([
    // simbolo
    ServicesTypes.BOOK.LOAD_BOOK,
    ServicesTypes.BOOK.ADD_BOOK,
    ServicesTypes.BOOK.UPDATE_BOOK,
    ServicesTypes.BOOK.DELETE_BOOK
  ])

export const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // response / request
    loadBook: builder.query<LoadBook.Model, LoadBook.Params>({
      queryFn: async () => queryAdapter(loadBookService.load()),
      providesTags: ['book-library']

      // uso isso aqui se eu precisar fazer algo com a resposta da requisição
      // (para nao vincular o presentation aqui)
      /* onQueryStarted: async (_params, { queryFulfilled, dispatch }) => {
        const response = await queryFulfilled

        dispatch(setToken(response.data))
      } */
    }),
    addBook: builder.mutation<AddBook.Model, AddBook.Params>({
      queryFn: async (params) => queryAdapter(addBookService.add(params)),
      invalidatesTags: ['book-library']
    }),
    updateBook: builder.mutation<UpdateBook.Model, UpdateBook.Params>({
      queryFn: async (params) => queryAdapter(updateBookService.update(params)),
      invalidatesTags: ['book-library']
    }),
    deleteBook: builder.mutation<DeleteBook.Model, DeleteBook.Params>({
      queryFn: async (params) => queryAdapter(deleteBookService.delete(params)),
      invalidatesTags: ['book-library']
    })
  })
})
