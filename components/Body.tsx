import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Body = () => {

  return (
    <div className="h-[90vh] bg-gray-950 mt-[10vh] bg-cover bg-center flex justify-center items-center">
      <div className="w-[80%] lg:h-[50%] flex justify-start">
        <div className="flex flex-col space-y-4">
        <Link to="/injury-form">
          <button className="bg-blue-700 text-white py-[1rem] px-[1rem] w-[300px] rounded hover:bg-blue-900">
            Vytvořit záznam do knihy úrazů
          </button>
        </Link>
        <Link to="/injury-list">
          <button
            className="bg-blue-600 text-white py-[1rem] px-[1rem] w-[300px] rounded hover:bg-blue-900">
            Prohlédnout záznamy 
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
