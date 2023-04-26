import './App.css';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const locales = {
  "en-US": require("date-fns/locale/en-US")
};

const localizer = dateFnsLocalizer({
  format, parse, startOfWeek, getDay, locales
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 3, 3),
    end: new Date(2023, 3, 3)
  },
  {
    title: "Call",
    start: new Date(2023, 3, 3),
    end: new Date(2023, 3, 3)
  },
  {
    title: "Restaurant",
    allDay: true,
    start: new Date(2023, 3, 22),
    end: new Date(2023, 3, 22)
  },
  {
    title: "Conference",
    start: new Date(2023, 3, 5),
    end: new Date(2023, 3, 9)
  }
];

function App() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    console.log(newEvent);
    setAllEvents([...allEvents, newEvent]);
    console.log(allEvents);
  }

  return (
    <div className="App">
      <h1>Календарь</h1>
      <h2>Создаем новое событие</h2>
      <div>
        <input
          type="text"
          placeholder="Тема события"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <DatePicker
          placeholderText='StartDate'
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start: start })} />
        <DatePicker
          placeholderText='EndDate'
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end: end })} />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>Добавить событие</button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }} />
    </div>
  );
}

export default App;