////////// DEPENDENCIES //////////
import React from 'react';
import { Global } from '../utils/Global';

import res_jpg from '../resources/ChelseaDiIonno_Resume.jpg';
import res_pdf from '../resources/ChelseaDiIonno_Resume.pdf';

////////// COMPONENT //////////
export default function Resume(props) {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });

  return (<>
    <main id="resume">
      <section id="section-resume">
        <div className="resume-jpg">
          <a href={res_pdf} target="_blank" rel="noopener noreferrer">
            <img src={res_jpg} alt="Chelsea DiIonno Resume" />
          </a>
        </div>
        <div className="resume-btn">
          <a href={res_pdf} target="_blank" rel="noopener noreferrer">
            <div className="resume-btn-shape">
              <h4>VIEW&nbsp;PDF</h4>
            </div>
          </a>
        </div>
      </section>
    </main>
  </>)
}