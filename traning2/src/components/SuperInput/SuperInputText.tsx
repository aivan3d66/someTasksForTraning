import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './SuperInputText.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import { MESSAGES } from '../../App';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
  onEnter?: () => void,
  red: boolean
}

const SuperInput: React.FC<SuperInputTextPropsType> = (
  {
    type,
    onChange,
    onKeyPress,
    onEnter,
    className,
    red,
    ...restProps
  }
) => {
  const message = useSelector<AppStateType, string>(state => state.counter.message);

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
  }

  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);

    onEnter
    && e.key === 'Enter'
    && onEnter()
  }

  const finalInputClassName = `${red ? s.errorInput : s.superInput} ${className}`
  const redBorderClassName = message === MESSAGES.INCORRECT_MAX_VALUE_MESSAGE || message === MESSAGES.INCORRECT_START_VALUE_MESSAGE ? s.errorInput : finalInputClassName;

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
