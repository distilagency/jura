import React from 'react';

export const Video = (props) => {
  const {
    src,
    type = 'video/mp4',
    disableOnTabletDown = true,
    className
  } = props;
  const classNameStr = `video-background ${disableOnTabletDown && 'disable-tablet-down'} ${className}`;
  return (
    <video className={classNameStr} preload autoPlay muted loop style={{top: 0}}>
      <source src={src} type={type} />
    </video>
  );
};
