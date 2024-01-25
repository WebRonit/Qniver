import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import SignUpImg from '../../images/sign-up.png';
import './log-style.css';

export default function SignUp() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [errTxt, setErrTxt] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (values.password !== values.confirmPassword) {
      setPasswordsMatch(false);
      setLoading(false);
    } 
    else {
      setPasswordsMatch(true);
      setErrTxt('');

      const {confirmPassword, ...finalValues} = values

      try {
        const response = await axios.post('http://localhost:4000/SignUp', finalValues);

        if (response.status === 200) {
          setErrTxt("Sign up successful");
          navigate('/');
        }
      } 
      catch (error) {
        if (error.response && error.response.status === 409) {
          console.log("Email already registerded");
          setErrTxt("Email already registerded");
        } 
        else {
          console.log(error);
          setErrTxt("Something went wrong, try again");
        }
      } 
      finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <main>
        <div className="main-container">
          <div className="side-cont">
            <img src={SignUpImg} alt="img" width="360" draggable="false" />
          </div>
          <div className="form-container sign-up">
            <p className="p1">Sign Up</p>
            <p className="err-txt">{errTxt}</p>
            <form to="/" onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name:</label>
              <input type="text" placeholder="Full Name" name="fullname" onChange={handleChange} disabled={loading} required />

              <label htmlFor="email">Email:</label>
              <input type="email" placeholder="Email" name="email" onChange={handleChange} disabled={loading} required />

              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="Password" name="password" onChange={handleChange} disabled={loading} required />
              
              {!passwordsMatch && <p className="err-txt">Passwords don't match</p>}
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} disabled={loading} required />

              <button type="submit" disabled={loading}>
                {loading ? <div className="spinner"></div> : <p>Submit</p>}
              </button>
            </form>

            <p className="p2">
              Already have an account, <Link to="/Login">Login</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
