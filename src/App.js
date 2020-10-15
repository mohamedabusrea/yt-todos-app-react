import React, {useState} from 'react';
import Header from "./components/Header/Header.view";
import Footer from "./components/Footer/Footer.view";
import {fetchData} from "./helpers";

import './App.scss';
import Tasks from "./components/Tasks/Tasks.view";

function App() {
  const [darkModeFlag, setDarkModeFlag] = useState(fetchData('darkModeFlag'));

  const getAppClasses = `App ${darkModeFlag ? 'App--isDark' : ''}`;

  return (
    <main className={getAppClasses}>
      <Header darkModeFlag={darkModeFlag}
              setDarkModeFlag={setDarkModeFlag}/>
      <div className="App__wrapper">
        <Tasks/>
        <Footer/>
      </div>
    </main>
  );
}

export default App;

/*Todo
 * Create the project
 * Structure the app and create the components
 * show/hide completed tasks
 * add light/dark theme
 * PWA
 * update readme file
 * update video's link in the footer
 */
