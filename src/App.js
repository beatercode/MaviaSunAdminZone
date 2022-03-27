import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './layouts/NavBar';
import Login from './authentication/Login';
import Post from './screens/Post';

function App() {
  const [user, setUser] = useState('');
  const [toggleForm, setToggleForm] =  useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }
  const userState = () => {
    const data = localStorage.getItem('user');
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  }

  useEffect(() => {
    userState();
  }, []);
  return (
    <>
      {user !== null ? (
        <>
        <NavBar setUserState={() => setUser(null)}/>
        <Post/>
        </>
      ) : (
         <>
         {
           (<Login loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>)
         }
        
     </>
      )} 
    </>
   
  );
}

export default App;