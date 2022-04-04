import { authApi } from '~/store/features/auth'
import { bookApi } from '~/store/features/book/api/book-api'

export const { useLazyGoogleSignInQuery } = authApi
export const {
  useLoadBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation
} = bookApi
