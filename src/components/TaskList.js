import React from 'react';
import Task from './Task';
import '../App.css';


function TaskList({ tasks, onDeleteTask, onTaskUpdate }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onTaskUpdate={onTaskUpdate} />
      ))}
    </ul>
  );
}

export default TaskList;
