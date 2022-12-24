import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navContainer'>
        <Link className='navLink' to='/'>Home</Link>
        <Link className='navLink' to='/about'>About</Link>
        <Link className='navLink' to='/write'>Write</Link>  
    </nav>
  )
}

export default Navbar