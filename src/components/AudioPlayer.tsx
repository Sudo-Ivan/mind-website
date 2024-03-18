import React, { useState, useEffect, useRef } from 'react';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div style={styles.audioPlayer}>
      <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} preload="metadata" />
      <button onClick={togglePlayPause} style={styles.playPauseButton}>
        {isPlaying ? (
          // Pause icon
          <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
        ) : (
          // Play icon
          <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M8 5v14l11-7z"></path></svg>
        )}
      </button>
      <input
        type="range"
        value={currentTime}
        step="1"
        min="0"
        max={audioRef.current?.duration || 100}
        onChange={handleTimeChange}
        style={styles.seekBar}
      />
      <div style={styles.time}>
        {formatTime(currentTime)} / {audioRef.current ? formatTime(audioRef.current.duration) : '0:00'}
      </div>
    </div>
  );
};

const styles = {
  audioPlayer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '300px',
    margin: 'auto',
    padding: '2px', // Reduced padding
    backgroundColor: '#333',
    borderRadius: '10px',
    marginBottom: '15px',
    color: 'white',
  },
  playPauseButton: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0', // Ensure minimal padding around the button
  },
  seekBar: {
    width: '100%',
    margin: '5px 0', // Reduced margin around the seek bar
    '-webkit-appearance': 'none',
    appearance: 'none',
    backgroundColor: '#666',
    outline: 'none',
    opacity: '0.7',
    height: '2px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  time: {
    marginTop: '5px', // Adjusted margin for time text
    fontSize: '14px', // Adjust font size if necessary for a slimmer look
  },
};

export default AudioPlayer;