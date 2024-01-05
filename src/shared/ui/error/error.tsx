import { memo } from 'react';
import s from './error.module.scss';

type Props = {
  text: string
}

export const Error = memo(({ text }: Props) => {
  return <span className={s.Error}>{text}</span>
})
