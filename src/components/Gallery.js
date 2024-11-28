import React from "react";

const Gallery = () => {
  const items = [
    {
      type: "video",
      src: `${process.env.PUBLIC_URL}/media/images/extra/instagram_updated.mp4`,
      alt: "Vídeo Instagram",
    },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Galeria VIP</h1>
      <div className="gallery-grid">
        {items.map((item, index) =>
          item.type === "video" ? (
            <video key={index} controls className="gallery-video">
              <source src={item.src} type="video/mp4" />
              {item.alt}
            </video>
          ) : (
            <img key={index} src={item.src} alt={item.alt} />
          )
        )}
      </div>
    </div>
  );
};

export default Gallery;
