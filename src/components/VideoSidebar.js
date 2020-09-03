import React, { useState } from 'react';
import './VideoSidebar.css';
import { Favorite, FavoriteBorder, Message, Share } from '@material-ui/icons';

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => setLiked(!liked);

  return (
    <div className='videoSidebar'>
      <div className='videoSidebar__button'>
        {liked ? (
          <Favorite fontSize='large' onClick={handleLike} />
        ) : (
          <FavoriteBorder fontSize='large' onClick={handleLike} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className='videoSidebar__button'>
        <Message fontSize='large' />
        <p>{messages}</p>
      </div>

      <div className='videoSidebar__button'>
        <Share fontSize='large' />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
