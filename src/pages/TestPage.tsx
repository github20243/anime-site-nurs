import React, { useEffect, useState } from 'react';
import { Typography, Button, CircularProgress, Box, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

const TestPage: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('http://localhost:5000/videos'); // API для получения видео
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.statusText}`);
        }

        const data = await response.json();
        setVideos(data);
      } catch (error) {
        setError('Ошибка при загрузке видео');
        console.error('Ошибка:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Видео-страница
      </Typography>

      {/* Кнопка возврата */}
      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{ marginBottom: '20px' }}
      >
        Вернуться на главную
      </Button>

      {/* Загрузка и ошибка */}
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      {/* Список видео */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Полученные видео:
        </Typography>
        {videos.length > 0 ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {videos.map((video, index) => (
              <Card key={index} sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6">
                    {video.title || 'Без названия'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {video.description || 'Описание отсутствует'}
                  </Typography>

                  {/* Видео-плеер */}
                  {video.videoUrl ? (
                    <ReactPlayer
                      url={video.videoUrl}
                      width="100%"
                      height="auto"
                      controls
                    />
                  ) : (
                    <Typography color="error">
                      Ссылка на видео недоступна
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          !loading && (
            <Typography variant="body1">
              Нет видео для отображения
            </Typography>
          )
        )}
      </Box>
    </Box>
  );
};

export default TestPage;
