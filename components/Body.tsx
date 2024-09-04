import React from 'react';

const Body = () => {
  return (
    <div className="h-[90vh] bg-gray-950 mt-[10vh] bg-cover bg-center flex justify-center items-center">
      <div className="w-[80%] lg:h-[50%] flex justify-start">
        <div className="flex flex-col space-y-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Vytvořit záznam o úrazu
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
            Prohlédnout záznamy
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
            Tkačítko 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
