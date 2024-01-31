
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'

export default function Dashboard() {
  const server = process.env.REACT_APP_SERVER;
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('token');

        if (!token) {
          // Redirect to login page if no token is found
          navigate('/Login');
          return;
        }

        const response = await axios.get(`${server}/Dashboard`, {
          headers: { Authorization: token },
        });

        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error, e.g., redirect to login page or show an error message
      }
    };

    fetchData();
  }, [server, navigate]);

  return (

   <>
   <main className='main'>
    <div className="main-cont">
     <p className='p1'>Your account</p>

     <div className="account-cont">
      {userData ? (
         <>
         <table width="100%">
        <tr>
           <th>User ID :</th>
           <td>{userData._id}</td>
        </tr>

        <tr>
           <th>Full Name :</th>
           <td>{userData.fullname}</td>
        </tr>

        <tr>
           <th>Email :</th>
           <td>{userData.email}</td>
        </tr>

        <tr>
           <th>Mobile No :</th>
           <td>9043892487</td>
        </tr>

        <tr>
           <th>Date Joined :</th>
           <td>20/01/2024</td>
        </tr>
       </table>

        <div className="info-cont">
           <label htmlFor="">User ID :</label>
           <p>{userData._id}</p><hr />

           <label htmlFor="">Full name :</label>
           <p>{userData.fullname}</p><hr />

           <label htmlFor="">Email :</label>
           <p>{userData.email}</p><hr />

           <label htmlFor="">Mobile No :</label>
           <p>8923348743</p><hr />

           <label htmlFor="">Date Joined:</label>
           <p>20/01/2024</p><hr />
        </div>
        </>
      ) : (
         <p>Loading</p>
      )}
       

        <button>Edit</button>


     </div>
    </div>
   </main>
</>
  )
}
