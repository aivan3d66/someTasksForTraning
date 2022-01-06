import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useState} from 'react'
import s from './SuperInputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
  getMaxNumber?: (value: number) => void,
  getStartNumber?: (value: number) => void,
  onEnter?: () => void
  spanClassName?: string,
}

const SuperInput: React.FC<SuperInputTextPropsType> = (
  {
    type,
    onChange,
    getMaxNumber,
    getStartNumber,
    onKeyPress,
    onEnter,
    className,
    spanClassName,

    ...restProps
  }
) => {

  const [red, setRed] = useState<boolean>(false)

  const onChangeCallback = (e: any) => {
    if (e.currentTarget.value < 0) {
      setRed(true)
    } else {
      setRed(false)
    }
    onChange && onChange(e)
    console.log(red)
    getMaxNumber && getMaxNumber(e.currentTarget.value)
    getStartNumber && getStartNumber(e.currentTarget.value)
  }
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);

    onEnter
    && e.key === 'Enter'
    && onEnter()
  }

  const finalInputClassName = `${red ? s.errorInput : s.superInput} ${className}`

  return (
    <>
      <input
        type={'number'}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}

        {...restProps}
      />
    </>
  )
}

export default SuperInput;
