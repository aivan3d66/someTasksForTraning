import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const SuperButton: React.FC<DefaultButtonPropsType> = (
  {
    className,
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
