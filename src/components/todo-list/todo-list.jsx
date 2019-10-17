import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ taskList, removeTask, completeTask }) => (
  <ul className="todo-list">
    {taskList.map(({ id, text, isCompleted }) => (
      <ToDoItem removeTask={removeTask} completeTask={completeTask} id={id} key={id} text={text} isCompleted={isCompleted}/>
    ))}
  </ul>
)

ToDoList.propTypes = {
  taskList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
}

ToDoList.defaultProps = {
  taskList: [],
  removeTask: () => {},
  completeTask: () => {},
}

export default ToDoList;
