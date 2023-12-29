// components/AudioPlayer.tsx

import React, { useRef, useState } from 'react';

interface Song {
  songName: string;
  singer: string;
  mood: string;
  src: string;
}

interface AudioPlayerProps {
  songs: Song[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ songs }) => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const selectSong = (song: Song) => {
    setSelectedSong(song);
    if (audioRef.current) {
      audioRef.current.src = song.src;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <audio ref={audioRef} />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Playlist</h2>
        <ul className="list-disc text-left">
          {songs.map((song) => (
            <li
              key={song.songName}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => selectSong(song)}
            >
              {song.songName} - {song.singer} ({song.mood})
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            isPlaying ? 'bg-red-500' : ''
          }`}
          onClick={togglePlay}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        {selectedSong && (
          <p className="mt-2">
            Now playing: {selectedSong.songName} - {selectedSong.singer} (
            {selectedSong.mood})
          </p>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
