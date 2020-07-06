import React from 'react';

import './styles.scss';
import logo from 'images/Logo.png';

import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav className="page__menu">
      <ul className="page__menu-list">
        <li className="page__menu-list__item">
          <NavLink
            to="/about"
            className="page__menu-list__item-link"
            activeClassName="selected"
          >
            SOBRE MI
          </NavLink>
        </li>

        <li className="page__menu-list__item">
          <NavLink exact to="/" activeClassName="selected-nologo">
            <img
              className={'page__menu-list__item-logo'}
              src={logo}
              alt="Logo, es un casco de astronauta"
              width="50px"
              heigth="50px"
            />
          </NavLink>
        </li>

        <li className="page__menu-list__item">
          <NavLink
            to="/projectlist"
            className="page__menu-list__item-link"
            activeClassName="selected"
          >
            PROYECTOS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;
