import { memo } from "react";
import { NavLink } from "react-router-dom";
import s from './link.module.scss';

type Props = {
  path: string,
  children?: React.ReactNode
}

export const Link = memo(({path, children}: Props) => {
  return (
    <NavLink 
      to={path}
    >
      {children}
    </NavLink>
  );
})

