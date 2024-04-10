// -------------------------------- DEPENDENCIES -------------------------------- //

import React from "react";
import { Global } from "providers/Global";
import { Modal } from "providers/Modal";

import { importImages } from "lib/tools";

// -------------------------------- COMPONENT -------------------------------- //

export default function ConceptArt(props) {
  const { log, handlePage } = React.useContext(Global);
  const { setModalImages, setSelectedImage } = React.useContext(Modal);

  const [images, setImages] = React.useState([]);
  const [imageSources, setImageSources] = React.useState([]);
  const [oddImages, setOddImages] = React.useState([]);
  const [evenImages, setEvenImages] = React.useState([]);

  React.useEffect(() => {
    handlePage(`concept-art`);

    if (!images || images.length === 0) {
      setImages(() => importImages(`conceptArt`));
    }
  }, []);

  React.useEffect(() => {
    if (images && images?.length > 0) {
      log(`CONCEPT ART IMAGES:`, images);
      setImageSources(images?.map((image) => image.src));
      setOddImages(images?.filter((image) => image.isOdd));
      setEvenImages(images?.filter((image) => !image.isOdd));
    }
  }, [images]);

  const onImageClick = (src) => (e) => {
    log(`SELECTED IMAGE:`, src);
    setModalImages(imageSources);
    setSelectedImage(src);
    document.body.classList.add("modal-open");
  };

  return (
    <section id="concept-art">
      <div className="columns">
        <div className="column">
          {oddImages.map((image, i) => (
            <div key={image?.name} className="image-box">
              <img src={image?.src} loading="lazy" alt={image?.name} onClick={onImageClick(image?.src)} />
            </div>
          ))}
        </div>
        <div className="column-break" />
        <div className="column">
          {evenImages.map((image, i) => (
            <div key={image?.name} className="image-box">
              <img src={image?.src} loading="lazy" alt={image?.name} onClick={onImageClick(image?.src)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
