import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import Login from './component/user/Login.jsx'
import SignUp from './component/user/SignUp.jsx'
import Forgot from './component/user/Forgot.jsx'

import './App.css';


function App(){

  return (
    <>
   
     <Router>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Forgot-password' element={<Forgot/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
   
      </Routes>
     </Router>
  
    </>
  );
}

export default App;
