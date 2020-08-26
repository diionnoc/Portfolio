import React from 'react';
import moment from 'moment';

/** Global Context Object */
export const Global = React.createContext();

/** Global Context Provider */
export function GlobalProvider({ children }) {
  const [page, setPage] = React.useState(`about`);
  const [anchor, setAnchor] = React.useState(null);

  /** Function to console log only on localhost
   * @param {String} message - Message to display in the console log
   * @param {Object} data - (Optional) Data to display in the console log after the message
   * @return {Console} Returns a console.log() with the params passed in
  */
  const log = (message = null, data = null) => {
    if (window.location.hostname === `localhost`) {
      if (message && data) return console.log(message, data);
      else if (message) return console.log(message);
      else return console.log();
    }
  }

  /** Function to check which page is active to render the page properly */
  const checkPage = () => {
    if (window.location.pathname === `/`) setPage(`about`);
    else if (window.location.pathname === `/character-design`) setPage(`character-design`);
    else if (window.location.pathname === `/illustration`) setPage(`illustration`);
    else if (window.location.pathname === `/design`) setPage(`design`);
    else if (window.location.pathname === `/photography`) setPage(`photography`);
    else if (window.location.pathname === `/resume`) setPage(`resume`);
    else setPage(`404`);

    const element = document.getElementById(anchor);
    const anchorTime = localStorage.getItem(`last-anchor-time`) ? moment().diff(moment(localStorage.getItem(`last-anchor-time`)), `seconds`) : 0;
    if (anchor && element && anchorTime < 3) {
      element.scrollIntoView({ block: `center` });
      log(`PAGE: '${page}', PATHNAME: '${window.location.pathname}', ANCHOR: '${anchor}'`);
    }
    else {
      window.scrollTo({ top: 0, left: 0, behavior: `smooth` });
      log(`PAGE: '${page}', PATHNAME: '${window.location.pathname}'`);
    }
  }

  /** Global context for the app */
  const ctx = {
    log: log,
    page: page,
    checkPage: checkPage,
    setAnchor: setAnchor,
  }

  // Return the Global.Provider and wrap it around the contents of App.js
  return (
    <Global.Provider value={ctx}>{children}</Global.Provider>
  )
}