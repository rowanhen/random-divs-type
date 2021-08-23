import RandomVideosProps from "./RandomVideosProps";
import "../styles/RandomVideos.css";
import { useEffect } from "react";

export default function RandomVideos() {
  useEffect(() => {
    const videos = Array.from(
      document.getElementsByClassName(
        "video_container"
      ) as HTMLCollectionOf<HTMLElement>
    );
    const Width = (document.getElementById("container") as HTMLElement)
      .offsetWidth;
    const Height = (document.getElementById("container") as HTMLElement)
      .offsetHeight;
    function fadeIn(thisVideo: HTMLElement) {
      thisVideo.classList.add("fade-in");
      thisVideo.classList.remove("fade-out");
    }
    function fadeOut(thisVideo: HTMLElement) {
      thisVideo.classList.add("fade-out");
      thisVideo.classList.remove("fade-in");
    }
    function randomlyPlaced() {
      videos.forEach((thisVideo) => {
        setInterval(function () {
          setTimeout(function () {
            thisVideo.classList.add("fade-in");
            const randomTop = Math.round(Math.random() * Height) - 20;
            const randomLeft = Math.round(Math.random() * Width) - 20;
            thisVideo.style.top = randomTop + "px";
            thisVideo.style.left = randomLeft + "px";
            thisVideo.style.zIndex = "4";
            fadeIn(thisVideo);
          }, 1000);
          fadeOut(thisVideo);
        }, Math.floor(Math.random() * 10000) + 5000);
      });
    }
    randomlyPlaced();

    const letters = Array.from(
      document.getElementsByClassName(
        "landing_text"
      ) as HTMLCollectionOf<HTMLElement>
    );
    function changingZ() {
      for (let i = 0; i < letters.length; i++) {
        if (i % 2 === 0) {
          letters[i].style.zIndex = "5";
        } else {
          letters[i].style.zIndex = "3";
        }
      }
    }
    changingZ();
  });
  return (
    <div className="container" id="container">
      {"hello".split("").map((letter) => (
        <p className="landing_text" key={letter}>
          {letter}
        </p>
      ))}
      {RandomVideosProps.map((video) => (
        <div className="video_container" key={video.id}></div>
      ))}
    </div>
  );
}
