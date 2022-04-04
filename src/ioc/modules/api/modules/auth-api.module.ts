import { ContainerModule } from 'inversify'

import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const AuthApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.AUTH.EMAIL_SIGN_IN).toDynamicValue(() =>
    makeApiUrl('auth')
  )
  bind<string>(ApiTypes.AUTH.GOOGLE_SIGN_IN).toDynamicValue(() =>
    makeApiUrl('auth/google')
  )
})
