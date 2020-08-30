////////// DEPENDENCIES //////////
import React from 'react';
import { Modal } from '../utils/Modal';

import img_left from '../images/vectors/chevronL.svg';
import img_right from '../images/vectors/chevronR.svg';

////////// COMPONENT //////////
export default function Carousel(props) {
  const { images, setImages, selectedImage, setSelectedImage } = React.useContext(Modal);

  const onPrevious = () => {
    const index = images.indexOf(selectedImage);
    if (index - 1 < 0) setSelectedImage(images[images.length - 1]);
    else setSelectedImage(images[index - 1]);
  }
  const onNext = () => {
    const index = images.indexOf(selectedImage);
    if (index + 1 > images.length - 1) setSelectedImage(images[0]);
    else setSelectedImage(images[index + 1]);
  }
  const onWheel = (e) => {
    if (e.deltaY >= 0) onNext();
    else onPrevious();
  }

  const onClose = () => {
    setImages([]);
    setSelectedImage(null);
    document.body.classList.remove('modal-open');
  }

  return (<>
    <main id="carousel" className={selectedImage ? `open` : `close`}>
      <section id="section-carousel">
        <div className="carousel-backdrop" onClick={onClose} onWheel={onWheel} />
        <img className="carousel-image" src={selectedImage} alt="Art" />
        <img className="carousel-arrow carousel-arrow-left" src={img_left} alt="Previous" onClick={onPrevious} />
        <img className="carousel-arrow carousel-arrow-right" src={img_right} alt="Next" onClick={onNext} />
      </section>
    </main>
  </>)
}