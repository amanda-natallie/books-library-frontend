import { memo } from 'react'
import {
  FieldValues,
  FormProvider as FormProviderRHF,
  UseFormReturn
} from 'react-hook-form'

import { useForm, UseFormParams } from '../hooks'

type Props<T> = UseFormParams<T> & {
  children: React.ReactNode | ((methods: UseFormReturn<T>) => React.ReactNode)
}

const FormProvider = <T extends FieldValues>({
  defaultValues,
  mode,
  validationSchema,
  children
}: Props<T>) => {
  const methods = useForm({ defaultValues, mode, validationSchema })
  return (
    <FormProviderRHF {...methods}>
      {typeof children === 'function' ? children(methods) : children}
    </FormProviderRHF>
  )
}

export default memo(FormProvider)
