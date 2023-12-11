import PropTypes from 'prop-types';
import { HTMLInputTypeAttribute } from 'react';
import s from './input.module.scss';

type Props = {
  onChange: (value: string, name: string) => void,
  type?: HTMLInputTypeAttribute,
  theme?: string,
  currentValue: HTMLInputTypeAttribute,
  name: string,
  placeholder: HTMLInputTypeAttribute,
}

export function Input({ onChange, type, theme, currentValue, name, placeholder}: Props) {

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, name);
  };

  return <input 
    value={currentValue} 
    onChange={onChangeHandler} 
    type={type} 
    placeholder={placeholder}
    className={s[theme]}
  />
}

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.elementType,
  theme: PropTypes.string
}

