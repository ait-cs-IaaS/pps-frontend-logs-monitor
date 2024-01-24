import React, { useState, useEffect } from 'react';

const VideoFeed = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timestamp = new Date().toLocaleString();
      const logType =
        Math.random() < 0.2 ? 'Info' :
        Math.random() < 0.4 ? 'Warning' :
        Math.random() < 0.6 ? 'Access' :
        Math.random() < 0.8 ? 'Breach' :
        'lockdown';
      const logContent = `New log message ${Math.floor(Math.random() * 100)}`;
      const newLog = { timestamp, logType, logContent };

      setLogs(prevLogs => {
        const newLogs = [newLog, ...prevLogs.slice(0, 45)]; // Keep a maximum of 10 logs
        return newLogs;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="video-feed-container">
      <iframe
        src='http://localhost:9001/feed'
        title='Video Feed'
        width='600'
        height='400'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
      ></iframe>

      <div className='random-logs-container'>
        <h2>Camera Logs</h2>
        <ul>
          {logs.map((log, index) => (
            <li key={index} className={`log-item ${log.logType}`}>
              <strong>{log.timestamp}</strong> - {log.logType}: {log.logContent}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoFeed;
