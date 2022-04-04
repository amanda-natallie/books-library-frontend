export interface MaskFormatter {
  format: (value: string) => string
}

export type MaskTypes =
  | 'cpf'
  | 'cnpj'
  | 'cpfOrCnpj'
  | 'cpfOrEmail'
  | 'cvv'
  | 'cep'
  | 'expiration'
  | 'cardnumber'
  | 'cardholder'
  | 'telphone'
  | 'date'
  | 'currency'
  | 'monthlyIncome'
  | undefined
