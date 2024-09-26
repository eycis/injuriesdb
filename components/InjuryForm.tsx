import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicInfo from './BasicFormInfo';
import { FormData } from '@/models/form';

const InjuryForm = () => {
    
  const [formData, setFormData] = useState<typeof FormData>({
    ...FormData
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
};

  return (
    <div className="bg-white max-w-4xl mx-auto mt-10 pt-20 shadow-lg rounded-lg h-auto print:pt-0">
      <form>
        
        <BasicInfo formData={formData} handleChange={handleChange} />

        
      </form>
      <div className='mb-12 print:hidden py-8 flex justify-center items-center'>
      <Link to="/">
        <button 
          type="submit" 
          className="save-button"
          onClick = {() => {
            window.alert("Záznam o zranění byl uložen.")}}>
          Uložit ke schválení
        </button>
        </Link>
    </div>
    </div>
  );
};

export default InjuryForm;
