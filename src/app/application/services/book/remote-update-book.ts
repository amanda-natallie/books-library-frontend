import { injectable, inject } from 'inversify'
import { Response } from '~/app/domain/common/types'
import { HttpClient } from '~/app/application/protocols/http'
import { RequestResponse } from '~/app/application/protocols/http/request-response'
import { success, error } from '~/app/domain/common/utils'
import { UpdateBook } from '~/app/domain/usecases'
import { ApiTypes, InfraTypes } from '~/ioc/types'

@injectable()
export class RemoteUpdateBook implements UpdateBook {
  constructor(
    @inject(ApiTypes.BOOK.UPDATE_BOOK)
    private readonly url: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient<UpdateBook.Model>
  ) {}

  async update({
    bookId,
    payload
  }: UpdateBook.Params): Promise<Response<UpdateBook.Model>> {
    const httpResponse = await this.httpClient.request({
      method: 'put',
      url: `${this.url}/${bookId}`,
      body: payload
    })

    const responseOrError = RequestResponse.handle(httpResponse)

    if (responseOrError.isError()) return error(responseOrError.value)

    return success(responseOrError.value.response)
  }
}
