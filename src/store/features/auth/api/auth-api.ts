import { getDependencies } from '~/ioc/helpers/get-dependencies'
import { ServicesTypes } from '~/ioc/types'

import { apiSlice } from '~/store/features/api/slice/api-slice'
import { setUserInfo } from '~/store/features/auth'
import { queryAdapter } from '~/store/helpers'

import { TokenModel } from '~/app/domain/models'
import { EmailSignIn, Logout, SignUp } from '~/app/domain/usecases'

const [emailSignInService, logoutService, signUpService] = getDependencies<
  [EmailSignIn, Logout, SignUp]
>([
  ServicesTypes.AUTH.EMAIL_SIGN_IN,
  ServicesTypes.AUTH.LOGOUT,
  ServicesTypes.AUTH.SIGN_UP
])

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    emailSignIn: builder.mutation<TokenModel, EmailSignIn.Params>({
      queryFn: async (params) => queryAdapter(emailSignInService.auth(params)),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const payload = (await queryFulfilled).data

          dispatch(setUserInfo(payload))
          window.location.href = '/book-library'
        } catch {}
      }
    }),
    logout: builder.mutation<void, void>({
      queryFn: async () => queryAdapter(logoutService.logout())
    }),

    signUp: builder.mutation<TokenModel, SignUp.Params>({
      queryFn: async (params) => queryAdapter(signUpService.signup(params))
    })
  })
})
