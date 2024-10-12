import React, { useState, useEffect } from 'react';
import { Video, Play, ChevronLeft, ChevronRight, Eye, Clock, Edit, Trash2, Info, Search, Bell, User } from 'lucide-react';
import './Styles/Dashboard.css'

// Component de Carrusel
const Carousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [videos.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {videos.map((video) => (
          <div key={video.id} className="carousel-item">
            <div className="card">
              <div className="card-content">
                <img src={video.thumbnailUrl} alt={video.title} className="video-thumbnail" />
                <div className="video-overlay">
                  <button className="play-button">
                    <Play className="icon" />
                    Play
                  </button>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>by {video.userName}</p>
                  <div className="video-stats">
                    <Clock className="icon" />
                    <span>{video.duration}</span>
                    <Eye className="icon" />
                    <span>{video.views.toLocaleString()} views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control left" onClick={prevSlide}>
        <ChevronLeft className="icon" />
      </button>
      <button className="carousel-control right" onClick={nextSlide}>
        <ChevronRight className="icon" />
      </button>
    </div>
  );
};

// Component Principal
export default function AiVideoDashboard() {
    // Datos de ejemplo (en una aplicación real, estos vendrían de una API o base de datos)
  const userVideos = [
    { id: "1", title: "Ciudad futurista", prompt: "Una ciudad futurista con coches voladores y edificios de cristal", thumbnailUrl: "https://via.placeholder.com/180x100", duration: "2:30", createdAt: "2023-05-15" },
    { id: "2", title: "Bosque encantado", prompt: "Un bosque mágico con hadas y criaturas fantásticas", thumbnailUrl: "https://via.placeholder.com/180x100", duration: "3:15", createdAt: "2023-05-20" },
    { id: "3", title: "Concierto virtual", prompt: "Un concierto de música electrónica en un mundo virtual", thumbnailUrl: "https://via.placeholder.com/180x100", duration: "4:00", createdAt: "2023-05-25" },
  ];

  const otherUserVideos = [
    { id: "4", title: "Viaje espacial", userName: "AstroFan", thumbnailUrl: "https://via.placeholder.com/250x150", duration: "3:45", views: 12500 },
    { id: "5", title: "Mundo submarino", userName: "OceanLover", thumbnailUrl: "https://via.placeholder.com/250x150", duration: "2:30", views: 8900 },
    { id: "6", title: "Robot del futuro", userName: "TechGuru", thumbnailUrl: "https://via.placeholder.com/250x150", duration: "4:15", views: 15600 },
    { id: "7", title: "Dinosaurios vivientes", userName: "DinoExplorer", thumbnailUrl: "https://via.placeholder.com/250x150", duration: "5:00", views: 20100 },
  ];

  const handleEditVideo = (id) => {
    console.log(`Editar video con ID: ${id}`);
    // Here would go the logic to edit the video
  };

  const handleDeleteVideo = (id) => {
    console.log(`Eliminar video con ID: ${id}`);
    // Here would go the logic to delete the video
  };

  const handleViewDetails = (id) => {
    console.log(`Ver detalles del video con ID: ${id}`);
    // Here would go the logic to view the video details
  };

  return (
    <div className="app">
      <header>
        <div className="container header-content">
          <div className="logo">
            <Video className="icon" />
            <h1>VideoAI Pro</h1>
          </div>
          <div className="header-actions">
            <div className="search-container">
              <input type="search" placeholder="Buscar videos..." className="search-input" />
              <Search className="search-icon" />
            </div>
            <button className="icon-button">
              <Bell className="icon" />
            </button>
            <button className="icon-button">
              <User className="icon" />
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="create-video-button-container">
          <button className="create-video-button">
            <Video className="icon" />
            Crear Nuevo Video IA
          </button>
        </div>

        <section className="user-videos">
          <h2>Tus Videos</h2>
          <div className="video-grid">
            {userVideos.map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-card-header">
                  <h3>{video.title}</h3>
                </div>
                <div className="video-card-content">
                  <div className="video-thumbnail-container">
                    <img src={video.thumbnailUrl} alt={video.title} className="video-thumbnail" />
                    <div className="video-duration">{video.duration}</div>
                  </div>
                  <p className="video-prompt">Prompt: {video.prompt}</p>
                  <p className="video-created-at">Creado el: {video.createdAt}</p>
                </div>
                <div className="video-card-footer">
                  <button onClick={() => handleEditVideo(video.id)} className="action-button edit">
                    <Edit className="icon" />
                    Editar
                  </button>
                  <button onClick={() => handleDeleteVideo(video.id)} className="action-button delete">
                    <Trash2 className="icon" />
                    Eliminar
                  </button>
                  <button onClick={() => handleViewDetails(video.id)} className="action-button details">
                    <Info className="icon" />
                    Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="community-videos">
          <h2>Videos Destacados de la Comunidad</h2>
          <Carousel videos={otherUserVideos} />
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 VideoAI Pro. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
