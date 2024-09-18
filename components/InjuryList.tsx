import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { exportBook } from '@/Services/exportInjuries';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InjuryList = () => {
  const injuries = [
    {
      employer: "A",
      entity: '123',
      name: 'Jan Novák',
      injuryDate: '2024-09-15 14:30',
      injuryType: 'Pád ze schodů',
      status: 'Čeká na potvrzení',
      injury: true,
      record: false,
    },
    {
      employer: "B",
      entity: '123',
      name: 'Petr Hilšer',
      injuryDate: '2024-22-03 14:30',
      injuryType: 'Pád',
      status: 'Zpracován',
      injury: true,
      record: true,
    },
    {
      employer: "A",
      entity: '456',
      name: 'Petr Dvořák',
      injuryDate: '2024-09-10 09:00',
      injuryType: 'Řezná rána',
      status: 'Čeká na zpracování',
      injury: true,
      record: true,
    },
    {
      employer: "B",
      entity: '789',
      name: 'Martin Novotný',
      injuryDate: '2024-08-12 05:00',
      injuryType: 'Řezná rána',
      status: 'Čeká na zpracování',
      injury: true,
      record: true,
    },
    {
      employer: "B",
      entity: '789',
      name: 'Petr Dvořák',
      injuryDate: '2024-01-8 12:00',
      injuryType: 'Úder předmětem',
      status: 'Čeká na zpracování',
      injury: true,
      record: true,
    },
  ];

  const [selectedEntity, setSelectedEntity] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const filteredInjuries = injuries.filter( injury => {
    if(!isAdmin && injury.entity !== '123') return false;
    return selectedEntity ? injury.entity && injury.employer == selectedEntity : true;
  })

    useEffect(() => {
      AOS.init({
        duration: 800, 
      });
    }, []);

    useEffect(() => {
      AOS.refresh();
    }, [filteredInjuries]);

  return (
    <div>
     <div className="w-[100%] fixed z-[10000] top-0 h-[10vh] bg-[#141c27] shadow-md print:hidden">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
          <Link to='/'>
            <button className="flex-[0.6] uppercase cursor-pointer text-[25px] text-white font-bold hover:text-blue-400 transition duration-300 focus:outline-none">
              Elektronická Kniha <span className="text-blue-400">Úrazů</span>
            </button>
          </Link>

        {isAdmin &&(
        <div>
          <label htmlFor="entityDropdown" className="text-white font-bold ">
            Zaměstnavatel
          </label>
          <select
            id="entityDropdown"
            className="ml-3 p-2 rounded bg-white text-black"
            value={selectedEntity}
            onChange={(e) => setSelectedEntity(e.target.value)}
          >
            <option value="">Vše</option>
            <option value="123">A</option>
            <option value="456">B</option>
          </select>
        </div>
        )}
        {isAdmin &&(
        <div>
          <label htmlFor="entityDropdown" className="text-white font-bold ">
            Zobrazit provoz:
          </label>
          <select
            id="entityDropdown"
            className="ml-3 p-2 rounded bg-white text-black"
            value={selectedEntity}
            onChange={(e) => setSelectedEntity(e.target.value)}
          >
            <option value="">Vše</option>
            <option value="123">123</option>
            <option value="456">456</option>
            <option value="789">789</option>
          </select>
        </div>
        )}
        {isAdmin &&(
        <button 
            type = "button"
            className='action-button'
            onClick = {exportBook}>
            Exportovat knihu úrazů
        </button>
        )}
        <div>
        <label htmlFor="adminToggle" className="text-white font-bold mr-2">Admin:</label>
          <input
            id="adminToggle"
            type="checkbox"
            checked={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
            className="toggle-checkbox w-6 h-6"
          />
          </div>
      </div>
      </div>      

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:h-[80%] p-4 flex flex-col items-center">
        <div className="w-full">
          <div className="grid grid-cols-7 gap-4 text-black font-bold uppercase mt-4 mb-4">
            <label>Zaměstnavatel</label>
            <label>Provoz:</label>
            <label>Jméno postiženého:</label>
            <label>Datum zranění:</label>
            <label>Typ zranění:</label>
            <label>Status:</label>
            <label>Zápis v knize úrazů:</label>
            <label>Záznam o úrazu:</label>
          </div>
          <div className="space-y-2">
            {filteredInjuries.map((injury, index) => (
              <div key={index} 
                    className="grid grid-cols-7 gap-4 bg-gray-400 p-2 rounded"
                    data-aos="fade-up"
                    data-aos-delay={index * 200}>
                <div>{injury.employer}</div>
                <div>{injury.entity}</div>
                <div>{injury.name}</div>
                <div>{injury.injuryDate}</div>
                <div>{injury.injuryType}</div>
                <div>{injury.status}</div>
                <Link to="/injury-form-example">
                  <button>{injury.injury ? <FontAwesomeIcon icon={faEye} /> : ''}</button>
                </Link>
                <Link to="/injury-record-example">
                  <button>{injury.record ? <FontAwesomeIcon icon={faEye} /> : ''}</button>
                </Link>
              </div>
            ))}
          </div>
          </div>
      </div>
    </div>
  );
};

export default InjuryList;
