import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    
    <nav>
      <ul>
        <li>
          <Link to="/">Taskmanger</Link>
        </li>
        <li>
          <Link to="/streak">streak</Link>
        </li>
        <li>
          <Link to="/kanban">kanban</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
