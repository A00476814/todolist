import React from 'react';
import { deleteTask, updateTask } from '../db';
import '../App.css';


function Task({ task, onTaskUpdate }) {
    const handleDelete = async () => {
      await deleteTask(task.id);
      onTaskUpdate();
    };
  
    const handlePriorityChange = async (e) => {
      await updateTask(task.id, { priority: e.target.value });
      onTaskUpdate();
    };
  
    const toggleCompleted = async () => {
      await updateTask(task.id, { completed: !task.completed });
      onTaskUpdate();
    };
  
    // Function to get priority class based on task priority
    const getPriorityClass = (priority) => {
      switch (priority) {
        case 'High':
          return 'priority-high';
        case 'Medium':
          return 'priority-medium';
        case 'Low':
          return 'priority-low';
        default:
          return '';
      }
    };
  
    return (
      <div className={`task-item ${getPriorityClass(task.priority)} ${task.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleCompleted}
          className="task-checkbox"
        />
        <span className="task-title">{task.title}</span>
        <select
          className="task-priority"
          value={task.priority}
          onChange={handlePriorityChange}
          disabled={task.completed} // Optional: Disable priority change for completed tasks
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button className="task-delete" onClick={handleDelete}>&#x1F5D1;</button> {/* Unicode trash bin icon */}
      </div>
    );
  }
  
  export default Task;