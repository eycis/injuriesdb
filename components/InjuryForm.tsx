import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicInfo from './BasicFormInfo';
import { FormData } from '@/models/form';

const InjuryForm = () => {
    
  const [formData, setFormData] = useState<FormData>({
    recordId: 0,
    employer: '',
    entity: '',
    insurance: '',
    name: '',
    birthDate: new Date(),
    personalNumber: 0,
    address: '',
    position: '',
    hoursWorked: 0,
    injuryDateTime: new Date(),
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
    numberOfInjuredPeople: 0,
    supervisorEmail: '',
    injuredBodypart: '',
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData((prevState) => ({
      ...prevState,
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
