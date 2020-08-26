////////// DEPENDENCIES //////////
import React from 'react';
import { Global } from '../utils/Global';

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
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });

  return (<>
    <main id="photography">
      <section id="section-photography">
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
          </div>
        </div>
      </section>
    </main>
  </>)
}