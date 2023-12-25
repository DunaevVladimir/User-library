import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import s from './link.module.scss';

type Props = {
  path: string,
  text: string,
}

export const Link = ({path, text}: Props) => {
  return (
    <NavLink to={path}>{text}</NavLink>
  );
}

Link.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
}


