import React from 'react';
import styles from'./video_item.module.css'

const VideoItem = ({video, onDetail, display}) => {

  const displayType = display === 'list' ? styles.list : styles.grid

  return(
  <li className = {`${styles.container} ${displayType}`} onClick = {() => onDetail(video)}>
    <div className = {styles.video}>
    <img className = {styles.thumbnail} src= {video.snippet.thumbnails.medium.url} 
    alt="" />
    <div className = {styles.metadata}>
      <p className = {styles.title}>{video.snippet.title}</p>
      <p className = {styles.chanel}>{video.snippet.channelTitle}</p>
    </div>
    </div>
  </li>
  )};

export default VideoItem;