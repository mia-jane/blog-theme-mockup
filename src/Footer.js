import React from 'react';
import twitter from './images/twitter.png'
import facebook from './images/facebook-logo.png'
import github from './images/github-logo.png'

function Footer(props) {
  return (
    <div className="footer">
      <div className="logos-container">
        <img className="logo" src={twitter} />
        <img className="logo" src={facebook} />
        <img className="logo" src={github} />
      </div>
    </div>
  );
}

export default Footer;