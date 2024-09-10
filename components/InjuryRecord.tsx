import React, { useState } from 'react'
import BasicInfo from './BasicFormInfo'
import { Link } from 'react-router-dom';
import { exportToExcel } from '@/Services/exportToExcelService';

export const InjuryRecord = () => {

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
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleExport = () => {
    exportToExcel([formData], 'InjuryRecords');
  };


  return (
    <div className="bg-white max-w-4xl mx-auto mt-7 pt-20 shadow-lg rounded-lg h-auto print:pt-0">
    <form>
        <h1 className="text-lg font-bold uppercase px-[2rem] mb-[2rem]">Záznam o úrazu:</h1>

        <BasicInfo formData={formData} handleChange={handleChange} />

        <div className="px-[1rem]">
        <h3 className="text-lg font-semibold mt-6">Dodatečná otázka č. 1:</h3>
        <textarea 
        className="border w-full p-2 mb-4" 
        placeholder="Popis" 
        rows={4}
        // name = "preventionMeasures"
        // onChange = {handleChange}
        // value = {formData.preventionMeasures}
        >
        </textarea>

        <h3 className="text-lg font-semibold mt-6">Dodatečná otázka č. 2:</h3>
        <textarea 
        className="border w-full p-2 mb-4" 
        placeholder="Popis" 
        rows={4}
        // name = "witnessInfo"
        // onChange = {handleChange}
        // value = {formData.witnessInfo}
        >
        </textarea>

        <h3 className="text-lg font-semibold mt-6">Dodatečná otázka č. 3:</h3>
        <textarea 
        className="border w-full p-2 mb-4" 
        placeholder="Popis" 
        rows={1}
        // name = "supervisor"
        // onChange = {handleChange}
        // value = {formData.supervisor}
        >
        </textarea>
        </div>
    </form>
    <div className='mb-[3rem] print:hidden py-[2rem] flex justify-center items-center'>
      <Link to="/">
        <button 
          type="submit" 
          className="bg-green-600 text-white mx-[1rem] w-[200px] h-[40px] rounded hover:bg-blue-700"
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
  )
}

export default InjuryRecord
