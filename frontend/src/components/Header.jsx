import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='header'>
      <h1>SugarIt</h1>
      <Navbar/>
    </header>
  )
}

export default Header