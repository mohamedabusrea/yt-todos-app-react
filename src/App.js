import React, {useState} from 'react';
import Logo from "./components/Logo/Logo.view";
import Header from "./components/Header/Header.view";
import Footer from "./components/Footer/Footer.view";
import {fetchData} from "./helpers";

import './App.scss';
import Tasks from "./components/Tasks/Tasks.view";

function App() {
  const [darkModeFlag, setDarkModeFlag] = useState(fetchData('darkModeFlag'));

  const getAppClasses = `App ${darkModeFlag ? 'App--isDark' : ''}`;

  return (
    <div className={getAppClasses}>
      <Header darkModeFlag={darkModeFlag}
              setDarkModeFlag={setDarkModeFlag}/>
      <div className="App__wrapper">
        <Logo/>
        <Tasks/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

/*todo
 * update readme file
 * update video's link in footer
 *PWA
 *show/hide completed tasks
 *add light/dark theme
 *Structure the app and create the components
 *Create the project
 */
