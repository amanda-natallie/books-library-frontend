import { TokenModel } from '~/app/domain/models'

export const authSliceName = 'auth' as const

export const AUTH_SLICE_ACTIONS = {
  SET_TOKEN: '@auth/setToken',
  LOGOUT: '@auth/logout',
  SET_USER_INFO: '@auth/setUserInfo'
} as const

export const AUTH_SLICE_INITIAL_STATE: AuthSliceState = {
  token: {
    accessToken: '',
    expiresIn: null,
    refreshToken: '',
    refreshTokenExpiresIn: null,
    user: null
  },
  logout: false,
  userInfo: null
}

export type AuthSliceState = {
  token: TokenModel
  logout: boolean
  userInfo: TokenModel
}
