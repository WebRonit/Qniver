import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'



export default function NavMenu(props) {
  
    const [translate, setTranslate] = useState("translateX(-300px)");
    const [shadow, setShadow] = useState("none");
    const [overlay, setOverlay] = useState("none");
  
    function toggleMenu(){
      
      setTranslate((prevTranslate) =>
        prevTranslate === 'translateX(0px)' ? 'translateX(-300px)' : 'translateX(0px)'
      );

      setShadow((prevShadow) =>
        prevShadow === '2px 0 10px rgba(51, 51, 51, 0.5)' ? 'none' : '2px 0 10px rgba(51, 51, 51, 0.5)'
      );

      setOverlay((prevOverlay) =>
        prevOverlay === 'block' ? 'none' : 'block'
      );

    
  }
       
    return(
      <>
      <div id="overlay" style={{display: overlay}} onClick={toggleMenu}></div>
      <nav>
        <p>{props.title}</p>
        <div>
          <div className='side-btn'>
           <Link to="/">Home</Link>
           <Link to="/Login">Login</Link>
           <Link to="/SignUp">Sign Up</Link>
           <Link to="/Dashboard">Dashboard</Link>
          </div>
          <button onClick={toggleMenu}><svg height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button>
        </div>
      </nav><div style={{paddingTop:'50px'}}></div>
  
      <div id="menu" style={{transform: translate, boxShadow: shadow}}>
        <div>
          <Link to="/Dashboard">Dashboard</Link>
          <Link to="/Login">Login</Link>
          <Link to="/SignUp">Sign Up</Link>
          <Link to="#">About</Link>
        </div>
      </div>
    </>
    
   );
}
