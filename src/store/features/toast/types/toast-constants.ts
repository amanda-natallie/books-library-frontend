import { ToastSliceState } from './toast-types'

export const toastSliceName = 'toastSlice' as const

export const ADD_TOAST = `addToast`
export const REMOVE_TOAST = `removeToast`

export const TOAST_REDUCER_KEYS = {
  ADD_TOAST: `${toastSliceName}/${ADD_TOAST}`,
  REMOVE_TOAST: `${toastSliceName}/${REMOVE_TOAST}`
}

export const toastInitialState: ToastSliceState = {
  toasts: []
}
