////////// DEPENDENCIES //////////
import React from 'react';
import moment from 'moment';

import img_mail from '../images/vectors/mail.svg';
import img_linkedin from '../images/vectors/linkedin.svg';
import img_instagram from '../images/vectors/instagram.svg';
import img_youtube from '../images/vectors/youtube.svg';

////////// COMPONENT //////////
export default function Footer(props) {
  const links = [
    `mailto:diionnoc@gmail.com`,
    `https://www.linkedin.com/in/chelseadiionno/`,
    `https://www.instagram.com/diionnoc/`,
    `https://www.youtube.com/xoblivionx13/`,
  ];

  return (<>
    <footer id="footer">
      <div className="footer-break" />
      <div className="footer-fix">
        <div className="footer-left">
          <h5 className="footer-left-txt">&copy;{moment().format(`YYYY`)}&nbsp;Chelsea&nbsp;DiIonno</h5>
        </div>
        <div className="footer-right">
          <a href={links[0]}>
            <img className="footer-right-icon" src={img_mail} alt="Mail" />
          </a>
          <a href={links[1]} target="_blank" rel="noopener noreferrer">
            <img className="footer-right-icon" src={img_linkedin} alt="LinkedIn" />
          </a>
          <a href={links[2]} target="_blank" rel="noopener noreferrer">
            <img className="footer-right-icon" src={img_instagram} alt="Instagram" />
          </a>
          <a href={links[3]} target="_blank" rel="noopener noreferrer">
            <img className="footer-right-icon" src={img_youtube} alt="YouTube" />
          </a>
        </div>
      </div>
    </footer>
  </>)
}