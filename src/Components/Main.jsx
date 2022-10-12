import React from 'react'
import { HiOutlineMenu  } from 'react-icons/hi';
import Navbar from './Navbar';
import Display from './Display';

function Main() {
  return (
    <div className="home">
      <Navbar />
      <Display />
    </div>
  );
}

export default Main;
{/* <HiOutlineMenu className="menu" /> */}