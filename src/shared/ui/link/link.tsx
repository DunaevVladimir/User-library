import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import s from './link.module.scss';

type Props = {
  path: string,
  children?: React.ReactNode | string
}

export const Link = ({path, children}: Props) => {
  return (
    <NavLink to={path}>{children}</NavLink>
  );
}

Link.propTypes = {
  path: PropTypes.string,
  children: PropTypes.element.isRequired
}


