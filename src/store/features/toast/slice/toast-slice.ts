import { SliceCaseReducers } from '@reduxjs/toolkit'

import { createHydratedSlice } from '~/store/helpers'

import { addToastReducer, removeToastReducer } from '../actions'
import { ToastSliceState } from '../types'
import {
  ADD_TOAST,
  REMOVE_TOAST,
  toastInitialState,
  toastSliceName
} from '../types/toast-constants'

export const toastSlice = createHydratedSlice<
  ToastSliceState,
  SliceCaseReducers<ToastSliceState>,
  typeof toastSliceName
>({
  name: toastSliceName,
  initialState: toastInitialState,
  reducers: {
    [ADD_TOAST]: addToastReducer,
    [REMOVE_TOAST]: removeToastReducer
  }
})
