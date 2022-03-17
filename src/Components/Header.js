import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css'


const Header = (props) => {
  return (<div className='header'>
    <div className='navmenu'>
      <ul>
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/portfolio'>Portfolio</NavLink>
      <button className="connectbtn"><NavLink className="connectlink" to='/connect'>Connect</NavLink></button>
      </ul>
    </div>
  </div>);
}

const RootHeader = (props)=>{

  return (
    <div className='rootheader' >
      <Header props={props}/>
    </div>
  )
}
export default RootHeader;

