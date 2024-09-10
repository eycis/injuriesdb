import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from '@/components/Body';
import InjuryForm from '@/components/InjuryForm';
import Head from '@/components/Head';
import '@/styles/globals.css'; 
import InjuryList from '@/components/InjuryList';
import InjuryRecord from '@/components/InjuryRecord';
import InjuryFormExample from '@/components/InjuryFormExample';
import InjuryRecordExample from '@/components/InjuryRecordExample';

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
        <Route path="/injury-list" element={<div><Head/> <InjuryList /></div>} />
        <Route path="/injury-record" element={<div><Head/> <InjuryRecord/> </div>} />
        <Route path="/injury-form-example" element={<div><Head/> <InjuryFormExample/> </div>} />
        <Route path="/injury-record-example" element={<div><Head/> <InjuryRecordExample/> </div>} />
      </Routes>
    </Router>
  );
};

export default App;
