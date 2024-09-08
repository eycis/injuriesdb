import React, { useEffect, useState } from 'react';
import Head from '@/components/Head'; 
import Body from '@/components/Body'; 
import { useRouter } from 'next/router'; 
const IndexPage = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (token) {
      setIsLoggedIn(true); 
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  return (
    <div className="overflow-x-hidden">
      <Head /> 
      <div className="mt-[15vh]">
        {isLoggedIn ? (
          <Body /> 
        ) : (
          <button onClick={handleLogin}>Přihlásit se</button>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
