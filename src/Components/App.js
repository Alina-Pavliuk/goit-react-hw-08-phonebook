import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import stylesApp from './App.module.css';

import { getCurrentUser } from '../redux/operations/authOperations';

import Home from '../Containers/Home/Home';
import Login from '../Containers/Login/Login';
import Registration from '../Containers/Registration/Registration';
import Header from '../Components/Header/Header';
import Contacts from '../Containers/Contacts/Contacts';

import { navigation } from '../constants';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        {/* <Route exact path={navigation.home} component={Home} /> */}
        <PublicRoute path={navigation.login} component={Login} />
        <PublicRoute path={navigation.registration} component={Registration} />
        <PrivateRoute exact to={navigation.contacts} component={Contacts} />
      </Switch>
    </div>
  )
}

export default App;
