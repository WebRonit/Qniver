import React from 'react';
import { Link } from 'react-router-dom';
import './log-style.css'

export default function Forgot(params) {
    return(
    <>
    <main>
       
       <div className="form-container password">
         <p className="p1">Reset Password</p>
         <form action="#" id="form">
           <label htmlFor="">Email:</label>
           <input type="email" placeholder="Email" />
           <div id="code-cont"></div>
           <button id="btn" type="submit">
             <p>Send Code</p>
           </button>
         </form>
         <Link className="p3" to="/Login">Login</Link>     
       </div>
   </main>    
    </>
    )
};
