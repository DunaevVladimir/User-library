import { memo } from 'react';
import s from './button.module.scss';

type Props = {
  onClick?: () => void,
  type?: 'submit' | 'reset' | 'button' | undefined;
  children?: React.ReactNode,
  className?: string
}

export const Button = memo(({ onClick, type, children, className}: Props) => {
  return <button onClick={onClick} type={type} className={s.Button + ' ' + className}>{children}</button>
})

