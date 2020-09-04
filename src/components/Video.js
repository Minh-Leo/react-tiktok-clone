import React, { useState, useRef } from 'react';

import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import './Video.css';

const Video = ({
  channel,
  description,
  url,
  likes,
  shares,
  song,
  messages,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className='video'>
      <video
        onClick={handleVideoPress}
        className='video__player'
        loop
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
