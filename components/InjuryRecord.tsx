import React, { useState } from 'react'
import BasicInfo from './BasicInfo'



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
    <form>
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
  )
}

export default InjuryRecord
