import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const InjuryList = () => {
  const injuries = [
    {
      entity: '123',
      name: 'Jan Novák',
      injuryDate: '2024-09-15 14:30',
      injuryType: 'Pád ze schodů',
      status: 'Zpracován',
      injury: true,
      record: false,
    },
    {
      entity: '123',
      name: 'Petr Dvořák',
      injuryDate: '2024-09-10 09:00',
      injuryType: 'Řezná rána',
      status: 'Čeká na zpracování',
      injury: true,
      record: true,
    },
  ];

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] lg:h-[80%] p-4 flex flex-col items-center">   
      <div className="w-full">
        <div className="grid grid-cols-7 gap-4 text-black bold uppercase mt-[1rem] mb-[1rem]">
          <label>Číslo podniku:</label>
          <label>Jméno postiženého:</label>
          <label>Datum zranění:</label>
          <label>Typ zranění:</label>
          <label>Status:</label>
          <label>Zpráva o zranění:</label>
          <label>Zápis o zranění:</label>
        </div>
        <div className="space-y-2" >
          {injuries.map((injury, index) => (
            <div key={index} className="grid grid-cols-7 gap-4 bg-gray-400 p-2 rounded">
              <div>{injury.entity}</div>
              <div>{injury.name}</div>
              <div>{injury.injuryDate}</div>
              <div>{injury.injuryType}</div>
              <div>{injury.status}</div>
              <Link to="/injury-form">
                <button>
                  {injury.injury ? <FontAwesomeIcon icon={faEye} /> : ''}
                </button>
              </Link>
              <Link to="/injury-record">
                  <button>
                    {injury.record ? <FontAwesomeIcon icon={faEye} /> : ''}
                  </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InjuryList;
