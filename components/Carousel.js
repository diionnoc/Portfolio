import React from "react";
import { Modal } from "@utils/Modal";

import CarouselBtn from "@components/CarouselBtn";

//////////////////////// COMPONENT ////////////////////////
export default function Carousel(props) {
  const { images, setImages, selectedImage, setSelectedImage } = React.useContext(Modal);

  const onPrevious = () => {
    const index = images.indexOf(selectedImage);
    if (index - 1 < 0) setSelectedImage(images[images.length - 1]);
    else setSelectedImage(images[index - 1]);
  };
  const onNext = () => {
    const index = images.indexOf(selectedImage);
    if (index + 1 > images.length - 1) setSelectedImage(images[0]);
    else setSelectedImage(images[index + 1]);
  };
  const onWheel = (e) => {
    if (e.deltaY >= 0) onNext();
    else onPrevious();
  };

  const onClose = () => {
    setImages([]);
    setSelectedImage(null);
    document.body.classList.remove("modal-open");
  };

  return (
    <>
      <div className={selectedImage ? `carousel open` : `carousel close`}>
        {selectedImage ? (
          <div onWheel={onWheel}>
            <div className="carousel-backdrop" onClick={onClose} />
            <img className="carousel-image" src={selectedImage} alt="Carousel Image" />
            <CarouselBtn direction="left" action={onPrevious} />
            <CarouselBtn direction="right" action={onNext} />
          </div>
        ) : null}
      </div>
    </>
  );
}
