import React, { useState } from 'react'
import BasicInfo from './BasicInfo'
import { Link } from 'react-router-dom';



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


  return (
    <div className="bg-white max-w-4xl mx-auto mt-10 pt-20 shadow-lg rounded-lg h-auto">
    <form>
    <div className="flex items-center justify-between mb-[2rem]">
        <h3 className="text-lg font-bold uppercase">Záznam o úrazu:</h3>
        <button 
            type="button" 
            className="bg-blue-500 text-white py-2 px-4 w-[250px] rounded hover:bg-blue-700 print:hidden"
            onClick={() => window.print()}>
            Vytisknout záznam
        </button>
    </div>
        <BasicInfo formData={formData} handleChange={handleChange} />

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
    </form>
        <Link to="/">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 w-[250px] mb-[2rem] mt-[1rem] rounded hover:bg-blue-700 print:hidden">
          Uložit záznam ze zranění
        </button>
        </Link>
    </div>
  )
}

export default InjuryRecord
