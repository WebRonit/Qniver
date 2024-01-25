import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import './log-style.css'
import loginImg from '../../images/login.png'

export default function Login() {

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [errTxt, setErrTxt] = useState("");
  const navigate = useNavigate()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
          const response = await axios.post('http://localhost:4000/Login', values);
          if(response.status === 200){
            setErrTxt("Login succsefull");
            // const {token} = response.data;
            // document.cookie = `token=${token}; path=/; HttpOnly; Secure`
            navigate('/');
          }
      }
      catch(error){
        if(error.response && error.response.status === 401) {
           console.log("Incorrect Email or Password");
           setErrTxt("Incorrect Email or Password");
        } 
        else {
          console.log(error);
          setErrTxt("Something went wrong, try agian")
        }
        
      }
  
      finally{
        setLoading(false);
      }
  }

    return(
    <>
    <main>
      <div className="main-container login">
        <div className="side-cont">
          <img
            src={loginImg}
            alt="img"
            width="330"
            draggable="false"
          />
        </div>
        <div className="form-container">
          <p className="p1">Login</p>
          <p className="err-txt">{errTxt}</p>
          <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="">Email:</label>
            <input type="email" placeholder="Email" name='email' onChange={handleChange} disabled={loading}/>

            <label htmlFor="">Password:</label>
            <input type="password" placeholder="password" name='password' onChange={handleChange} disabled={loading}/>

            <button type="submit" disabled={loading}>        
              { loading ? <div className="spinner"></div> : <><p>Login</p><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg></> }
            </button>
          </form>
          <Link className="p3" to="/Forgot-Password">Forget password</Link>
          <p className="p2">
            Don't have any account, <Link to="/SignUp">Sign Up</Link>
          </p>
        </div>
      </div>
    </main>   
    </>
    )
};
