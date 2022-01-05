import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './SuperInputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
  getMaxNumber?: (value: number) => void,
  getStartNumber?: (value: number) => void,
  onEnter?: () => void
  error?: string
  spanClassName?: string
}

const SuperInput: React.FC<SuperInputTextPropsType> = (
  {
    type,
    onChange,
    getMaxNumber,
    getStartNumber,
    onKeyPress,
    onEnter,
    error,
    className,
    spanClassName,

    ...restProps
  }
) => {
  const onChangeCallback = (e: any) => {
    onChange
    && onChange(e)

    if (e.currentTarget.value < 0) return error;
    getMaxNumber && getMaxNumber(e.currentTarget.value)
    getStartNumber && getStartNumber(e.currentTarget.value)
  }
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);

    onEnter
    && e.key === 'Enter'
    && onEnter()
  }

  const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
  const finalInputClassName = `${error ? s.errorInput : s.superInput} ${className}`

  return (
    <>
      <input
        type={'number'}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}

        {...restProps}
      />
      {error && <span className={finalSpanClassName}>{error}</span>}
    </>
  )
}

export default SuperInput;
