import { createSelector } from 'reselect'

import { AppState } from '~/store/store'

const toastSliceSelector = (state: AppState) => state.toastSlice

export const getToastState = createSelector(toastSliceSelector, (toast) => {
  return toast
})
