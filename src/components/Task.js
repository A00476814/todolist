import React from 'react';
import { deleteTask, updateTask } from '../db';

function Task({ task, onDeleteTask, onTaskUpdate }) {
  const handleDelete = async () => {
    await deleteTask(task.id);
    onDeleteTask();
  };

  const handlePriorityChange = async (e) => {
    await updateTask(task.id, { priority: e.target.value });
    onTaskUpdate(); // This will trigger re-fetching of tasks in App.js
  };

  return (
    <li>
      {task.title}
      <select value={task.priority} onChange={handlePriorityChange}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Task;
