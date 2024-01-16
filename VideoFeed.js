import React, { useEffect, useRef } from 'react';

const VideoFeed = () => {
  const videoRef = useRef();

  useEffect(() => {
    const videoElement = videoRef.current;

    const startStreaming = async () => {
      try {
        const response = await fetch('http://127.0.0.1:9001/feed');
        const reader = response.body.getReader();

        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            break;
          }

          const blob = new Blob([value], { type: 'image/jpeg' });
          const imageUrl = URL.createObjectURL(blob);

          // Set the image URL as the source for the video element
          videoElement.src = imageUrl;
          await new Promise(resolve => setTimeout(resolve, 50));
        }
      } catch (error) {
        console.error('Error streaming video:', error);
      }
    };

    startStreaming();

    // Clean up resources on component unmount
    return () => {
      if (videoElement.src) {
        URL.revokeObjectURL(videoElement.src);
      }
    };
  }, []);

  return (
    <div>
      <h1>Video Feed</h1>
      <video ref={videoRef} width="640" height="480" autoPlay playsInline />
    </div>
  );
};

export default VideoFeed;
