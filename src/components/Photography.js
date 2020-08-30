////////// DEPENDENCIES //////////
import React from 'react';
import { Global } from '../utils/Global';
import { Modal } from '../utils/Modal';

import img_001 from '../images/PSX_20190807_122525.jpg';
import img_002 from '../images/Castle Bridge FINAL.jpg';
import img_003 from '../images/PSX_20190822_174624.jpg';
import img_004 from '../images/PSX_20190816_133749.jpg';
import img_005 from '../images/00100lPORTRAIT_00100_BURST20191001112543204_COVER.jpg';
import img_006 from '../images/Castle Lamp.jpg';
import img_007 from '../images/EPCOT Flower Pond.jpg';
import img_008 from '../images/Mouse.jpg';
import img_009 from '../images/Mickey Pumpkin FINAL.jpg';
import img_010 from '../images/Cherries Final.jpg';
import img_011 from '../images/PSX_20191102_091657.jpg';
import img_012 from '../images/Harambe Eats FINAL.jpg';
import img_013 from '../images/PSX_20191005_114701.jpg';
import img_014 from '../images/PSX_20191005_121356.jpg';
import img_015 from '../images/PSX_20191005_121648.jpg';
import img_016 from '../images/PSX_20191005_124550.jpg';
import img_017 from '../images/PSX_20190816_132206.jpg';
import img_019 from '../images/Animal Kingdom River FINAL.jpg';

////////// COMPONENT //////////
export default function Photography(props) {
  const { log } = React.useContext(Global);
  const { setImages, setSelectedImage } = React.useContext(Modal);

  const onImageClick = (e) => {
    log(e.target.src);
    setImages([
      img_001,
      img_002,
      img_003,
      img_004,
      img_005,
      img_006,
      img_007,
      img_008,
      img_009,
      img_010,
      img_011,
      img_012,
      img_013,
      img_014,
      img_015,
      img_016,
      img_017,
      img_019,
    ]);
    setSelectedImage(e.target.src);
    document.body.classList.add('modal-open');
  }

  return (<>
    <main id="photography">
      <section id="section-photography">
        <div className="columns">
          <div className="column">
            <img src={img_001} alt="" onClick={onImageClick} />
            <img src={img_003} alt="" onClick={onImageClick} />
            <img src={img_005} alt="" onClick={onImageClick} />
            <img src={img_007} alt="" onClick={onImageClick} />
            <img src={img_009} alt="" onClick={onImageClick} />
            <img src={img_011} alt="" onClick={onImageClick} />
            <img src={img_013} alt="" onClick={onImageClick} />
            <img src={img_015} alt="" onClick={onImageClick} />
            <img src={img_017} alt="" onClick={onImageClick} />
            <img src={img_019} alt="" onClick={onImageClick} />
          </div>
          <div className="column-break" />
          <div className="column">
            <img src={img_002} alt="" onClick={onImageClick} />
            <img src={img_004} alt="" onClick={onImageClick} />
            <img src={img_006} alt="" onClick={onImageClick} />
            <img src={img_008} alt="" onClick={onImageClick} />
            <img src={img_010} alt="" onClick={onImageClick} />
            <img src={img_012} alt="" onClick={onImageClick} />
            <img src={img_014} alt="" onClick={onImageClick} />
            <img src={img_016} alt="" onClick={onImageClick} />
          </div>
        </div>
      </section>
    </main>
  </>)
}