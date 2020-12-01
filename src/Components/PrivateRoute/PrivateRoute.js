import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

import { navigation } from '../../constants';
import { isLogIn } from '../../redux/selectors/authSelectors';

const PrivateRoute = (props) => useSelector(isLogIn)
  ? <Route {...props} />
  : <Redirect to={navigation.login} />

export default PrivateRoute;
