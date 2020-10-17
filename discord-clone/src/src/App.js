import React , {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { Counter } from './features/Counter';
import './App.css';
import Bar from './Bar';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import {login,logout} from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //if user is logged in
        dispatch(
          login( {
          uid: authUser.uid,
          photo: authUser.photoUrl,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      }
      else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    //BEM naming convention 
    <div className="app">
      {user ? (
        <>
        <Bar/>
          <Sidebar />
          <Chat />
        </>
      ) : (
          <Login />
        )}

    </div>
  );
}

export default App;
