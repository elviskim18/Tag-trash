import React from 'react'
import { HiOutlineMenu  } from 'react-icons/hi';
import Navbar from './Navbar';
import Display from './Display';
import Footer from './Footer';

function Main() {
  return (
    <div className="home">
      <Navbar  />
      <Display />
      <Footer />

    </div>
  );
}

export default Main;
{/* <HiOutlineMenu className="menu" /> */}