import React from 'react';
import '../css/header.css'


const Header = (props) => {
  return <div className='header'>
    <div className='navmenu'>
      <a href='/about'>About</a>
      <a href='/portfolio'>Portfolio</a>
      <a href='/connect'>Connect</a>
    </div>
  </div>;
}

export default Header;

