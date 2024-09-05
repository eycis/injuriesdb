import React, { useEffect, useState } from 'react';
import Head from '@/components/Head'; // Hlavička aplikace
import Body from '@/components/Body'; // Hlavní stránka s tlačítky
import InjuryForm from '@/components/InjuryForm'; // Stránka s formulářem
import { useRouter } from 'next/router'; // Next.js Router

const IndexPage = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Získání tokenu z localStorage
    if (token) {
      setIsLoggedIn(true); // Uživatele přihlásíme, pokud token existuje
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true); // Funkce pro přihlášení
  };

  return (
    <div className="overflow-x-hidden">
      <Head /> {/* Hlavička */}
      <div className="mt-[15vh]">
        {isLoggedIn ? (
          <Body /> // Pokud je přihlášený, zobrazí Body komponentu
        ) : (
          <button onClick={handleLogin}>Přihlásit se</button> // Tlačítko pro přihlášení
        )}
      </div>
    </div>
  );
};

export default IndexPage;
