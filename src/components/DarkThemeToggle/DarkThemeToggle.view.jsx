import React from 'react';
import PropTypes from 'prop-types';

import './DarkThemeToggle.style.scss';
import {saveToDB} from "../../helpers";

const DarkThemeToggle = ({darkModeFlag, setDarkModeFlag}) => {
  const toggleDarkMode = () => {
    const newData = !darkModeFlag;

    setDarkModeFlag(newData);
    saveToDB('darkModeFlag', newData);
  };

  const getElementClasses = `DarkThemeToggle ${darkModeFlag ? 'DarkThemeToggle--isActive' : ''}`;

  return (
    <div className={getElementClasses}
         onClick={toggleDarkMode}>
      {darkModeFlag ?
        <span>إيقاف الوضع الليلي</span> :
        <span>تفعيل الوضع الليلي</span>}
    </div>
  );
};

DarkThemeToggle.propTypes = {
  darkModeFlag: PropTypes.bool,
  setDarkModeFlag: PropTypes.func,
}

export default DarkThemeToggle;
