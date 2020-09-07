import React, {Fragment, useState} from 'react';
import TaskSearchBar from "../TaskSearchBar/TaskSearchBar.view";
import TaskList from "../TaskList/TaskList.view";
import {fetchData} from "../../helpers";

const Tasks = () => {
  const [tasks, setTasks] = useState(fetchData('tasks') || []);

  return (
    <Fragment>
      <TaskSearchBar setTasks={setTasks}/>
      <TaskList tasks={tasks}
                setTasks={setTasks}/>
    </Fragment>
  );
};

export default Tasks;