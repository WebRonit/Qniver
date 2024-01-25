import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import Login from './component/user/Login';
import Forgot from './component/user/forgot.js'
import SignUp from './component/user/SignUp.js'
import './App.css';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Forgot-Password" element={<Forgot/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
