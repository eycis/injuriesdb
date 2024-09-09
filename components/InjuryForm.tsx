import { exportToExcel } from '@/Services/exportToExcelService';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicInfo from './BasicInfo';

interface FormData {
  employer: string;
  name: string;
  injuryDate: string;
  injuryType: string;
  birthDate: string;
  insurance: string;
  witnessInfo: string;
  personalNumber: string;
  address: string;
  position: string;
  hoursWorked: string;
  injuryDescription: string;
  injuryTime: string;
  doctorVisit: string;
  alcoholTest: string;
  alcoholTestResult: string;
  injuryCause: string;
  activity: string;
  location: string;
  injuryEventDescription: string;
  violation: string;
  preventionMeasures: string;
  supervisor: string;
  numberOfInjuredPeople: string;
}


const InjuryForm = () => {
    
  const [formData, setFormData] = useState({
    employer: '',
    insurance: '',
    name: '',
    birthDate: '',
    personalNumber: '',
    address: '',
    position: '',
    hoursWorked: '',
    injuryDateTime: '',
    injuryDescription: '',
    doctorVisit: '',
    alcoholTest: '',
    alcoholTestResult: '',
    injuryType: '',
    injuryCause: '',
    activity: '',
    location: '',
    injuryEventDescription: '',
    violation: '',
    preventionMeasures: '',
    witnessInfo: '',
    supervisor: '',
    numberOfInjuredPeople: '',
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
};

  const handleExport = () => {
    exportToExcel([formData], 'InjuryRecords');
  };

  return (
    <div className="bg-white max-w-4xl mx-auto mt-10 pt-20 shadow-lg rounded-lg h-auto">
    <div className='mb-[2rem] print:hidden'>
      <button type="button" 
        className="bg-blue-500 text-white py-2 px-4 mx-[2rem] w-[250px] rounded hover:bg-blue-700"
        onClick = {() => window.print()}>
        Vytisknout záznam
      </button>
      <button type="button" 
        className="bg-blue-500 text-white py-2 px-4 mx-[1rem] w-[250px] rounded hover:bg-blue-700"
        onClick = {handleExport}>
        Exportovat do excelu
      </button>
      <Link to='/injury-record'>
      <button type="button" className="bg-blue-500 text-white py-2 px-4 mx-[1rem]  w-[250px] rounded hover:bg-blue-700">
        Vytvořit záznam o úrazu
      </button>
      </Link>
    </div>
      <form>
        
        <BasicInfo formData={formData} handleChange={handleChange} />

        
      </form>
      <Link to="/">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 w-[250px] mb-[2rem] mt-[1rem] rounded hover:bg-blue-700 print:hidden">
          Uložit
        </button>
        </Link>
    </div>
  );
};

export default InjuryForm;
