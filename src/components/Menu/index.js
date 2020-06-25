import React from 'react';

import './styles.scss';
import logo from '../../images/Logo.png';

import { Link } from 'wouter';

function Menu(props) {
  console.log(props);
  return (
    <nav className="page__menu">
      <ul className="page__menu-list">
        <li className="page__menu-list__item" onClick={props.toogleAbout}>
          <Link href="/sobremi">
            <a className="page__menu-list-link">SOBRE MI</a>
          </Link>
        </li>
        {/* <li className="page__menu-list__item">Habilidades</li> */}
        <li className="page__menu-list__item">
          <img
            className="page__menu-list__item__logo"
            src={logo}
            alt="Logo, es un casco de astronauta"
            width="50px"
            heigth="50px"
          />
        </li>
        <li className="page__menu-list__item">
          <Link href="/contacto">
            <a className="page__menu-list-link">CONTACTO</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;
