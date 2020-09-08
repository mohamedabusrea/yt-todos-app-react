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

/*todo finish the basic task
 * PWA
 * update readme file
 * update video's link in footer
 *show/hide completed tasks
 *add light/dark theme
 */
