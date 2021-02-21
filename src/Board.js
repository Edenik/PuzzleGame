import img1 from "./assets/images/1.png";
import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.png";
import img4 from "./assets/images/4.png";
import PuzzlePiece from "./PuzzlePiece";
import "./Board.css";
import React, { useState } from "react";

const generateImages = () => {
  const randoms = [];
  const images = [];
  for (let i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * 4) + 1;
    randoms.push(random);
  }

  randoms.forEach((id) => {
    images.push(switchRandom(id));
  });

  return images;
};

const switchRandom = (id) => {
  let image;
  switch (id) {
    case 1:
      image = { img: img1, id };
      break;
    case 2:
      image = { img: img2, id };
      break;
    case 3:
      image = { img: img3, id };
      break;
    case 4:
      image = { img: img4, id };
      break;

    default:
      break;
  }

  return image;
};

const Board = (props) => {
  const [imagesState, setImagesState] = useState(generateImages);

  const switchPuzzlePiece = (id, index) => {
    const images = [...imagesState];

    const random = Math.floor(Math.random() * 4) + 1;
    images[index] = switchRandom(random);
    checkForWin(images);
    setImagesState(images);
  };

  const checkForWin = (images) => {
    if (
      images[0].id === 1 &&
      images[1].id === 2 &&
      images[2].id === 3 &&
      images[3].id === 4
    ) {
      setTimeout(() => {
        alert("Winnnnn!!!");
      }, 100);
    }
  };

  return (
    <div className="Board">
      {imagesState.map((image, index) => {
        return (
          <PuzzlePiece
            click={() => switchPuzzlePiece(image.id, index)}
            img={image.img}
            id={image.id}
            key={index}
          ></PuzzlePiece>
        );
      })}
    </div>
  );
};

export default Board;
