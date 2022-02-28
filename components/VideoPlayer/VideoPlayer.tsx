import styles from "./VideoPlayer.module.sass";
import postering from "../../public/assets/img/videoImg.jpg";
// @ts-ignore
import { Player } from "video-react";

interface IVideoPlayer {
  styling?: any;
  videoSrc?: string;
  poster?: string;
  label?: string;
}

const VideoPlayer = ({ videoSrc, styling, poster, label }: IVideoPlayer) => {
  return (
    <div
      className={styles.VideoPlayerWrapper + " VideoPlayerWrapper"}
      style={styling}
    >
      {!!label && <span>{label}</span>}
      <Player
        // playsInline
        poster={poster ? poster : postering.src}
        width={200}
        height={120}
        src={
          videoSrc
            ? videoSrc
            : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        }
      />
    </div>
  );
};

export default VideoPlayer;
