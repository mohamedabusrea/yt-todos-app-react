import React from 'react';
import PropTypes from 'prop-types';
import DarkThemeToggle from '../DarkThemeToggle/DarkThemeToggle.view';
import SocialLinks from "../SocialLinks/SocialLinks.view";

import './Header.style.scss';

const Header = ({darkModeFlag, setDarkModeFlag}) => {
  return (
    <header className='Header'>
      <DarkThemeToggle darkModeFlag={darkModeFlag}
                       setDarkModeFlag={setDarkModeFlag}/>
      <SocialLinks/>
    </header>
  );
};

Header.propTypes = {
  darkModeFlag: PropTypes.bool,
  setDarkModeFlag: PropTypes.func,
}

Header.defaultProps = {
  darkModeFlag: false,
}

export default Header;
