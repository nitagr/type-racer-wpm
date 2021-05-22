import React from 'react';
import logo from './../../assets/logo.png';
import linkedin from './../../assets/linkedin.png';

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img src={logo} alt={"logo"} className="flash-logo"/>
        <p className="flash-logo-text">Type Racer</p>
      </div>

      <div className="nav-right">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nitish-agrahari-724570154/"
          rel="noreferrer"
        >
          <img src={linkedin} alt={"linkedin"} className="flash-logo"/>
        </a>
      </div>
    </div>
  );

}

export default Nav;