import s from './spinner.module.scss';

export function Spinner() {
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
}