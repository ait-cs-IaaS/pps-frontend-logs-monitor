import React from 'react';
import LogViewer from './LogViewer';
import VideoFeed from './VideoFeed';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div className="app-grid-container">
      <div className="app-container">
        <h1>Access Control Panel</h1>
        <div className="log-viewers-container">
          <LogViewer apiEndpoint="http://127.0.0.1:5000/api/get_data" columnTitle="Logs" />
        </div>
      </div>

      <div className="app-container">
        <h1>Facial Recognition System</h1>
        <div className="log-viewers-container">
          <LogViewer apiEndpoint="http://127.0.0.1:7001/api/get_data" columnTitle="Logs" />
        </div>
      </div>

      <div className="app-container">
        <h1>Central Access Control System</h1>
        <div className="log-viewers-container">
          <LogViewer apiEndpoint="http://127.0.0.1:8001/api/get_data" columnTitle="Logs" />
        </div>
      </div>

      {/* VideoFeed */}
      <div className="app-container">
        <h1>VideoFeed</h1>
        <div className="video-feed-container">
          <VideoFeed />
        </div>
      </div>
    </div>
  );
};

export default App;
