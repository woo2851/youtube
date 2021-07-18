import {React, useState, useEffect} from 'react';
import VideoList from './components/video_list/video_list';
import NavHeader from './components/nav/nav_header';
import VideoDetail from './components/video_detail/video_detail';
import styles from './app.module.css'

function App() {

  const [videos, setVideos] = useState([])
  const [detailVideo, setdetailVideo] = useState(null)

  let display = detailVideo ? "list" : "grid"

  const onDetail = (detail) => {
    setdetailVideo(detail)
  }

  const onGrid = () => {
    if (display === "list"){
      setdetailVideo(null)
      display = "grid"
    }
  }

  const onFetch = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCV08NmvhVK7OZCaDF5NVinvjsmfq79t9Y&part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCV08NmvhVK7OZCaDF5NVinvjsmfq79t9Y`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyCV08NmvhVK7OZCaDF5NVinvjsmfq79t9Y", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

    
  }, [])

  return (
    <>
    <NavHeader fetch = {onFetch} onGrid = {onGrid}/>
    <div className = {styles.content}>
    {detailVideo && <div className = {styles.detail}>
        {<VideoDetail video = {detailVideo}/>}
      </div>}
      <div className = {styles.list}>
        <VideoList videos = {videos} 
                  onDetail = {onDetail} 
                  display = {display}/>
      </div>
    </div>
    </>
  );

}

export default App;
