import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InjuryList from './InjuryList'; 

const Body = () => {

const [isModalOpen, setIsModalOpen] = useState(false);

const toggleModal = () => {
    setIsModalOpen(!isModalOpen); 
    };

  return (
    <div className="h-[90vh] bg-gray-950 mt-[10vh] bg-cover bg-center flex justify-center items-center">
      <div className="w-[80%] lg:h-[50%] flex justify-start">
        <div className="flex flex-col space-y-4">
        <Link to="/injury-form">
          <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-900">
            Vytvořit záznam o úrazu
          </button>
        </Link>
          <button 
            onClick={toggleModal}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-900">
            Prohlédnout záznamy
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-900">
            Tkačítko 3
          </button>
        </div>
      </div>
      {isModalOpen && <InjuryList toggleModal={toggleModal} />}
    </div>
  );
};

export default Body;
