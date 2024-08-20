import React, { useState } from 'react';
import ProgressComponent from './Pro';

const TaskList1 = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { name: newTask, progress: 0 }]);
      setNewTask('');
    }
  };

  const incrementProgress = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index
        ? { ...task, progress: Math.min(task.progress + 10, 100) }
        : task
    ));
  };

  const decrementProgress = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index
        ? { ...task, progress: Math.max(task.progress - 10, 0) } // Ensure progress doesn't go below 0
        : task
    ));
  };

  return (
    <div style={containerStyle}>
      <h1>Task List with Progress</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task"
        style={{ marginBottom: '10px', padding: '10px', width: 'calc(100% - 22px)' }}
      />
      <button onClick={addTask} style={buttonStyle}>
        Add Task
      </button>
      <div style={taskListStyle}>
        {tasks.map((task, index) => (
          <div key={index} style={taskItemStyle}>
            <h2>{task.name}</h2>
            <ProgressComponent completed={task.progress} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => incrementProgress(index)} style={buttonStyle}>
                Increase Progress
              </button>
              <button onClick={() => decrementProgress(index)} style={buttonStyle}>
                Decrease Progress
              </button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  width: '220%',
  margin: 'auto',
  paddingTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  
  overflowX: 'auto',
};

const taskListStyle = {
  marginTop: '20px',
  width: '100%',
  maxHeight: '400px', // Set a maximum height for the task list
 
  overflowX: 'auto', // Enable vertical scrolling
};

const taskItemStyle = {
  marginBottom: '20px',
  background: '#1bdbab',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
 
  overflowX: 'auto',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#8e7dbe',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
};

export default TaskList1;
