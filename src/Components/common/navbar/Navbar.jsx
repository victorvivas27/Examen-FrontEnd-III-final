import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVBAR_SECTION } from '../../../utils/ArrayNavBar';
import './Navbar.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useMyContextGlobal } from '../../../context/global.context';

const iconDh = "./DH.ico"

const Navbar = () => {
  const { state, dispatch } = useMyContextGlobal();
  const location = useLocation();

  const getThemeClass = () => {
    return state.theme ? 'light' : 'dark';
  };
  const getThemeClassNavbar = () => {
    return state.themenavbar ? 'light-navbar' : 'dark-navbar';
  };

  return (
    <nav className={`navbar-container ${getThemeClass()}`}>
      <ul className="navbar-ul">
        <span className='icon-dh'><img src={iconDh} alt="icono de la app" className="icono-dh" />Odonto</span>
        {NAVBAR_SECTION.map((label, index) => (
          <li key={index} className={`${location.pathname === label.path ? 'active' : ''} ${getThemeClass()}`}>
            {label.internal ? (
              <Link to={label.path} className={getThemeClassNavbar()}>{label.name}</Link>
            ) : (
              <a href={label.path} target="_blank" rel="noopener noreferrer">{label.name}</a>
            )}
          </li>
        ))}
        <span className="icon-container" onClick={() => dispatch({ type: 'CHANGE_THEME' })}>
          {state.icontheme ? <DarkModeIcon style={{ fontSize: 40 }} /> : <LightModeIcon style={{ fontSize: 40 }} />}
        </span>
      </ul>
    </nav>
  );
};

export default Navbar;