// // LogViewer.js

// import React, { useEffect, useState } from 'react';
// import './LogViewer.css';

// const LogViewer = ({ apiEndpoint, columnTitle }) => {
//   const [logs, setLogs] = useState([]);

//   useEffect(() => {
//     const fetchLogs = async () => {
//       try {
//         const response = await fetch(apiEndpoint);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();

//         if (Array.isArray(data)) {
//           setLogs(data);
//         } else {
//           console.error('Invalid logs data format:', data);
//           setLogs([]);
//         }
//       } catch (error) {
//         console.error('Error fetching logs:', error.message);
//         setLogs([]);
//       }
//     };

//     fetchLogs();
//   }, [apiEndpoint]);

//   return (
//     <div className="log-column">
//       <h2>{columnTitle}</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Timestamp</th>
//             <th>Request</th>
//             <th>Source IP</th>
//             <th>Log Type</th>
//             <th>Log Content</th>
//           </tr>
//         </thead>
//         <tbody>
//           {logs.map((log, index) => (
//             <tr key={index} className="log-entry">
//               <td>{log.timestamp}</td>
//               <td>{log.request}</td>
//               <td>{log.source_ip}</td>
//               <td>{log.log_type}</td>
//               <td>{log.log_content}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LogViewer;


// LogViewer.js

import React, { useEffect, useState } from 'react';
import './LogViewer.css';

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
    <div className="log-column">
      <h2>{columnTitle}</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index} className="log-entry">
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

