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
      setIsLoggedIn(false); 
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(false); 
  };

  return (
    <div>
    </div>
  );
};

export default IndexPage;
