import React from 'react';
import { Suspense } from 'react/cjs/react.development';
import '../css/header.css'


const Header = (props) => {
  return (<div className='header'>
    <div className='navmenu'>
      <ul>
        <li><a href='/about'>About</a></li>
        <li><a href='/portfolio'>Portfolio</a></li>
        <li><a href='/connect'>Connect</a></li>
      </ul>
    </div>
  </div>);
}

const RootHeader = (props)=>{
  let imagename = 'sunup';

  return (
    <div className='rootheader' style={{ backgroundImage: `url(require("images/${imagename}.webp"))` }}>
      <Header props={props}/>
    </div>
  )
}
export default RootHeader;

