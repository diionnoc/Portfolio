////////// DEPENDENCIES //////////
import React from 'react';
import { Global } from '../utils/Global';

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
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });

  return (<>
    <main id="illustration">
      <section id="section-illustration">
        <div className="columns">
          <div className="column">
            <img src={img_001} alt="" />
            <img src={img_003} alt="" />
            <img src={img_005} alt="" />
            <img src={img_007} alt="" />
            <img src={img_009} alt="" />
            <img src={img_011} alt="" />
            <img src={img_013} alt="" />
            <img src={img_015} alt="" />
            <img src={img_017} alt="" />
            <img src={img_019} alt="" />
            <img src={img_021} alt="" />
            <img src={img_023} alt="" />
          </div>
          <div className="column-break" />
          <div className="column">
            <img src={img_002} alt="" />
            <img src={img_004} alt="" />
            <img src={img_006} alt="" />
            <img src={img_008} alt="" />
            <img src={img_010} alt="" />
            <img src={img_012} alt="" />
            <img src={img_014} alt="" />
            <img src={img_016} alt="" />
            <img src={img_018} alt="" />
            <img src={img_020} alt="" />
            <img src={img_022} alt="" />
            <img src={img_024} alt="" />
          </div>
        </div>
      </section>
    </main>
  </>)
}