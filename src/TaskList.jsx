import React, { useState } from 'react';
import ProgressComponent from './Pro';

const TaskList = () => {
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
        ? { ...task, progress: Math.max(task.progress - 10, 0) }
        : task
    ));
  };

  const getTaskStatus = (progress) => {
    if (progress === 0) return 'To Do';
    if (progress > 0 && progress < 100) return 'Doing';
    if (progress === 100) return 'Done';
  };

  return (
    <div style={{ width: '100%', margin: 'auto', paddingTop: '0px' }}>
      <h1>Task List with Kanban Board</h1>
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
      <div style={kanbanBoardStyle}>
        {['To Do', 'Doing', 'Done'].map((status) => (
          <div key={status} style={kanbanColumnStyle}>
            <h2>{status}</h2>
            <div style={taskListStyle}>
              {tasks
                .filter((task) => getTaskStatus(task.progress) === status)
                .map((task, index) => (
                  <div key={index} style={taskItemStyle}>
                    <h3>{task.name}</h3>
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
        ))}
      </div>
    </div>
  );
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

const kanbanBoardStyle = {
  display: 'flex',
  width:'100%',
  height:'100%',
  justifyContent: 'space-between',
  marginTop: '20px',
  
  overflowY: 'auto',
};

const kanbanColumnStyle = {
  width: '20%',
  padding: '40px',
  backgroundColor: '#dab617',
  borderRadius: '10px',
  height: '400px', // Fixed height for each column
  overflowY: 'auto',
  overflowX: 'auto', // Enable vertical scrolling within each column
};

const taskListStyle = {
  maxHeight: '100%', // Ensure tasks take up the full height of the column
  overflowY: 'auto',
  overflowX: 'auto', 
  // Allow scrolling within the task list
};

const taskItemStyle = {
  marginBottom: '20px',
  background: '#3dda0e',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  overflowY: 'auto',
  overflowX: 'auto',
};

export default TaskList;
