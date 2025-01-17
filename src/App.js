import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MovieList from './components/MovieList';
import Popular from './components/Popular';  
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/popular" element={<Popular />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
