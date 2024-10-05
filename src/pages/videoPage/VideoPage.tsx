// import React from 'react';
// import { useParams } from 'react-router-dom';
// import VideoPlayer from '../components/VideoPlayer';

// // Твои данные с эпизодами
// const animeVideos = {
  // Naruto: {
  //   '1080p': Array.from({ length: 220 }, (_, i) => `https://r111114.anilibria.one/naruto/1/1.480.1f89a08c65b0c303.mp4?hash1=7d882e639ab5b57ece4d8ff11428cac7&hash2=0d61b48af6717c9a0b4e8a0ac6ceb12c${i + 1}.mp4`),
  //   '720p': Array.from({ length: 220 }, (_, i) => `https://r111114.anilibria.one/naruto/1/1.480.1f89a08c65b0c303.mp4?hash1=7d882e639ab5b57ece4d8ff11428cac7&hash2=0d61b48af6717c9a0b4e8a0ac6ceb12c${i + 1}.mp4`),
  // },
//   // остальные аниме...
// };

// const VideoPage: React.FC = () => {
//   const { id, episodeIndex } = useParams<{ id: string; episodeIndex: string }>();

//   // Получаем данные аниме на основе id
//   const animeData = animeVideos[id as keyof typeof animeVideos];

//   // Проверяем, существуют ли данные для данного аниме
//   if (!animeData) {
//     return <p>Аниме не найдено</p>;
//   }

//   // Проверяем, существует ли эпизод с таким номером
//   const episode = animeData['1080p'][parseInt(episodeIndex, 10) - 1];

//   // Если эпизод не найден
//   if (!episode) {
//     return <p>Эпизод не найден</p>;
//   }

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <VideoPlayer options={{ sources: [{ src: episode, type: 'video/mp4' }] }} />
//       <h1>{`Эпизод ${episodeIndex} - ${id}`}</h1>
//     </div>
//   );
// };

// export default VideoPage;
