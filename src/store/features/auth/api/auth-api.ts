import { getDependencies } from '~/ioc/helpers/get-dependencies'
import { ServicesTypes } from '~/ioc/types'

import { apiSlice } from '~/store/features/api/slice/api-slice'
import { queryAdapter } from '~/store/helpers'

import { TokenModel } from '~/app/domain/models'
import { EmailSignIn, GoogleSignIn } from '~/app/domain/usecases'

import { setToken } from '../actions'

const [emailSignInService, googleSignInService] = getDependencies<
  [EmailSignIn, GoogleSignIn]
>([ServicesTypes.AUTH.EMAIL_SIGN_IN, ServicesTypes.AUTH.GOOGLE_SIGN_IN])

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    emailSignIn: builder.mutation<TokenModel, EmailSignIn.Params>({
      queryFn: async (params) => queryAdapter(emailSignInService.auth(params)),
      onQueryStarted: async (_params, { queryFulfilled, dispatch }) => {
        const response = await queryFulfilled

        dispatch(setToken(response.data))
      }
    }),
    googleSignIn: builder.query<TokenModel, GoogleSignIn.Params>({
      queryFn: async () => queryAdapter(googleSignInService.auth()),
      onQueryStarted: async (params_, { queryFulfilled, dispatch }) => {
        const response = await queryFulfilled
        console.log('googleSignIn response', response)
        //dispatch(setToken(response.data))
      }
    })
  })
})
