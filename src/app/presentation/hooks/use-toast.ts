import { useCallback } from 'react'

import { addToast, removeToast } from '~/store/features/toast/actions'
import { ToastTypes } from '~/store/features/toast/types'

import { useAppDispatch } from './use-app-dispatch'
import { useTranslation } from './use-translation'

export const useToast = () => {
  const { translate } = useTranslation()
  const dispatch = useAppDispatch()

  const addNewToast = useCallback(
    ({ text, type }: { text: string; type: ToastTypes }) => {
      const toast = {
        type,
        text: translate(text)
      }

      dispatch(addToast(toast))
    },
    [dispatch]
  )

  const deleteToast = useCallback(
    (id: string) => {
      dispatch(removeToast({ id }))
    },
    [dispatch]
  )

  return { addToast: addNewToast, removeToast: deleteToast }
}
