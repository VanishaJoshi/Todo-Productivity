
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar'
import Header from './Header';
import CalendarComponent from './Calender';
import KanbanBoard from './kanban';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element=
          {
          <>  
          <div>
              <Header style={{ marginLeft: '0px' }}/>
              <CalendarComponent style={{ marginLeft: '20px' }} />
            </div>
           
           
           </>
          } />
          <Route path="/kanban" element={<KanbanBoard />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
