
import React from 'react';
import './Gallery.css'; // Import custom CSS for layout

const GaleriaVIP = () => {
  const items = [
    { type: 'video', src: 'media/images/extra/instagram.mp4', alt: 'Vídeo Instagram' },
    { type: 'placeholder', src: '', alt: 'Espaço para foto 2' },
    { type: 'placeholder', src: '', alt: 'Espaço para foto 3' },
    { type: 'placeholder', src: '', alt: 'Espaço para foto 4' }
  ];

  return (
    <div className="gallery-container">
      <h1>Galeria VIP</h1>
      <div className="gallery-grid">
        {items.map((item, index) => (
          item.type === 'video' ? (
            <video key={index} controls className="gallery-video">
              <source src={item.src} type="video/mp4" />
              {item.alt}
            </video>
          ) : (
            <div key={index} className="gallery-placeholder">{item.alt}</div>
          )
        ))}
      </div>
    </div>
  );
};

export default GaleriaVIP;
