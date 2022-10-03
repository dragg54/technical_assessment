import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateEvent from './pages/CreateEvent';
import Event from './pages/Event';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App