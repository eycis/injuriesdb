import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from '@/components/Body';
import InjuryForm from '@/components/InjuryForm';
import Head from '@/components/Head';
import '@/styles/globals.css'; 

const App = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
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
