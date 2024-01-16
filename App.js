// App.js

import React from 'react';
import LogViewer from './LogViewer';
import VideoFeed from './VideoFeed';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Your best kitchen</h1>
      <div className="log-viewers-container">
        <LogViewer apiEndpoint="http://127.0.0.1:5000/api/get_data" columnTitle="Burger " />
        <LogViewer apiEndpoint="http://127.0.0.1:7001/api/get_data" columnTitle="BBC " />
        <LogViewer apiEndpoint="http://127.0.0.1:8001/api/get_data" columnTitle="KFC " />
      </div>
      
      {/* Include VideoFeed component */}
      <VideoFeed />
    </div>
  );
};

export default App;
