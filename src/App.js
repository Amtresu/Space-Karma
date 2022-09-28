import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="Rockets" element={<Rockets />} />
        <Route path="Missions" element={<Missions />} />
        <Route path="MyProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
