import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets';
import Mission from './components/Mission';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="Rockets" element={<Rockets />} />
        <Route path="Mission" element={<Mission />} />
        <Route path="MyProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
