import React, { useState } from 'react';
import { addTask } from '../db';

function TaskForm({ onNewTask }) {
  const [inputValue, setInputValue] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask({
      title: inputValue,
      completed: false,
      priority
    });
    setInputValue('');
    setPriority('Medium'); // Reset priority to default after adding a task
    onNewTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
