import React from "react";
import { useEffect, useState } from "react";
import "./Background.css";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";
import video6 from "../../assets/video6.mp4";

function Background() {
  const videos = [video1, video2, video3, video4, video5, video6];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowVideo(false);
      setTimeout(() => {
        setCurrentVideoIndex(
          (currentIndex) => (currentIndex + 1) % videos.length
        );
        setShowVideo(true);
      }, 2000);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [videos.length]);

  const currentVideoSrc = videos[currentVideoIndex];

  return (
    <div id="video-container">
      <video
        id="bg-video"
        autoPlay
        playsInline
        loop
        muted
        src={currentVideoSrc}
        className={showVideo ? "show" : "hide"}
        onLoadedData={() => setShowVideo(true)}
      />
    </div>
  );
}

export default Background;