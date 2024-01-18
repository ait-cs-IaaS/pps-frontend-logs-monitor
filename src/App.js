import React from 'react';
import LogViewer from './LogViewer';
import VideoFeed from './VideoFeed';
import './App.css';

const App = () => {
  return (
    <div className="container">
      {/* Column 1 */}
      <div className="column-container">
        <h1>Your best kitchen</h1>
        <div className="log-viewers-container">
          <LogViewer apiEndpoint="http://127.0.0.1:5000/api/get_data" columnTitle="Burger " />
        </div>
      </div>

      {/* Column 2 */}
      <div className="column-container">
        <div className="log-viewers-container">
          <LogViewer apiEndpoint="http://127.0.0.1:7001/api/get_data" columnTitle="BBC " />
        </div>
      </div>

      {/* Column 3 */}
      <div className="column-container">
        <div className="log-viewers-container">
          <LogViewer apiEndpoint="http://127.0.0.1:8001/api/get_data" columnTitle="KFC " />
        </div>
      </div>

      {/* Column 4 (VideoFeed) */}
      <div className="column-container">
        <VideoFeed />
      </div>
    </div>
  );
};

export default App;