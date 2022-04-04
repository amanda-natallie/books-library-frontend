import React, { useState } from 'react'
import { Controller, Control } from 'react-hook-form'

import {
  FormControl,
  IconButton,
  TextField,
  TextFieldProps
} from '@mui/material'
import clsx from 'clsx'

import {
  ValidationErrorType,
  MaskTypes
} from '~/app/presentation/common/protocols'
import { useMaskFormatter, useTranslation } from '~/app/presentation/hooks'

import { HideIcon, ShowIcon } from '../icons'
import { useStyles } from './text-input-styles'

type Props = Omit<TextFieldProps, 'label' | 'onChange'> & {
  name: string
  maxLength?: number
  control?: Control<any>
  label?: {
    text?: string
    className?: string
  }
  classContainer?: string
  onChange?: (value: string) => void
  mask?: {
    type: MaskTypes
    mode: 'onChange' | 'onBlur'
  }
}

const ControlledTextInput = ({
  name,
  control,
  label,
  type,
  onChange,
  onBlur,
  mask,
  children,
  maxLength,
  classContainer,
  ...inputProps
}: Props) => {
  const maskFormatter = useMaskFormatter(mask?.type)
  const classes = useStyles()
  const { translate } = useTranslation()
  const [inputType, setInputType] = useState(type ?? 'text')

  const togglePasswordInput = () => {
    inputType === 'password' ? setInputType('text') : setInputType('password')
  }

  const passwordIcon = (
    <IconButton onClick={togglePasswordInput}>
      {inputType === 'password' ? <HideIcon /> : <ShowIcon />}
    </IconButton>
  )

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      render={({ field, fieldState: { error, invalid } }) => {
        const errorState = error as unknown as ValidationErrorType
        const errorMessage = errorState?.name || errorState?.message
        const errorOption = errorState?.option

        const handleBlur = (
          event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          if (mask?.mode === 'onBlur') {
            const formattedValue = maskFormatter?.format(event.target.value)
            event.target.value = formattedValue ?? event.target.value
            field.onChange(event)
          }
          onBlur?.(event)
          field.onBlur()
        }

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          if (mask?.mode === 'onChange') {
            const formattedValue = maskFormatter?.format(event.target.value)
            event.target.value = formattedValue ?? event.target.value
          }
          onChange?.(event.target.value)
          field.onChange(event.target.value)
        }

        return (
          <FormControl
            className={clsx(
              classes.root,
              { [classes.labelError]: invalid },
              classContainer
            )}
            fullWidth
          >
            {label?.text && (
              <label className={label?.className} style={{ color: '#495057' }}>
                {translate(label?.text)}
              </label>
            )}
            <TextField
              onFocus={(e) => {
                e.target.readOnly = false
              }}
              {...inputProps}
              {...field}
              onChange={handleChange}
              onBlur={handleBlur}
              type={inputType}
              variant='outlined'
              fullWidth
              error={invalid}
              helperText={invalid ? translate(errorMessage, errorOption) : ''}
              inputProps={{ maxLength: maxLength ?? 300 }}
              InputProps={{
                readOnly: true,
                classes: {
                  notchedOutline: classes.outlined,
                  input: classes.input
                },
                endAdornment:
                  type === 'password'
                    ? passwordIcon
                    : inputProps.InputProps?.endAdornment
              }}
            >
              {children}
            </TextField>
          </FormControl>
        )
      }}
    />
  )
}

export default ControlledTextInput
