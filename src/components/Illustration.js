////////// DEPENDENCIES //////////
import React from 'react';
import { Global } from '../utils/Global';
import { Modal } from '../utils/Modal';

import img_001 from '../images/Winnie the Pooh 3.png';
import img_002 from '../images/Tigger 3.png';
import img_003 from '../images/Piglet 3.png';
import img_004 from '../images/Triss Color-01.png';
import img_005 from '../images/Yennefer Color-01.png';
import img_006 from '../images/Ciri Color-01.png';
import img_007 from '../images/Shani Color-01.png';
import img_008 from '../images/Geralt Color-01.png';
import img_009 from '../images/Donald 2.png';
import img_010 from '../images/Daisy 2.png';
import img_011 from '../images/Belle 3.png';
import img_012 from '../images/Jasmine 3.png';
import img_013 from '../images/Merida 3.png';
import img_014 from '../images/Snow White 3.png';
import img_015 from '../images/Tinkerbell 3.png';
import img_016 from '../images/Rapunzel 3.png';
import img_017 from '../images/Ariel 3.png';
import img_018 from '../images/Elsa 3.png';
import img_019 from '../images/Anna 3.png';
import img_020 from '../images/Curious Witch.jpg';
import img_021 from '../images/Vintage 3.jpg';
import img_022 from '../images/Spooky Witch.jpg';
import img_023 from '../images/Vintage 1.jpg';
import img_024 from '../images/Vintage 2.jpg';

////////// COMPONENT //////////
export default function Illustration(props) {
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
      img_018,
      img_019,
      img_020,
      img_021,
      img_022,
      img_023,
      img_024,
    ]);
    setSelectedImage(e.target.src);
    document.body.classList.add('modal-open');
  }

  return (<>
    <main id="illustration">
      <section id="section-illustration">
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
            <img src={img_021} alt="" onClick={onImageClick} />
            <img src={img_023} alt="" onClick={onImageClick} />
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
            <img src={img_018} alt="" onClick={onImageClick} />
            <img src={img_020} alt="" onClick={onImageClick} />
            <img src={img_022} alt="" onClick={onImageClick} />
            <img src={img_024} alt="" onClick={onImageClick} />
          </div>
        </div>
      </section>
    </main>
  </>)
}