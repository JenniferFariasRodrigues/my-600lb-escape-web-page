// import React, { createContext, useState } from "react";
// import axios from "axios";
// import { apiKey } from "../api/config";
// export const PhotoContext = createContext();

// const PhotoContextProvider = props => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const runSearch = query => {
//     axios
//       .get(
//         `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
//       )
//       .then(response => {
//         setImages(response.data.photos.photo);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.log(
//           "Encountered an error with fetching and parsing data",
//           error
//         );
//       });
//   };
//   return (
//     <PhotoContext.Provider value={{ images, loading, runSearch }}>
//       {props.children}
//     </PhotoContext.Provider>
//   );
// };

// export default PhotoContextProvider;
import React, { createContext, useState } from "react";

export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const runSearch = (query) => {
    // Simulando carregamento das imagens locais com base no termo de busca
    const localImages = {
      motivacao: [
        "/media/images/fat/fat_1.jpg",
        "/media/images/fat/fat_2.jpeg",
        "/media/images/fat/fat_3.jpeg",
        "/media/images/fat/fat_4.jpeg",
        "/media/images/fat/fat_5.jpeg",
        "/media/images/fat/fat_6.jpeg",
        "/media/images/fat/fat_7.jpeg",
        "/media/images/fat/fat_8.jpeg",
      ],
      sobre: [
        // Telas do jogo
        "/media/images/game/phases/phase_I.jpg",
        "/media/images/game/phases/phase_II.jpg",
        "/media/images/game/phases/phase_III.jpg",
        "/media/images/game/phases/phase_IV.jpg",
        // Simulação do jogo (vídeos)
        "/media/images/game/game_over_black_adjusted.mp4",
        "/media/images/game/Winner_black_adjusted.mp4",
      ],
      galeria: [
        // Vídeo Instagram e imagens extras
        "/media/images/extra/instagram.mp4",
        // "/media/images/extra/extra_1.jpg",
        // "/media/images/extra/extra_2.jpg",
        // "/media/images/extra/extra_3.jpg",
      ],
    };

    if (localImages[query]) {
      setImages(localImages[query]);
    } else {
      setImages([]);
    }
    setLoading(false);
  };

  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
