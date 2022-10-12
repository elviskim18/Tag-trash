import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { MdMenu } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
  return (
    <div className="navbar">
       <h2 className='Logo'>TRASH TAG</h2>
       <ul className={isMobile ? "nav-links-mobile" : "links"}
       onClick={() => setIsMobile(false)}
       >
           <Link to='/home/dashboard'className='dashboard'>
               <li>HOME</li>
           </Link>
           <Link to='/home/dispose'className='dispose'>
               <li>DISPOSE OFF</li>
           </Link>
           <Link to='/home/notifications' className='notifications'>
               <li>NOTIFICATIONS</li>
           </Link>
           <Link to='/home/about'className='about'>
               <li>ABOUT</li>
           </Link>
       </ul>
       <button className='logout'>LOGOUT</button>
       <button className='menu'
       onClick={() => setIsMobile(!isMobile)}
       >
           {isMobile ? <GrClose className='icon'/> : <MdMenu className='icon'/>}
       </button>
    </div>
  )
}

export default Navbar