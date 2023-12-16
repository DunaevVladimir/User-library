import { memo } from 'react';
import s from './button.module.scss';

type Props = {
  onClick?: () => void,
  type?: 'submit' | 'reset' | 'button' | undefined;
  children?: React.ReactNode
}

export const Button = memo(({ onClick, type, children}: Props) => {
  return <button onClick={onClick} type={type} className={s.Button}>{children}</button>
})
