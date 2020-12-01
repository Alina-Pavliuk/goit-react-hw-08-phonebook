import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { isLogIn } from '../../redux/selectors/authSelectors';

const Link = ({ isPrivate, isPublic, ...navProps }) => {
  const isLogin = useSelector(isLogIn);

  if (isPrivate) {
    return isLogin ? <NavLink {...navProps} /> : null;
  }

  if (isPublic) {
    return isLogin ? null : <NavLink {...navProps} />;
  }

  return <NavLink {...navProps} />;
}

export default Link;
