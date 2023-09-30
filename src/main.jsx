import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import "virtual:uno.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx';
import Auth from './pages/Auth';
import VideosRepo from './pages/VideosRepo';
import VideoRepo from './pages/VideoRepo';
import RecordReady from './pages/RecordReady';
import App from './popup/App';
import ScreenRecording from './popup/RecordTab';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/VideosRepo" element={<VideosRepo />} />
        <Route path="/VideoRepo" element={<VideoRepo />} />
        <Route path="/RecordReady" element={<RecordReady />} />
        <Route path="/Popup" element={<App />} />
        <Route path="/Screen" element={<ScreenRecording />} />
      </Routes>
     </Router>
  </React.StrictMode>,
)
