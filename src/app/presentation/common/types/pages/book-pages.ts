export type BookFormTypes = {
  id: string
  book: string
  email_: string
  booked: boolean
}

export type BookFormErrorTypes = Partial<BookFormTypes>
