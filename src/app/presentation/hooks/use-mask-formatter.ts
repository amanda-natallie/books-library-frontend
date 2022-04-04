import { useMemo } from 'react'

import { InfraTypes } from '~/ioc/types'

import type { MaskFormatter, MaskTypes } from '../common/protocols'
import { useService } from './use-service'

export const useMaskFormatter = (mask: MaskTypes) => {
  if (!mask) {
    return null
  }
  const formatters = {
    cpf: useService<MaskFormatter>(InfraTypes.FORMATTERS.CPF_MASK_FORMATTER),
    cnpj: useService<MaskFormatter>(InfraTypes.FORMATTERS.CNPJ_MASK_FORMATTER),
    cpfOrCnpj: useService<MaskFormatter>(
      InfraTypes.FORMATTERS.CPF_OR_CNPJ_MASK_FORMATTER
    ),
    cpfOrEmail: useService<MaskFormatter>(
      InfraTypes.FORMATTERS.CPF_OR_EMAIL_MASK_FORMATTER
    ),
    cep: useService<MaskFormatter>(InfraTypes.FORMATTERS.CEP_MASK_FORMATTER),
    cvv: useService<MaskFormatter>(InfraTypes.FORMATTERS.CVV_MASK_FORMATTER),
    cardnumber: useService<MaskFormatter>(
      InfraTypes.FORMATTERS.CARDNUMBER_MASK_FORMATTER
    ),
    cardholder: useService<MaskFormatter>(
      InfraTypes.FORMATTERS.CARDHOLDER_MASK_FORMATTER
    ),
    telphone: useService<MaskFormatter>(
      InfraTypes.FORMATTERS.TELPHONE_MASK_FORMATTER
    ),
    date: useService<MaskFormatter>(InfraTypes.FORMATTERS.DATE_MASK_FORMATTER),
    currency: useService<MaskFormatter>(
      InfraTypes.FORMATTERS.CURRENCY_MASK_FORMATTER
    ),
    monthlyIncome: useService<MaskFormatter>(
      InfraTypes.FORMATTERS.MONTHLY_INCOME_MASK_FORMATTER
    ),
    expiration: useService<MaskFormatter>(
      InfraTypes.FORMATTERS.EXPIRATION_MASK_FORMATTER
    )
  }

  return useMemo(() => formatters[mask], [mask])
}
