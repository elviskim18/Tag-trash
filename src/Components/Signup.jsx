import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useState } from 'react';





function Signup() {
    const navigate = useNavigate()
  return (
    <>
         <h2>CREATE ACCOUNT</h2>
         <h4>Enter your details blow</h4>
         <form >
            
            <input type="text" id="name" name="name" placeholder="Name"/>
            
            <input type="email" id="email" name="email" placeholder="Username"/>
        
            <input type="password" id="password" placeholder="Password"/>
      
            <button className="submit">SIGNUP</button>
        </form> 
        <h5>OR</h5>
        <p onClick={()=>navigate('/login')}>Login?</p>
        </>
  );
}

export default Signup;