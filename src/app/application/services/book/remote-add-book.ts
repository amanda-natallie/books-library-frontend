import { inject, injectable } from 'inversify'
import { Response } from '~/app/domain/common/types'
import { error, success } from '~/app/domain/common/utils'
import { AddBook } from '~/app/domain/usecases/book'
import { ApiTypes, InfraTypes } from '~/ioc/types'
import type { HttpClient } from '~/app/application/protocols/http'
import { RequestResponse } from '~/app/application/protocols/http/request-response'

@injectable()
export class RemoteAddBook implements AddBook {
  constructor(
    @inject(ApiTypes.BOOK.ADD_BOOK)
    private readonly url: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient<AddBook.Model>
  ) {}

  async add(payload: AddBook.Params): Promise<Response<AddBook.Model>> {
    const httpResponse = await this.httpClient.request({
      method: 'post',
      url: this.url,
      body: payload
    })

    const responseOrError = RequestResponse.handle(httpResponse)

    if (responseOrError.isError()) return error(responseOrError.value)

    return success(responseOrError.value.response)
  }
}
