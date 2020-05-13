import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ text, year, children }) => {
  return (
    <div className="footer" style={{ margin: '0' }}>
      <p style={{ margin: '0' }}>
        {text} <span><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon></span> {year} {children}
      </p>
    </div>
  );
};

export default Footer;
