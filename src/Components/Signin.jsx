import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';



function Signin (){
    const navigate = useNavigate()
    return (
        <>
         <h2>WELCOME BACK...</h2>
         <h4>Please enter your email and password</h4>
         <form >
            <input type="email" id="email" name="email" placeholder="Username" />
            <input type="password" id="password" name="password" placeholder="Password"/>
            <button className="submit" >Login</button>
        </form> 
        <h5>Don’t have an account yet? </h5>
        <p onClick={()=>navigate('signup')}>Create Account</p>
        </>
       
      
      
    )
}

export default Signin