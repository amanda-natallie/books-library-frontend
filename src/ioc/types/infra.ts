export const InfraTypes = {
  HTTP_CLIENT: Symbol('HttpClient'),
  TOKEN_DECODER: Symbol('TokenDecoder'),
  CACHE_STORAGE: Symbol('CacheStorage'),
  FORMATTERS: {
    CPF_MASK_FORMATTER: Symbol('CPFMaskFormatter'),
    CNPJ_MASK_FORMATTER: Symbol('CNPJMaskFormatter'),
    CPF_OR_CNPJ_MASK_FORMATTER: Symbol('CPFOrCNPJMaskFormatter'),
    CVV_MASK_FORMATTER: Symbol('CVVMaskFormatter'),
    CEP_MASK_FORMATTER: Symbol('CEPMaskFormatter'),
    CARDNUMBER_MASK_FORMATTER: Symbol('CardnumberMaskFormatter'),
    CARDHOLDER_MASK_FORMATTER: Symbol('CardholderMaskFormatter'),
    TELPHONE_MASK_FORMATTER: Symbol('TelphoneMaskFormatter'),
    EXPIRATION_MASK_FORMATTER: Symbol('ExpirationMaskFormatter'),
    DATE_MASK_FORMATTER: Symbol('DateMaskFormatter'),
    CURRENCY_MASK_FORMATTER: Symbol('CurrencyMaskFormatter'),
    MONTHLY_INCOME_MASK_FORMATTER: Symbol('MonthlyIncomeMaskFormatter'),
    CPF_OR_EMAIL_MASK_FORMATTER: Symbol('CpfOrEmailMaskFormatter')
  }
}
