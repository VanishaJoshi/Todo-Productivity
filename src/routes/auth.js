import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Auth() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

