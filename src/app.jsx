import {React, useState, useEffect} from 'react';
import VideoList from './components/video_list/video_list';

function App() {

  const [videos, setVideos] = useState([])

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
    <VideoList videos = {videos}/>
  );

}

export default App;
