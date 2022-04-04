import { inject, injectable } from 'inversify'

import { ApiTypes, ConstantTypes, InfraTypes } from '~/ioc/types'

import { Response } from '~/app/domain/common/types'
import { error, success } from '~/app/domain/common/utils'
import { TokenModel } from '~/app/domain/models'
import { GoogleSignIn } from '~/app/domain/usecases'

import type { CacheStorage } from '~/app/application/protocols/cache'
import type { TokenDecoder } from '~/app/application/protocols/decoder'
import type { HttpClient } from '~/app/application/protocols/http'
import { RequestResponse } from '~/app/application/protocols/http/request-response'

@injectable()
export class RemoteGoogleSignIn implements GoogleSignIn {
  constructor(
    @inject(ApiTypes.AUTH.GOOGLE_SIGN_IN) private readonly url: string,
    @inject(ConstantTypes.AUTH.TOKEN_KEY) private readonly tokenKey: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient<RemoteGoogleSignIn.Model>,
    @inject(InfraTypes.TOKEN_DECODER)
    private readonly tokenDecoder: TokenDecoder,
    @inject(InfraTypes.CACHE_STORAGE)
    private readonly cacheStorage: CacheStorage
  ) {}
  load: (params?: void) => Promise<Response<TokenModel>>

  async auth(): Promise<Response<TokenModel>> {
    const httpResponse = await this.httpClient.request({
      method: 'get',
      url: this.url
    })

    const tokenOrError = RequestResponse.handle<TokenModel>(httpResponse)

    if (tokenOrError.isError()) {
      return error(tokenOrError.value)
    }

    const formattedResponse = this.formatResponse(tokenOrError.value.response)

    this.saveTokenToCacheStorage(formattedResponse)

    return success(formattedResponse)
  }

  private saveTokenToCacheStorage(token: TokenModel) {
    this.cacheStorage.set(this.tokenKey, token)
  }

  private formatResponse(params: RemoteGoogleSignIn.Model): TokenModel {
    const decodedAccessToken = this.tokenDecoder.decode<{ exp: number }>(
      params.accessToken
    )
    const decodedRefreshToken = this.tokenDecoder.decode<{ exp: number }>(
      params.accessToken
    )
    return {
      accessToken: params.accessToken,
      expiresIn: decodedAccessToken.exp,
      refreshToken: params.refreshToken,
      refreshTokenExpiresIn: decodedRefreshToken.exp,
      user: params.user
    }
  }
}

export namespace RemoteGoogleSignIn {
  export type Model = TokenModel
}
