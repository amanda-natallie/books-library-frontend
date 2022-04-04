export class InvalidCredentialsError extends Error {
  constructor(message?: string) {
    super('Invalid Credentials')
    this.name = 'InvalidCredentialsError'
    this.message = message ?? 'Invalid Credentials. Try again.'
  }
}
