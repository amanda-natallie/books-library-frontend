import { injectable, inject } from 'inversify'
import { Response } from '~/app/domain/common/types'
import { HttpClient } from '~/app/application/protocols/http'
import { RequestResponse } from '~/app/application/protocols/http/request-response'
import { success, error } from '~/app/domain/common/utils'
import { DeleteBook } from '~/app/domain/usecases'
import { ApiTypes, InfraTypes } from '~/ioc/types'

@injectable()
export class RemoteDeleteBook implements DeleteBook {
  constructor(
    @inject(ApiTypes.BOOK.DELETE_BOOK)
    private readonly url: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient<DeleteBook.Model>
  ) {}

  async delete({
    bookId
  }: DeleteBook.Params): Promise<Response<DeleteBook.Model>> {
    const httpResponse = await this.httpClient.request({
      method: 'delete',
      url: `${this.url}/${bookId}`
    })

    const responseOrError = RequestResponse.handle(httpResponse)

    if (responseOrError.isError()) return error(responseOrError.value)

    return success(responseOrError.value.response)
  }
}
