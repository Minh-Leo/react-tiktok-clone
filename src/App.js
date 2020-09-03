import React, { useState, useEffect } from 'react';
import './App.css';

import Video from './components/Video';
import axios from './axios';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('v2/posts');
      setVideos(response.data);
      return response;
    };
    fetchPosts();
  }, []);

  return (
    <div className='app'>
      <div className='app__videos'>
        {videos.map((video) => (
          <Video
            key={video._id}
            channel={video.channel}
            description={video.description}
            song={video.song}
            shares={video.shares}
            likes={video.likes}
            messages={video.messages}
            url={video.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
