import { configureStore } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { setupListeners } from '@reduxjs/toolkit/dist/query/react'
import { browserHistory } from '~/app/main/factories/routes/browser-history'

import { apiSlice } from './features/api/slice/api-slice'
import { authSlice } from './features/auth'
import { toastSlice } from './features/toast'

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store['getState']>

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [toastSlice.name]: toastSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat([apiSlice.middleware, routerMiddleware(browserHistory)])
})

setupListeners(store.dispatch)
