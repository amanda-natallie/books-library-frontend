import { createAction } from '@reduxjs/toolkit'

import { ActionMap, ReducerMap } from '~/store/types/action-reducer-map'

import { TokenModel } from '~/app/domain/models'

import { AuthSliceState, AUTH_SLICE_ACTIONS } from '../types'

export const setUserInfo: ActionMap<TokenModel> = createAction(
  AUTH_SLICE_ACTIONS.SET_USER_INFO
)

export const setUserInfoReducer: ReducerMap<AuthSliceState, TokenModel> = (
  state,
  action
) => {
  state.userInfo = action.payload
}
