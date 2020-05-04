import React from 'react';

const Photo = ({ title, thumbnailUrl }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={thumbnailUrl} alt="" />
    </div>
  );
}

export default Photo;
