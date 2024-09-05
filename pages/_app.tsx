import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from '@/components/Body';
import InjuryForm from '@/components/InjuryForm';
import Head from '@/components/Head';
import '@/styles/globals.css'; 

const App = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Nastaví na true až po vykreslení na straně klienta
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Pokud nejsme na straně klienta, nevykreslíme Router
    return null;
  }

  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/injury-form" element={<div><Head/> <InjuryForm /></div>} />
      </Routes>
    </Router>
  );
};

export default App;
