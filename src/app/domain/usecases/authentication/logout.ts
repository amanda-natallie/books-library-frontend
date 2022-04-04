import { Response } from '~/app/domain/common/types'

export interface Logout {
  logout: () => Promise<Response<undefined>>
}
