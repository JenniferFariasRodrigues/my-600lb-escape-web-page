import React from "react";
import "../App.css"; // Certifique-se de importar o App.css no App.js ou no próprio componente

const Motivacao = () => {
  const antesImages = [
    `${process.env.PUBLIC_URL}/media/images/fat/fat_1.jpeg`,
    `${process.env.PUBLIC_URL}/media/images/fat/fat_2.jpeg`,
    `${process.env.PUBLIC_URL}/media/images/fat/fat_3.jpeg`,
    `${process.env.PUBLIC_URL}/media/images/fat/fat_4.jpeg`,
    `${process.env.PUBLIC_URL}/media/images/fat/fat_5.jpeg`,
  ];

  const depoisImages = [
    `${process.env.PUBLIC_URL}/media/images/thin/thin_1.jpeg`,
    `${process.env.PUBLIC_URL}/media/images/thin/thin_2.jpg`,
    `${process.env.PUBLIC_URL}/media/images/thin/thin_3.jpeg`,
    `${process.env.PUBLIC_URL}/media/images/thin/thin_4.jpeg`,
    `${process.env.PUBLIC_URL}/media/images/thin/thin_5.jpg`,
    `${process.env.PUBLIC_URL}/media/images/thin/thin_6.jpeg`,
    `${process.env.PUBLIC_URL}/media/images/thin/thin_7.jpeg`,
    `${process.env.PUBLIC_URL}/media/images/thin/thin_8.jpeg`,
  ];

  // Função de agrupamento (ignora as imagens já exibidas explicitamente)
  const groupImages = (images, skip = 0) => {
    const grouped = [];
    for (let i = skip; i < images.length; i += 2) {
      grouped.push(images.slice(i, i + 2));
    }
    return grouped;
  };

  // Agrupando as imagens
  const groupedAntesImages = groupImages(antesImages, 1); // Ignora a primeira imagem de "Antes"
  const groupedDepoisImages = groupImages(depoisImages, 2); // Ignora as duas primeiras imagens de "Depois"

  // Estilos
  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px", // Diminui o espaçamento entre as imagens
    marginBottom: "15px", // Diminui o espaço entre as linhas
  };

  const imageStyle = {
    width: "calc(45% - 10px)", // Duas imagens por linha
    maxWidth: "500px",
    height: "auto",
    border: "2px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const fullWidthImageStyle = {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    border: "2px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "15px", // Diminui o espaço abaixo da imagem
  };

  return (
    <div className="gallery-container">
      {/* Seção Antes */}
      <h1 className="gallery-title">Antes</h1>
      <div style={{ textAlign: "center" }}>
        <img src={antesImages[0]} alt="Antes 1" style={fullWidthImageStyle} />
      </div>
      {groupedAntesImages.map((group, index) => (
        <div style={gridStyle} key={`antes-group-${index}`}>
          {group.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Antes ${index * 2 + idx + 2}`}
              style={imageStyle}
            />
          ))}
        </div>
      ))}

      {/* Seção Depois */}
      <h1 className="gallery-title">Depois</h1>
      <div style={gridStyle}>
        <img src={depoisImages[0]} alt="Depois 1" style={imageStyle} />
        <img src={depoisImages[1]} alt="Depois 2" style={imageStyle} />
      </div>
      {groupedDepoisImages.map((group, index) => (
        <div style={gridStyle} key={`depois-group-${index}`}>
          {group.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Depois ${index * 2 + idx + 3}`}
              style={imageStyle}
            />
          ))}
        </div>
      ))}

      {/* GIF no final */}
      
      <h1 className="gallery-title">Superação</h1>
      <div style={{ textAlign: "center" }}>
        <img
          src={`${process.env.PUBLIC_URL}/media/images/thin/rope_climb.gif`}
          alt="Rope Climb"
          style={{
            width: "80%",
            maxWidth: "500px",
            borderRadius: "8px",
            border: "2px solid #ddd",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </div>
  );
};

export default Motivacao;
