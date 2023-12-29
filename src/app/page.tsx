// pages/index.tsx
'use client'
import React from 'react';
import AudioPlayer from './AudioPlayer';

const Home: React.FC = () => {
  const songList = [
    {
      songName: 'Dhol Jageero da',
      singer: 'Master Saleem',
      mood: 'Happy',
      src: 'dhol_jagiro_da.mp3',
    },
    {
      songName: 'heartbeat',
      singer: 'Geeta Zaildar',
      mood: 'Love',
      src: 'heartbeat.mp3',
    },
    {
      songName: 'Tera yaar bolda',
      singer: 'Surjit Bindrakhia',
      mood: 'Chill',
      src: 'tera_yar_bolda.mp3',
    },
    {
      songName: 'Sach keh rha hai deewana, Dil na kisi se lagana',
      singer: 'KK',
      mood: 'Heart Break',
      src: 'sach_keh_rha.mp3',
    },
    {
      songName: 'Angreji Beat',
      singer: 'Honey singh',
      mood: 'Awsome',
      src: 'angreji_beat.mp3',
    },
    {
      songName: 'Chann Sitra',
      singer: 'Ammy Virk',
      mood: 'Romantic',
      src: 'chann_sitare.mp3',
    },
    {
      songName: '29 December',
      singer: 'Sucha Yaar',
      mood: 'Romantic',
      src: 'ohi_yr.mp3',
    },

    // Add other songs here...
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Audio Player By SM</h1>
      <AudioPlayer songs={songList} />
    </div>
  );
};

export default Home;
