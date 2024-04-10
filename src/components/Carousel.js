// -------------------------------- DEPENDENCIES -------------------------------- //

import React from "react";
import { Modal } from "providers/Modal";

import CarouselBtn from "components/CarouselBtn";

// -------------------------------- COMPONENT -------------------------------- //

export default function Carousel(props) {
  const { modalImages, setModalImages, selectedImage, setSelectedImage } = React.useContext(Modal);

  const onPrevious = () => {
    const i = modalImages.indexOf(selectedImage);
    if (i - 1 < 0) setSelectedImage(modalImages[modalImages.length - 1]);
    else setSelectedImage(modalImages[i - 1]);
  };
  const onNext = () => {
    const i = modalImages.indexOf(selectedImage);
    if (i + 1 > modalImages.length - 1) setSelectedImage(modalImages[0]);
    else setSelectedImage(modalImages[i + 1]);
  };
  const onWheel = (e) => {
    if (e.deltaY >= 0) onNext();
    else onPrevious();
  };

  const onClose = () => {
    setModalImages([]);
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
