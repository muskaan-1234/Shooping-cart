import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, clearAll } from './Slices/cartSlice';
import './TodoList.css';

const TodoList = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch(); 

  const tasks = useSelector((state) => state.cart.items);

  const AddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addItem(newTask)); 
      setNewTask('');
    }
  };
//.trim used with strrings to remove white space from starting and ending
  const DeleteTask = (index) => {
    dispatch(deleteItem(index)); 
  };

  const ClearAll = () => {
    dispatch(clearAll()); 
  };


  return (
    <div className="todo-container item-center">
      <h1>My To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-button" onClick={AddTask}>
          Add Item
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              className="delete-button"
              onClick={() => DeleteTask(index)}
            >
              Delete Item
            </button>
          </li>
        ))}
      </ul>
      <button className="clear-button" onClick={ClearAll}>
        Clear All
      </button>
    </div>
  );
};

export default TodoList;
