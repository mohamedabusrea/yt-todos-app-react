import React, {useState} from 'react';
import PropTypes from 'prop-types'

import './TaskSearchBar.style.scss'
import {saveToDB} from "../../helpers";

const TaskSearchBar = ({setTasks}) => {
  const [inputValue, setInputValue] = useState('');

  const updateInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const addNewTask = () => {
    if (inputValue) {
      //Add the new task then reset the value
      const id = (new Date()).getTime();

      setTasks(prevState => {
        const newData = [
          ...prevState,
          {
            id,
            value: inputValue,
          }
        ];

        saveToDB('tasks', newData);
        return newData;
      });
      setInputValue('');
    }
  }

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      addNewTask();
    }
  }

  return (
    <div className='TaskSearchBar'>
      <input className='TaskSearchBar__input'
             value={inputValue}
             type="text"
             placeholder='قم بإضافة مهمه...'
             onChange={updateInputValue}
             onKeyDown={onKeyDown}/>
      <button className='TaskSearchBar__button'
              onClick={addNewTask}>
        إضافة
      </button>
    </div>);
};

TaskSearchBar.propTypes = {
  setTasks: PropTypes.func,
};

export default TaskSearchBar;