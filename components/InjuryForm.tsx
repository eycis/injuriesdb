import { exportToExcel } from '@/Services/exportToExcelService';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicInfo from './BasicFormInfo';

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
    <div className="bg-white max-w-4xl mx-auto mt-10 pt-20 shadow-lg rounded-lg h-auto print:pt-0">
      <form>
        
        <BasicInfo formData={formData} handleChange={handleChange} />

        
      </form>
      <div className='mb-[3rem] print:hidden py-[2rem] flex justify-center items-center'>
      <Link to="/">
        <button 
          type="submit" 
          className="bg-green-600 text-white mx-[1rem] w-[190px] h-[40px] rounded hover:bg-green-500"
          onClick = {() => {
            window.alert("Záznam o zranění byl uložen.")}}>
          Uložit
        </button>
        </Link>
        <button type="button" 
          className="bg-blue-500 text-white mx-[1rem] w-[200px] h-[40px] rounded hover:bg-blue-700"
          onClick = {() => window.print()}>
          Vytisknout záznam
        </button>
        <button type="button" 
          className="bg-blue-500 text-white mx-[1rem] w-[200px] h-[40px]  rounded hover:bg-blue-700"
          onClick = {handleExport}>
          Exportovat do excelu
        </button>
    </div>
    </div>
  );
};

export default InjuryForm;
