import React, { useEffect, useState } from 'react';

const LogViewer = ({ apiEndpoint, columnTitle }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch(apiEndpoint);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setLogs(data);
        } else {
          console.error('Invalid logs data format:', data);
          setLogs([]);
        }
      } catch (error) {
        console.error('Error fetching logs:', error.message);
        setLogs([]);
      }
    };

    fetchLogs();
  }, [apiEndpoint]);

  return (
    <div className="log-column animate-log-container"> {/* Add animate-log-container class */}
      <h2>{columnTitle}</h2>
      <ul>
        {logs.map((log, index) => (
          <li
            key={index}
            className={`log-item ${log.logType} animate-log`} // Add animate-log class
            style={{ animationDelay: `${index * 2}s` }} // Adjust the delay as needed
          >
            <strong>Timestamp:</strong> {log.timestamp} <br />
            <strong>Request:</strong> {log.request} <br />
            <strong>Source IP:</strong> {log.source_ip} <br />
            <strong>Log Type:</strong> {log.log_type} <br />
            <strong>Log Content:</strong> {log.log_content}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogViewer;
