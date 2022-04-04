export const ApiTypes = {
  AUTH: {
    EMAIL_SIGN_IN: Symbol('EmailSignIn'),
    GOOGLE_SIGN_IN: Symbol('GoogleSignIn')
  },
  BOOK: {
    LOAD_BOOK: Symbol('LoadBook'),
    ADD_BOOK: Symbol('AddBook'),
    UPDATE_BOOK: Symbol('UpdateBook'),
    DELETE_BOOK: Symbol('DeleteBook')
  }
}

/* 
import { AddFunction } from '~/domain/common/types'
import { CouponModel } from '~/domain/models'

export interface AddCoupon
  extends AddFunction<AddCoupon.Model, AddCoupon.Params> {}

export namespace AddCoupon {
  export type Model = void
  export type Params = CouponModel
}
*/
