import { Response } from '~/app/domain/common/types'
import { SignUpUserModel, TokenModel } from '~/app/domain/models'
export interface SignUp {
  signup: (params: SignUp.Params) => Promise<Response<TokenModel>>
}

export namespace SignUp {
  export type Params = SignUpUserModel
}
