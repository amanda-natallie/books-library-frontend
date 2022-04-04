import { inject, injectable } from 'inversify'

import { ApiTypes, ConstantTypes, InfraTypes } from '~/ioc/types'

import { Response } from '~/app/domain/common/types'
import { success } from '~/app/domain/common/utils'
import { Logout } from '~/app/domain/usecases'

import type { CacheStorage } from '~/app/application/protocols/cache'
import type { HttpClient } from '~/app/application/protocols/http'

@injectable()
export class RemoteLogout implements Logout {
  constructor(
    @inject(ApiTypes.AUTH.LOGOUT) private readonly url: string,
    @inject(ConstantTypes.AUTH.TOKEN_KEY) private readonly tokenKey: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient<undefined>,
    @inject(InfraTypes.CACHE_STORAGE)
    private readonly cacheStorage: CacheStorage
  ) {}

  async logout(): Promise<Response<undefined>> {
    await this.httpClient.request({
      method: 'delete',
      url: this.url
    })
    this.deleteTokenToCacheStorage()
    return success(undefined)
  }

  private deleteTokenToCacheStorage() {
    this.cacheStorage.set(this.tokenKey, undefined)
  }
}
