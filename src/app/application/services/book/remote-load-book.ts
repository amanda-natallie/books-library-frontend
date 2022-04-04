import { inject, injectable } from 'inversify'
import { ApiTypes, InfraTypes } from '~/ioc/types'

import { Response } from '~/app/domain/common/types'
import { error, success } from '~/app/domain/common/utils'
import { LoadBook } from '~/app/domain/usecases/'

import { RequestResponse } from '~/app/application/protocols/http/request-response'
import type { HttpClient } from '~/app/application/protocols/http'

@injectable()
export class RemoteLoadBook implements LoadBook {
  constructor(
    @inject(ApiTypes.BOOK.LOAD_BOOK)
    private readonly url: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient<LoadBook.Model>
  ) {}

  async load(): Promise<Response<LoadBook.Model>> {
    const httpResponse = await this.httpClient.request({
      method: 'get',
      url: `${this.url}`
    })

    const toDoOrError = RequestResponse.handle<LoadBook.Model>(httpResponse)

    if (toDoOrError.isError()) {
      return error(toDoOrError.value)
    }

    return success(toDoOrError.value.response as LoadBook.Model)
  }
}
