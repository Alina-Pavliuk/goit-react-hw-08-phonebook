import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

import { navigation } from '../../constants';
import { isLogIn } from '../../redux/selectors/authSelectors';

const PublicRoute = (props) => useSelector(isLogIn)
  ? <Redirect to={navigation.contacts} />
  : <Route {...props} />

export default PublicRoute;
