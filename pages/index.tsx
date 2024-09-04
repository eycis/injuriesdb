import React, { useEffect, useState } from 'react'
import Head from '@/components/Head';
import Body from '@/components/Body';
import Login from '@/components/Login';
import InjuryForm from '@/components/InjuryForm';

const index = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true); // Zobrazí hlavní obsah po přihlášení
  };

  return (
    <div className="flex flex-col min-h-screen overflow-scroll">
      <Head/>
      <div className="mt-[8vh]">
      {/* <div>
      {isLoggedIn ? <Body /> : <Login onLogin={handleLogin} />}
      </div> */}
      {/* <Body/> */}
      <InjuryForm/>
      </div>
    </div>
  )
}

export default index