import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type SuperButtonPropsType = DefaultButtonPropsType & {
  red?: boolean,
  error?: string,
}

const SuperButton: React.FC<SuperButtonPropsType> = (
  {
    className,
    error,
    ...restProps
  }
) => {

  return (
    <button
      className={s.default}
      {...restProps}
    />
  )
}

export default SuperButton
