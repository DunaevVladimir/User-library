import PropTypes from 'prop-types';
import { HTMLInputTypeAttribute } from 'react';
import s from './input.module.scss';

type Props = {
  onChange: (value: string, name: string) => void,
  onFocus?: () => void,
  onBlur?: () => void,
  type?: HTMLInputTypeAttribute,
  theme?: string,
  currentValue: HTMLInputTypeAttribute,
  name: string,
  placeholder?: HTMLInputTypeAttribute,
  error?: string,
  className?: string
}

export function Input({ onChange, onFocus, onBlur, type, theme, currentValue, name, placeholder, error, className}: Props) {

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, name);
  };

  return (
    <>
      <input 
        value={currentValue} 
        onChange={onChangeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type} 
        placeholder={placeholder}
        className={s.Input + ' ' + className}
      />
      {
        error && <span className={s.Error}>{error}</span>
      }
    </>
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.elementType,
  theme: PropTypes.string
}

