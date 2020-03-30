import React from 'react';
import './Header.css';

const Header = () => {

  const date = new Date();

  return (
    <div className="header">
      <h1 className="title">3. Task</h1>
      <p className="date">{date.toDateString()}</p>
    </div>
  );
};

export default Header;