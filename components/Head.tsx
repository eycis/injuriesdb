import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[10vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
          <Link to='/'>
            <button className="flex-[0.6] uppercase cursor-pointer text-[25px] text-white font-bold">
              Elektronická Kniha <span className="text-blue-400">Úrazů</span>
            </button>
          </Link>
      </div>
    </div>
  );
}

export default Head;
