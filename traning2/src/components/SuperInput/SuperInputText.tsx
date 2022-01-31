import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useState} from 'react'
import {INCORRECT_MAX_VALUE_MESSAGE, INCORRECT_START_VALUE_MESSAGE} from '../../App'
import s from './SuperInputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
  onEnter?: () => void
  spanClassName?: string,
  setDisabledButton: (value: boolean) => void,
  message: string,
  startValue: number,
  maxValue: number
}

const SuperInput: React.FC<SuperInputTextPropsType> = (
  {
    type,
    onChange,
    onKeyPress,
    onEnter,
    className,
    spanClassName,
    setDisabledButton,
    message,
    startValue,
    maxValue,
    ...restProps
  }
) => {

  const [red, setRed] = useState<boolean>(false)

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setDisabledButton(false)
    if (+e.currentTarget.value < 0) {
      setRed(true)
      setDisabledButton(true)
    } else if (startValue >= maxValue) {
      setRed(true)
      setDisabledButton(true)
    } else if (startValue < maxValue) {
      setRed(false)
      setDisabledButton(true)
    } else {
      setDisabledButton(false)
      setRed(false)
    }

    onChange && onChange(e)
  }
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);

    onEnter
    && e.key === 'Enter'
    && onEnter()
  }

  const finalInputClassName = `${red ? s.errorInput : s.superInput} ${className}`
  const redBorderClassName = message === INCORRECT_MAX_VALUE_MESSAGE || message === INCORRECT_START_VALUE_MESSAGE ? s.errorInput : finalInputClassName;

  return (
    <>
      <input
        type={'number'}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={redBorderClassName}

        {...restProps}
      />
    </>
  )
}

export default SuperInput;
