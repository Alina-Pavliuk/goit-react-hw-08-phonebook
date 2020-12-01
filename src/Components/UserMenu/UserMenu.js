import styles from './UserMenu.module.css';
import React from "react";
import { getUserEmail } from '../../redux/selectors/authSelectors';
import { useSelector, useDispatch } from "react-redux";
import { logOut } from '../../redux/operations/authOperations';

const UserMenu = () => {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut())
  }


  return (
    <div className={styles.containerUserMenu}>
      <p className={styles.emailUserMenu}>{email}</p>
      <button className={styles.buttonUserMenu} type="button" onClick={onLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;