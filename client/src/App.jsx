import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DatePage from './components/pages/DatePage/DatePage';
import TimePage from './components/pages/TimePage/TimePage';
import NavBar from './components/ui/NavBar/NavBar';

function App() {
  return (
    <>
    <NavBar />
        <Routes>
        <Route path="/" element={<TimePage />} />
        <Route path="/second" element={<DatePage />} />
        </Routes>

      </>
  );
}

export default App;
