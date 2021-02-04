import React from "react";
import { Link } from "react-router-dom";
import { Global } from "Global";
import { GiHamburgerMenu } from "react-icons/gi";

import profile_png from "../images/profile.png";

//////////////////////// COMPONENT ////////////////////////
export default function Header(props) {
  const { page } = React.useContext(Global);

  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleOpenNav = () => {
    setMenuOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseNav = () => {
    setMenuOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <header id="header">
      {/* SMOL NAV */}
      <div className="header-nav-s-btn" onClick={handleOpenNav}>
        <GiHamburgerMenu />
      </div>
      <div className={`header-nav-s ${menuOpen ? `show` : `hide`}`}>
        {menuOpen ? (
          <>
            <div className="header-nav-s-backdrop" onClick={handleCloseNav} />

            <nav className="nav-s" onClick={handleCloseNav}>
              <Link to="/">
                <div className={page === `about` ? `nav-s-link-active` : `nav-s-link`}>
                  <h3>ABOUT</h3>
                </div>
              </Link>
              <Link to="/character-design">
                <div className={page === `character-design` ? `nav-s-link-active` : `nav-s-link`}>
                  <h3>CHARACTER&nbsp;DESIGN</h3>
                </div>
              </Link>
              <Link to="/illustration">
                <div className={page === `illustration` ? `nav-s-link-active` : `nav-s-link`}>
                  <h3>ILLUSTRATION</h3>
                </div>
              </Link>
              <Link to="/design">
                <div className={page === `design` ? `nav-s-link-active` : `nav-s-link`}>
                  <h3>DESIGN</h3>
                </div>
              </Link>
              <Link to="/photography">
                <div className={page === `photography` ? `nav-s-link-active` : `nav-s-link`}>
                  <h3>PHOTOGRAPHY</h3>
                </div>
              </Link>
              <Link to="/resume">
                <div className={page === `resume` ? `nav-s-link-active` : `nav-s-link`}>
                  <h3>RESUME</h3>
                </div>
              </Link>
            </nav>
          </>
        ) : null}
      </div>

      {/* BEEG NAV */}
      <div className="header-nav">
        <div className="container">
          <nav className="nav">
            <Link to="/">
              <div className={page === `about` ? `nav-link-active` : `nav-link`}>
                <h3>ABOUT</h3>
              </div>
            </Link>
            <Link to="/character-design">
              <div className={page === `character-design` ? `nav-link-active` : `nav-link`}>
                <h3>CHARACTER&nbsp;DESIGN</h3>
              </div>
            </Link>
            <Link to="/illustration">
              <div className={page === `illustration` ? `nav-link-active` : `nav-link`}>
                <h3>ILLUSTRATION</h3>
              </div>
            </Link>
            <Link to="/design">
              <div className={page === `design` ? `nav-link-active` : `nav-link`}>
                <h3>DESIGN</h3>
              </div>
            </Link>
            <Link to="/photography">
              <div className={page === `photography` ? `nav-link-active` : `nav-link`}>
                <h3>PHOTOGRAPHY</h3>
              </div>
            </Link>
            <Link to="/resume">
              <div className={page === `resume` ? `nav-link-active` : `nav-link`}>
                <h3>RESUME</h3>
              </div>
            </Link>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="header-profile">
          <div className="header-profile-image">
            <img src={profile_png} alt="Profile" title="Chelsea DiIonno" />
          </div>
          <h1 className="header-profile-title">Chelsea DiIonno</h1>
          <h2 className="header-profile-subtitle">Character&nbsp;Designer & Visual&nbsp;Development&nbsp;Artist</h2>
        </div>
      </div>
    </header>
  );
}
