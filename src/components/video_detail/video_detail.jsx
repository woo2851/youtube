import React from 'react';
import { memo } from 'react';
import styles from "./video_detail.module.css"

const VideoDetail = memo( ({video}) => (
  <section className = {styles.detail}>
    <iframe 
    title = "youtube video player"
    className = {styles.video}
    type="text/html"  
    width="100%"
    height="500px" 
    src= {`https://www.youtube.com/embed/${video.id}`}
    >
    </iframe>
    <h2 className = {styles.title}>{video.snippet.title}</h2>
    <h3 className = {styles.description}>{video.snippet.channelTitle}</h3>
    <pre className = {styles.description}>{video.snippet.description}</pre>
  </section>
))

export default VideoDetail;