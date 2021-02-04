import React from "react";
import { footer } from "@lib/content";

//////////////////////// COMPONENT ////////////////////////
export default function Footer(props) {
  return (
    <>
      <footer id="footer">
        <div className="footer-break" />
        <div className="footer-wrap">
          <div className="footer-left">
            <p>{footer?.copy}</p>
          </div>
          <div className="footer-right">
            <div className="footer-social">
              <ul>
                {footer?.socials?.map((social, i) => (
                  <React.Fragment key={`footer-social-${i}`}>
                    {social?.active ? (
                      <li>
                        <a href={social?.link} title={social?.name} target="_blank" rel="noopener noreferrer">
                          <div className="footer-icon">{social?.icon}</div>
                        </a>
                      </li>
                    ) : null}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
