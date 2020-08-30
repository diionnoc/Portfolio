////////// DEPENDENCIES //////////
import React from 'react';
import { Global } from '../utils/Global';
import { Modal } from '../utils/Modal';

import img_001 from '../images/Sethwardo 2.jpg';
import img_002 from '../images/Sethwardo 3.jpg';
import img_003 from '../images/Sethwardo.jpg';
import img_004 from '../images/Person 2.jpg';
import img_005 from '../images/Person (Alt.C.).jpg';
import img_006 from '../images/Person (C).jpg';
import img_007 from '../images/Person.jpg';
import img_008 from '../images/Children.jpg';
import img_009 from '../images/Ghost.jpg';
import img_010 from '../images/Franny.jpg';
import img_011 from '../images/20171003_185338.jpg';
import img_012 from '../images/20171002_225239.jpg';
import img_013 from '../images/CD 2.jpg';
import img_014 from '../images/CD 3.jpg';
import img_015 from '../images/CD 1.jpg';

////////// COMPONENT //////////
export default function CharacterDesign(props) {
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
    ]);
    setSelectedImage(e.target.src);
    document.body.classList.add('modal-open');
  }

  return (<>
    <main id="character">
      <section id="section-character">
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
          </div>
        </div>
      </section>
    </main>
  </>)
}