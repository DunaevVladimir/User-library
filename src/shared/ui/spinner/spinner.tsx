import { memo } from 'react';
import s from './spinner.module.scss';

export const Spinner = memo(() => {
  return (
    <div className={s.Container}>
      <div className={s.Spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>  
    </div>
  );
})