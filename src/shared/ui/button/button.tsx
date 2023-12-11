import { HTMLInputTypeAttribute } from 'react';
import s from './button.module.scss';

type Props = {
  onClick?: () => void,
  type?: 'submit' | 'reset' | 'button' | undefined;
  theme?: string,
  children?: React.ReactNode
}

export function Button({ onClick, type, theme, children}: Props) {
  return <button onClick={onClick} type={type} className={s[theme]}>{children}</button>
}
