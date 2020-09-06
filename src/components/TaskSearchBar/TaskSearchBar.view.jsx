import React, {useState} from 'react';

import './TaskSearchBar.style.scss'

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
        return [
          ...prevState,
          {
            id,
            value: inputValue,
          }
        ]
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

export default TaskSearchBar;