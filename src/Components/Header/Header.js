import React from 'react';
import { useSelector } from "react-redux";

import styles from './Header.module.css';

import { navigation } from '../../constants';
import { NavLink } from "react-router-dom";
import UserMenu from '../UserMenu/UserMenu';
import { isLogIn } from '../../redux/selectors/authSelectors';
import Link from '../Link/Link';

const Header = () => {

  const isLogin = useSelector(isLogIn);

  return (
    <header className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navList__item}>
          {/* <NavLink
            to={navigation.home}
            exact
            className={styles.navList__item_link}
            activeClassName={styles.navList__item_active_link}>Home
          </NavLink> */}
        </li>
        <li className={styles.navList__item}>
          <Link
            to={navigation.login}
            className={styles.navList__item_link}
            activeClassName={styles.navList__item_active_link}
            isPublic
          >
            Login
          </Link>
        </li>
        <li className={styles.navList__item}>
          <Link
            to={navigation.registration}
            className={styles.navList__item_link}
            activeClassName={styles.navList__item_active_link}
            isPublic
          >
            Registration
          </Link>
        </li>
        <li className={styles.navList__item}>
          <Link
            to={navigation.contacts}
            className={styles.navList__item_link}
            activeClassName={styles.navList__item_active_link}
            isPrivate
          >
            Contacts
          </Link>
        </li>
      </ul>
      { isLogin && <UserMenu />}
    </header>
  );
};

export default Header;