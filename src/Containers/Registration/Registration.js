import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from '../../constants';
import { registerOperation } from '../../redux/operations/authOperations';

import { useDispatch } from "react-redux";
import styles from './Registration.module.css';

const initialState = {
  name: '',
  email: '',
  password: ''
}

const Registration = () => {

  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const inputHandlerRegistration = ({ target }) => {
    const { name, value } = target;
    setForm(state => ({ ...state, [name]: value }));
  }

  const submitRegistration = (e) => {
    e.preventDefault();
    dispatch(registerOperation(form));
    setForm(initialState);
  }

  return (
    <div>
      <h2 className={styles.registrationTitle}>Registration</h2>
      <form autoComplete="on" className={styles.registrationForm} onSubmit={submitRegistration}>
        <label className={styles.registrationLabel}>
          <span className={styles.registrationLabelSpan}>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            suggested="name"
            value={form.name}
            className={styles.registrationInput}
            onChange={inputHandlerRegistration} />
        </label>
        <label className={styles.registrationLabel}>
          <span className={styles.registrationLabelSpan}>Email</span>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            suggested="email"
            value={form.email}
            className={styles.registrationInput}
            onChange={inputHandlerRegistration} />
        </label>
        <label className={styles.registrationLabel}>
          <span className={styles.registrationLabelSpan}>Password</span>
          <input
            type="password"
            name="password"
            placeholder="Enter email"
            suggested="password"
            value={form.password}
            className={styles.registrationInput}
            onChange={inputHandlerRegistration} />
        </label>
        <button type="submit" className={styles.registrationButton}>Sing Up</button>
      </form>
      <p className={styles.registrationMessage}>If you already have an account please <NavLink to={navigation.login}>LOGIN</NavLink></p>
    </div>
  );
};

export default Registration;