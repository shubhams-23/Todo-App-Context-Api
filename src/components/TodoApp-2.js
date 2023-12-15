// TodoList.js
import React from 'react';
import { useTodoContext } from './TodoApp-1';

const TodoList = () => {
  const { state, dispatch } = useTodoContext();

  const handleAdd = () => {
    const newTask = { id: state.tasks.length + 1, text: 'New Task', completed: false };
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };

  const handleRemove = id => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  const handleToggleComplete = id => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
  };

  const handleEdit = (id, newText) => {
    dispatch({ type: 'EDIT_TASK', payload: { id, newText } });
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Task</button>
      <ul>
        {state.tasks.map(task => (
          <li key={task.id}>
            {/* <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            /> */}
            <input
              type="text"
              value={task.text}
              onChange={e => handleEdit(task.id, e.target.value)}
            />
            <button onClick={() => handleRemove(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
