////////// DEPENDENCIES //////////
import React from 'react';
import { Global } from '../utils/Global';

import img_001 from '../images/Game-On-Lax.png';
import img_002 from '../images/YA_Allegiance_Checklist_Vector_FINAL_Cover_Credits.png';
import img_003 from '../images/YA_Allegiance_Checklist_Vector_FINAL_Example.png';
import img_004 from '../images/YA_Allegiance_Checklist_Vector_FINAL_Seafoam_Border.png';
import img_005 from '../images/IMG_20200501_173551.jpg';
import img_006 from '../images/Bakery 5.jpg';
import img_007 from '../images/Logo FINAL 2.png';
import img_008 from '../images/S Curve FINAL.jpg';
import img_009 from '../images/Double Semi S Curve FINAL.jpg';
import img_010 from '../images/Ring Type FINAL.jpg';
import img_011 from '../images/Double Semi Ring with Boarder FINAL.jpg';
import img_012 from '../images/Two Line Ring Type FINAL.jpg';

////////// COMPONENT //////////
export default function Design(props) {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });

  return (<>
    <main id="design">
      <section id="section-design">
        <div className="columns">
          <div className="column">
            <img src={img_001} alt="" />
            <img src={img_003} alt="" />
            <img src={img_005} alt="" />
            <img src={img_007} alt="" />
            <img src={img_009} alt="" />
            <img src={img_011} alt="" />
          </div>
          <div className="column-break" />
          <div className="column">
            <img src={img_002} alt="" />
            <img src={img_004} alt="" />
            <img src={img_006} alt="" />
            <img src={img_008} alt="" />
            <img src={img_010} alt="" />
            <img src={img_012} alt="" />
          </div>
        </div>
      </section>
    </main>
  </>)
}