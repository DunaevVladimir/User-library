import PropTypes from 'prop-types';
import { HTMLInputTypeAttribute } from 'react';
import s from './input.module.scss';

type Props = {
  onChange: (value: string, name: string) => void,
  onFocus?: () => void,
  type?: HTMLInputTypeAttribute,
  theme?: string,
  currentValue: HTMLInputTypeAttribute,
  name: string,
  placeholder: HTMLInputTypeAttribute,
  error?: string
}

export function Input({ onChange, onFocus, type, theme, currentValue, name, placeholder, error}: Props) {

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, name);
  };

  return (
    <>
      <input 
        value={currentValue} 
        onChange={onChangeHandler}
        onFocus={onFocus}
        type={type} 
        placeholder={placeholder}
        className={s[theme]}
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

