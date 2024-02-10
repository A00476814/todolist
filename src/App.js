import React, { useState, useEffect } from 'react';
import { getTasks } from './db';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setTasks(await getTasks());
  };

  return (
    <div>
      <TaskForm onNewTask={fetchTasks} />
      <TaskList tasks={tasks} onDeleteTask={fetchTasks} onTaskUpdate={fetchTasks} />
    </div>
  );
}

export default App;
