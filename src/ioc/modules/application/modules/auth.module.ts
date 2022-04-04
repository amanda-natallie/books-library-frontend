import { ContainerModule } from 'inversify'

import { ServicesTypes } from '~/ioc/types'

import {
  EmailSignIn,
  GoogleSignIn,
  Logout,
  SignUp
} from '~/app/domain/usecases/authentication'

import {
  RemoteEmailSignIn,
  RemoteGoogleSignIn,
  RemoteLogout,
  RemoteSignUp
} from '~/app/application/services'

export const AuthModule = new ContainerModule((bind) => {
  bind<EmailSignIn>(ServicesTypes.AUTH.EMAIL_SIGN_IN).to(RemoteEmailSignIn)
  bind<GoogleSignIn>(ServicesTypes.AUTH.GOOGLE_SIGN_IN).to(RemoteGoogleSignIn)
  bind<Logout>(ServicesTypes.AUTH.LOGOUT).to(RemoteLogout)
  bind<SignUp>(ServicesTypes.AUTH.SIGN_UP).to(RemoteSignUp)
})
