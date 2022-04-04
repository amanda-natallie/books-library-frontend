export const ServicesTypes = {
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
