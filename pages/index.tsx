import React, { useEffect, useState } from 'react'
import Head from '@/components/Head';
import Body from '@/components/Body';
import Login from '@/components/Login';

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
    <div className="overflow-x-hidden">
      <Head/>
      {/* <div>
      {isLoggedIn ? <Body /> : <Login onLogin={handleLogin} />}
      </div> */}
      <Body/>
    </div>
  )
}

export default index