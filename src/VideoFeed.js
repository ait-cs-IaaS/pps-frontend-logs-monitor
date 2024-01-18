// VideoFeed.js

import React from 'react';
import './VideoFeed.css'; // Import the CSS file

const VideoFeed = () => {
  return (
    <div className="video-feed-container">
      <iframe src='http://localhost:9001/feed' title="Video Feed"></iframe>
    </div>
  );
};

export default VideoFeed;
