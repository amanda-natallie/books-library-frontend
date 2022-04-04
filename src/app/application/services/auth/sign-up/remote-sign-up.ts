import { inject, injectable } from 'inversify'

import { ApiTypes, InfraTypes } from '~/ioc/types'

import { Response } from '~/app/domain/common/types'
import { success, error } from '~/app/domain/common/utils'
import { TokenModel } from '~/app/domain/models'
import { SignUp } from '~/app/domain/usecases'

import type { HttpClient } from '~/app/application/protocols/http'
import { RequestResponse } from '~/app/application/protocols/http/request-response'

@injectable()
export class RemoteSignUp implements SignUp {
  constructor(
    @inject(ApiTypes.AUTH.SIGN_UP) private readonly url: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient<RemoteRegister.Model>
  ) {}

  async signup(params: SignUp.Params): Promise<Response<TokenModel>> {
    const formattedParams = {
      user: {
        ...params
      }
    }

    const httpResponse = await this.httpClient.request({
      method: 'post',
      url: this.url,
      body: formattedParams
    })

    const responseOrError = RequestResponse.handle<TokenModel>(httpResponse)

    if (responseOrError.isError()) return error(responseOrError.value)

    return success(responseOrError.value.response as TokenModel)
  }
}

export namespace RemoteRegister {
  export type Model = TokenModel
}
