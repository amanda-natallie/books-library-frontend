import { SliceCaseReducers } from '@reduxjs/toolkit'

import { logoutReducer, setTokenReducer } from '~/store/features/auth/actions'
import {
  authSliceName,
  AuthSliceState,
  AUTH_SLICE_INITIAL_STATE,
  AUTH_SLICE_ACTIONS
} from '~/store/features/auth/types'
import { createHydratedSlice } from '~/store/helpers'

export const authSlice = createHydratedSlice<
  AuthSliceState,
  SliceCaseReducers<AuthSliceState>,
  typeof authSliceName
>({
  name: authSliceName,
  initialState: { ...AUTH_SLICE_INITIAL_STATE },
  reducers: {
    [AUTH_SLICE_ACTIONS.SET_TOKEN]: setTokenReducer,
    [AUTH_SLICE_ACTIONS.LOGOUT]: logoutReducer
  }
})
