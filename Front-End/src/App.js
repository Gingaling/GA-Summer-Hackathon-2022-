import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import AllergyDisclaimer from './components/disclaimer';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './components/NavBar';
import Form from './pages/Form/Form.js';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
<<<<<<< HEAD
    <div>
      <LoginButton />
    </div>
    <div className="btn-text-right">
      <LogoutButton />
    </div>
    {/* <Profile /> */}
    <NavBar />
    <Form />
=======
    <LoginButton />
    <LogoutButton />
    <Profile />
    <AllergyDisclaimer />
>>>>>>> 30d8fd661888854e70e202c87c07aca40f0e61e7
    </>
  );
}

export default App;