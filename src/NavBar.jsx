import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
function Navbar() {
  return (
    
    <div className="nav-style">
       
     
    <ul>
    <div class="logo">
        <img src="logo.svg" alt="Logo"/>
    </div>
    </ul>
      <ul>
        <li>
          <Link to="/">Taskmanger</Link>
        </li>
        <li>
          <Link to="/streak">Streak</Link>
        </li>
        <li>
          <Link to="/kanban">Kanban</Link>
        </li>
        <li>
          <Link to="/progress">Progressbar</Link>
        </li>
      </ul>
      </div>
  );
}

export default Navbar;
