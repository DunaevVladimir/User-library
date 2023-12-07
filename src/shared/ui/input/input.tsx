import PropTypes from 'prop-types';
import { HTMLInputTypeAttribute } from 'react';
import s from './input.module.scss';

type Props = {
  onChange: () => void,
  type?: HTMLInputTypeAttribute,
  theme?: string
}

export function Input({ onChange, type, theme}: Props) {
  return <input onChange={onChange} type={type} className={s[theme]}/>
}

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.elementType,
  theme: PropTypes.string
}

