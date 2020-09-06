import React, {useEffect, useState} from 'react';
import Logo from "./components/Logo/Logo.view";
import TaskSearchBar from "./components/TaskSearchBar/TaskSearchBar.view";
import TaskList from "./components/TaskList/TaskList.view";
import SocialLinks from "./components/SocialLinks/SocialLinks.view";
import Footer from "./components/Footer/Footer.view";

import './App.scss';

function App() {
  const fetchData = () => {
    const data = localStorage.getItem('tasks');

    return data ? JSON.parse(data) : [];
  }

  const [tasks, setTasks] = useState(fetchData());

  useEffect(() => {
    saveToDB();
  }, [tasks]);

  const saveToDB = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  return (
    <div className="App">
      <SocialLinks/>
      <div className="App__wrapper">
        <Logo/>
        <TaskSearchBar setTasks={setTasks}/>
        <TaskList tasks={tasks}
                  setTasks={setTasks}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

//todo finish the basic task
// add language ar/en
// add light/dark theme
