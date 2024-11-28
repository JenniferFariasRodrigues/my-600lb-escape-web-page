import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Certifique-se de que o arquivo index.css existe ou ajuste o caminho
import App from "./App";
import "./Gallery.css"; // CSS para estilização

const Item = ({ searchTerm }) => {
  // Configuração de imagens e vídeos por aba
  const media = {
    motivacao: [
      "media/images/fat/fat_1.jpg",
      "media/images/fat/fat_2.jpeg",
      "media/images/fat/fat_3.jpeg",
      "media/images/fat/fat_4.jpeg",
      "media/images/fat/fat_5.jpeg",
      "media/images/fat/fat_6.jpeg",
      "media/images/fat/fat_7.jpeg",
      "media/images/fat/fat_8.jpeg",
    ],
    sobre: [
      "media/images/game/game_1.jpg",
      "media/images/game/game_2.jpg",
      "media/images/game/game_3.jpg",
      "media/images/game/game_4.jpg",
    ],
    galeria: [
      {
        type: "video",
        src: "media/images/extra/instagram.mp4",
        alt: "Vídeo Instagram",
      },
      {
        type: "image",
        src: "media/images/extra/extra_1.jpg",
        alt: "Imagem Extra 1",
      },
      {
        type: "image",
        src: "media/images/extra/extra_2.jpg",
        alt: "Imagem Extra 2",
      },
      {
        type: "image",
        src: "media/images/extra/extra_3.jpg",
        alt: "Imagem Extra 3",
      },
    ],
  };

  // Selecionar a mídia para exibição
  const selectedMedia = media[searchTerm] || [];

  return (
    <div className="gallery-container">
      <h1>
        {searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)} Pictures
      </h1>
      <div className="gallery-grid">
        {selectedMedia.map((item, index) =>
          item.type === "video" ? (
            <video key={index} controls className="gallery-video">
              <source src={item.src} type="video/mp4" />
              {item.alt}
            </video>
          ) : (
            <img
              key={index}
              src={item.src || item}
              alt={item.alt || `Image ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Item;
