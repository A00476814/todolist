import React from 'react';
import { deleteTask, updateTask } from '../db';

function Task({ task, onDeleteTask, onTaskUpdate }) {
  const handleDelete = async () => {
    await deleteTask(task.id);
    onDeleteTask();
  };

  const handlePriorityChange = async (e) => {
    await updateTask(task.id, { priority: e.target.value });
    onTaskUpdate();
  };

  const toggleCompleted = async () => {
    await updateTask(task.id, { completed: !task.completed });
    onTaskUpdate();
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleCompleted}
      />
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
