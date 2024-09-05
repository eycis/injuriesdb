import React from 'react';

interface InjuryListProps {
    toggleModal: () => void;
  }

const InjuryList = ({ toggleModal } : InjuryListProps) => {
  const injuries = [
    {
      name: 'Jan Novák',
      injuryDate: '2024-09-15 14:30',
      injuryType: 'Pád ze schodů',
      status: 'Zpracován',
    },
    {
      name: 'Petr Dvořák',
      injuryDate: '2024-09-10 09:00',
      injuryType: 'Řezná rána',
      status: 'Čeká na zpracování',
    },
  ];

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] lg:h-[70%] max-w-[1000px] bg-[#201f20] rounded-lg shadow-xl p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4 text-white uppercase">Záznamy Úrazů</h2>      
      
      <button
        className="absolute top-2 right-2 text-red-700 text-4xl"
        onClick={toggleModal}
      >
        &times;
      </button>
      
      
      <div className="w-full">
        <div className="grid grid-cols-4 gap-4 text-white bold uppercase mb-4">
          <label>Pojišťovna postiženého:</label>
          <label>Datum zranění:</label>
          <label>Typ zranění:</label>
          <label>Status:</label>
        </div>
        <div className="space-y-2">
          {injuries.map((injury, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 bg-gray-100 p-2 border-b">
              <div>{injury.name}</div>
              <div>{injury.injuryDate}</div>
              <div>{injury.injuryType}</div>
              <div>{injury.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InjuryList;
