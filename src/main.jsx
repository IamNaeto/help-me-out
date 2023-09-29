import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import "virtual:uno.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx';
import Auth from './pages/Auth';
import VideosRepo from './pages/VideosRepo';
import VideoRepo from './pages/VideoRepo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/VideosRepo" element={<VideosRepo />} />
        <Route path="/VideoRepo" element={<VideoRepo />} />
      </Routes>
     </Router>
  </React.StrictMode>,
)
