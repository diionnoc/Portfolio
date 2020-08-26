////////// DEPENDENCIES //////////
import React from 'react';
import { Link } from 'react-router-dom';
import { Global } from '../utils/Global';

import img_profile from '../images/profile.png';

////////// COMPONENT //////////
export default function Nav(props) {
  const { page } = React.useContext(Global);

  return (<>
    <nav id="nav">
      <div className="nav-break" />
      <div className="nav-bar">
        <div className="nav-bar-fix">
          <Link to="/"><div className={page === `about` ? `nav-bar-btn-active` : `nav-bar-btn`}><h4>ABOUT</h4></div></Link>
          <Link to="/character-design"><div className={page === `character-design` ? `nav-bar-btn-active` : `nav-bar-btn`}><h4>CHARACTER&nbsp;DESIGN</h4></div></Link>
          <Link to="/illustration"><div className={page === `illustration` ? `nav-bar-btn-active` : `nav-bar-btn`}><h4>ILLUSTRATION</h4></div></Link>
          <Link to="/design"><div className={page === `design` ? `nav-bar-btn-active` : `nav-bar-btn`}><h4>DESIGN</h4></div></Link>
          <Link to="/photography"><div className={page === `photography` ? `nav-bar-btn-active` : `nav-bar-btn`}><h4>PHOTOGRAPHY</h4></div></Link>
          <Link to="/resume"><div className={page === `resume` ? `nav-bar-btn-active` : `nav-bar-btn`}><h4>RESUME</h4></div></Link>
        </div>
      </div>
      <div className="nav-profile">
        <div className="nav-profile-image">
          <img src={img_profile} alt="Profile" />
        </div>
        <h1 className="nav-profile-title">Chelsea&nbsp;DiIonno</h1>
        <h3 className="nav-profile-subtitle">Character&nbsp;Designer&nbsp;|&nbsp;Visual&nbsp;Development&nbsp;Artist</h3>
      </div>
    </nav>
  </>)
}