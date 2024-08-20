// src/CalendarComponent.jsx

import  { useState } from 'react';
import Calendar from 'react-calendar';
import './styles.css'


function CalendarComponent() {
  
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="calendar-container">
      <h1>My Calendar</h1>
      <Calendar onChange={onChange} value={date} />
      <p className="selected-date">Selected Date: {date.toDateString()}</p>
    </div>
  );
}

export default CalendarComponent;
