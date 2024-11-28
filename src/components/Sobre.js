import React from "react";

const Sobre = () => {
  const images = [
    `${process.env.PUBLIC_URL}/media/images/game/phases/phase_I.jpeg`,
    `${process.env.PUBLIC_URL}/media/images/game/phases/phase_II.jpeg`,
    `${process.env.PUBLIC_URL}/media/images/game/phases/phase_III.jpeg`,
    `${process.env.PUBLIC_URL}/media/images/game/phases/phase_IV.jpeg`,
    `${process.env.PUBLIC_URL}/media/images/game/phases/phase_V.jpeg`,
  ];

  const videos = [
    {
      src: `${process.env.PUBLIC_URL}/media/images/game/game_over_black_adjusted.mp4`,
      title: "Game Over",
    },
    {
      src: `${process.env.PUBLIC_URL}/media/images/game/Winner_black_adjusted.mp4`,
      title: "Winner",
    },
  ];

  const gridStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "20px",
  };

  const videoContainerStyle = {
    textAlign: "center",
    width: "100%", // Cada vídeo ocupa a linha inteira
    maxWidth: "500px",
  };

  const videoStyle = {
    width: "100%",
    maxWidth: "800px",
    height: "auto",
    borderRadius: "8px",
    border: "2px solid #ddd",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Telas do Jogo</h1>
      <div className="gallery-grid single-row" style={gridStyle}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Tela ${index + 1}`}
            style={{
              maxWidth: "350px",
              width: "100%",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          />
        ))}
      </div>

      <h1 className="gallery-title">Simulação de Jogo</h1>
      <div style={gridStyle}>
        {videos.map((video, index) => (
          <div key={index} style={videoContainerStyle}>
            <h2>{video.title}</h2>
            <video controls style={videoStyle}>
              <source src={video.src} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sobre;
