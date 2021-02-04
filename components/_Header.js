import React from "react";
import Link from "next/link";
import { Global } from "@utils/Global";

import { header } from "@lib/content";

//////////////////////// COMPONENT ////////////////////////
export default function Header(props) {
  const { page } = React.useContext(Global);
  
  return (
    <>
      <header id="header">
        <div className="header-break" />
        <div className="header-nav">
          <nav>
            <Link href="/">
              <a className={page === `about` ? `nav-btn-active` : `nav-btn`}>
                <h4>ABOUT</h4>
              </a>
            </Link>
            <Link href="/character-design">
              <a className={page === `character-design` ? `nav-btn-active` : `nav-btn`}>
                <h4>CHARACTER&nbsp;DESIGN</h4>
              </a>
            </Link>
            <Link href="/illustration">
              <a className={page === `illustration` ? `nav-btn-active` : `nav-btn`}>
                <h4>ILLUSTRATION</h4>
              </a>
            </Link>
            <Link href="/design">
              <a className={page === `design` ? `nav-btn-active` : `nav-btn`}>
                <h4>DESIGN</h4>
              </a>
            </Link>
            <Link href="/photography">
              <a className={page === `photography` ? `nav-btn-active` : `nav-btn`}>
                <h4>PHOTOGRAPHY</h4>
              </a>
            </Link>
            <Link href="/resume">
              <a className={page === `resume` ? `nav-btn-active` : `nav-btn`}>
                <h4>RESUME</h4>
              </a>
            </Link>
          </nav>
        </div>
        <div className="header-profile">
          <div className="header-profile-image">
            <img src={header?.profile} alt="Profile" />
          </div>
          <h1 className="header-profile-title">Chelsea&nbsp;DiIonno</h1>
          <h3 className="header-profile-subtitle">Character&nbsp;Designer&nbsp;|&nbsp;Visual&nbsp;Development&nbsp;Artist</h3>
        </div>
      </header>
    </>
  );
}
