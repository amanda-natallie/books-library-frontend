import { ContainerModule } from 'inversify'

import { ServicesTypes } from '~/ioc/types'

import { EmailSignIn, GoogleSignIn } from '~/app/domain/usecases/authentication'

import {
  RemoteEmailSignIn,
  RemoteGoogleSignIn
} from '~/app/application/services'

export const AuthModule = new ContainerModule((bind) => {
  bind<EmailSignIn>(ServicesTypes.AUTH.EMAIL_SIGN_IN).to(RemoteEmailSignIn)
  bind<GoogleSignIn>(ServicesTypes.AUTH.GOOGLE_SIGN_IN).to(RemoteGoogleSignIn)
})
