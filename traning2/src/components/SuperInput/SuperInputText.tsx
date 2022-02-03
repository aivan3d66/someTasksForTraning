import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useState} from 'react'
import s from './SuperInputText.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import { MESSAGES } from '../../App';
import {setError, setMessage} from "../../bll/counterReducer";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
  onEnter?: () => void
}

const SuperInput: React.FC<SuperInputTextPropsType> = (
  {
    type,
    onChange,
    onKeyPress,
    onEnter,
    className,
    ...restProps
  }
) => {

  const [red, setRed] = useState<boolean>(false);

  const dispatch = useDispatch();
  const value = useSelector<AppStateType, number>(state => state.counter.value);
  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
  const message = useSelector<AppStateType, string>(state => state.counter.message);


  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value < 0) {
      setRed(true)
      dispatch(setError(true))
      dispatch(setMessage(MESSAGES.INCORRECT_VALUE_MESSAGE))
    } else if (value > maxValue) {
      setRed(true)
      dispatch(setError(true))
      dispatch(setMessage(MESSAGES.INCORRECT_START_VALUE_MESSAGE))
    } else if (value < maxValue) {
      setRed(false)
      dispatch(setError(false))
      dispatch(setMessage(''))
    } else {
      setRed(false)
      dispatch(setError(false))
      dispatch(setMessage(''))
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
