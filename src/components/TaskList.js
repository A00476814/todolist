import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDeleteTask, onTaskUpdate }) {
  return (
    <ul>
      {tasks.map(task => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onTaskUpdate={onTaskUpdate} />
      ))}
    </ul>
  );
}

export default TaskList;
