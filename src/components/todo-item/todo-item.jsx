import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

import './todo-item.css';

const ToDoItem = ({ text, isCompleted, removeTask, id, completeTask }) => (
  <li className="todo-item">
    <FontAwesomeIcon onClick={() => completeTask(id)} className='mark' icon={isCompleted ? faCheckCircle : faCircle}/>
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <FontAwesomeIcon onClick={() => removeTask(id)} icon={faTimes} />
  </li>
)

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  removeTask: () => {},
  id: 0
}

export default ToDoItem;
