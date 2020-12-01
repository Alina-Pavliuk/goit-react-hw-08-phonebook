import styles from './Login.module.css';
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { navigation } from '../../constants';
import { useDispatch, useSelector } from "react-redux";
import { logIn } from '../../redux/operations/authOperations';
import { isLogIn } from '../../redux/selectors/authSelectors';

const initialState = {
  email: '',
  password: ''
}

const Login = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const inputHandlerLogin = ({ target }) => {
    const { name, value } = target;
    setForm(state => ({ ...state, [name]: value }))
  }

  const submitLogin = (e) => {
    e.preventDefault()
    dispatch(logIn(form));
    setForm(initialState);
  }

  return (
    <div>
      <h2 className={styles.loginTitle}>Login</h2>
      <form autoComplete="on" className={styles.loginForm} onSubmit={submitLogin}>
        <label className={styles.loginLabel}>
          <span className={styles.loginLabelSpan}>Email</span>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            suggested="email"
            value={form.email}
            className={styles.loginInput}
            onChange={inputHandlerLogin} />
        </label>
        <label className={styles.loginLabel}>
          <span className={styles.loginLabelSpan}>Password</span>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            suggested="password"
            value={form.password}
            className={styles.loginInput}
            onChange={inputHandlerLogin} />
        </label>
        <button type="submit" className={styles.loginButton}>Login</button>
      </form>
      <p className={styles.loginMessage} >If you don't have an account please <NavLink to={navigation.registration}>Sing UP</NavLink></p>
    </div>
  );
};

export default Login;