import { Response, LoadFunction } from '~/app/domain/common/types'
import { TokenModel } from '~/app/domain/models'

export interface GoogleSignIn
  extends LoadFunction<GoogleSignIn.Model, GoogleSignIn.Params> {
  auth: () => Promise<Response<TokenModel>>
}

export namespace GoogleSignIn {
  export type Model = TokenModel
  export type Params = void
}
