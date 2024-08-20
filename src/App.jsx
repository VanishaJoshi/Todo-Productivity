
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar'
import Header from './Header';
import CalendarComponent from './Calender';

import App1 from './App1';

import './App.css'
import TaskList1 from './TaskList1';



function App() {
  return (
    
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/streak" element={<CalendarComponent />} />
       
        <Route path="/kanban" element={<App1/>} />
        <Route path="/progress" element={<TaskList1/>} />
           
           
          
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
