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
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

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
        <Route path="/injury-list" element={<div><InjuryList /></div>} />
        <Route path="/injury-record" element={<div><Head/> <InjuryRecord/> </div>} />
        <Route path="/injury-form-example" element={<div><Head/> <InjuryFormExample/> </div>} />
        <Route path="/injury-record-example" element={<div><Head/> <InjuryRecordExample/> </div>} />
      </Routes>
    </Router>
  );
};

export default App;
