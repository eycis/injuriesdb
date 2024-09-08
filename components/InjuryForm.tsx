import { exportToExcel } from '@/Services/exportToExcelService';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className='mb-[2rem]'>
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
      <button type="button" className="bg-blue-500 text-white py-2 px-4 mx-[1rem]  w-[250px] rounded hover:bg-blue-700">
        Vytvořit záznam o úrazu
      </button>
    </div>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Pobočka:</label>
            <input 
              type="text" 
              name = "employer"
              className="border w-full p-2 mb-4"
              value = {formData.employer}
              onChange = {handleChange} 
              placeholder="Pobočka"/>
          </div>
          <div>
            <label>Pojišťovna postiženého:</label>
            <input 
              type="text" 
              name = "insurance"
              className="border w-full p-2 mb-4"
              value = {formData.insurance}
              onChange = {handleChange}
              placeholder="Evidenční číslo"/>
          </div>
          <div>
            <label>Jméno a příjmení postiženého:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              placeholder="Jméno"
              name = "name"
              onChange = {handleChange}
              value = {formData.name}/>
          </div>
          <div>
            <label>Datum narození:</label>
            <input 
              type="date" 
              className="border w-full p-2 mb-4"
              name = "birthDate"
              onChange = {handleChange}
              value = {formData.birthDate}/>
          </div>
          <div>
            <label>Osobní číslo:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              placeholder="Osobní číslo"
              name = "personalNumber"
              onChange = {handleChange}
              value = {formData.personalNumber}/>
          </div>
          <div>
            <label>Bydliště postiženého:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              placeholder="bydliště"
              name = "address"
              onChange = {handleChange}
              value = {formData.address}/>
          </div>
          <div>
            <label>Pracovní pozice:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              placeholder="Position"
              name = "position"
              onChange = {handleChange}
              value = {formData.position}/>
          </div>
          <div>
            <label>Od začátku směny odpracováno:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              placeholder="Odpracované hodiny"
              name = "hoursWorked"
              onChange = {handleChange}
              value = {formData.hoursWorked}/>
          </div>
          <div>
            <label>Datum a čas úrazu:</label>
            <input 
              type="datetime-local" 
              className="border w-full p-2 mb-4"
              name = "injuryDateTime"
              onChange = {handleChange}
              value = {formData.injuryDateTime}/>
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6">Druh zranění a zraněná část těla:</h2>
        <input type="text" className="border w-full p-2 mb-4" placeholder="Popis zranění"/>
        <div className="grid grid-cols-4 gap-2">
          <div>
            <label>Počet zraněných osob:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              placeholder=""
              name = "numberOfInjuredPeople"
              onChange = {handleChange}
              value = {formData.numberOfInjuredPeople}/>
          </div>
          <div>
            <label>Ošetřen u lékaře:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              placeholder="Ano/Ne"
              name = "doctorVisit"
              onChange = {handleChange}
              value = {formData.doctorVisit}/>
          </div>
          <div>
            <label>Zkouška na alkohol:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              placeholder="Ano/Ne"
              name = "alcoholTest"
              onChange = {handleChange}
              value = {formData.alcoholTest}/>
          </div>
          <div>
            <label>Výsledek zkoušky:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              placeholder="Výsledek"
              name = "alcoholTestResult"
              onChange = {handleChange}
              value = {formData.alcoholTestResult}/>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Druh pracovního úrazu:</h3>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              className="mr-2"
              name = "noWorkAbsence"
              //checked = {formData.noWorkAbsence}
              //onChange = {handleChange}
              /> 
              Bez pracovní neschopnosti
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> S pracovní neschopností 3 kalendářních dnů
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> S pracovní neschopností nad 3 kalendářní dny
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> S hospitalizací nad 5 dnů
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> Smrtelný pracovní úraz
          </label>
        </div>        

        <h3 className="text-lg font-semibold mt-6 mb-3">Co bylo zdrojem úrazu?</h3>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> Dopravní prostředek
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> průmyslové škodliviny
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> stroje a zařízení přenosná nebo mobilní
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> horké látky a předměty, oheň a výbušniny
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> materiál, břemena
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> stroje a zařízení stabilní
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> pád na rovině, z výšky, do hloubky, propadnutí
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> lidé, zvířata nebo přírodní živly
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> nástroj, přístroj, nářadí
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> elektrická energie
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> jiné
          </label>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Proč k úrazu došlo? Zaškrtněte příčinu:</h3>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> poruchy nebo vadný stav některého zdrojů úrazu
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> pro porušení předpisů vztahujících se k práce
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> pro špatně, nebo nedostatečné vyhodnocení rizika
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> pro nepředvídatelné riziko práce nebí selhání lidského
            činitele
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> pro nedostatečné osobní zajištění zaměstnance
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> stroje a zařízení stabilní
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> pro jiný, blíže nespecifikovaný důvod
          </label>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Činnost, při níž k úrazu došlo:</h3>
        <textarea 
          className="border w-full p-2 mb-4" 
          placeholder="Doplňte" 
          rows={1}
          name = "activity"
          onChange = {handleChange}
          value = {formData.activity}>
          </textarea>

        <h3 className="text-lg font-semibold mt-6">Místo úrazu:</h3>
        <textarea 
          className="border w-full p-2 mb-4" 
          placeholder="Doplňte" 
          rows={1}
          name = "location"
          onChange = {handleChange}
          value = {formData.location}>
        </textarea>

        <h3 className="text-lg font-semibold mt-6">Popis úrazového děje:</h3>
        <textarea 
          className="border w-full p-2 mb-4" 
          placeholder="Popis úrazu" 
          rows={4}
          name = "injuryEventDescription"
          onChange = {handleChange}
          value = {formData.injuryEventDescription}>
          </textarea>

        <h3 className="text-lg font-semibold mt-6">Jaké předpisy byly v souvislosti s úrazem porušeny a kým:</h3>
        <textarea 
          className="border w-full p-2 mb-4" 
          placeholder="Popis úrazu" 
          rows={4}
          name = "violation"
          onChange = {handleChange}
          value = {formData.violation}>
          </textarea>

        <h3 className="text-lg font-semibold mt-6">Opatření přijatá k zabránění opakování pracovního úrazu:</h3>
        <textarea 
          className="border w-full p-2 mb-4" 
          placeholder="Popis úrazu" 
          rows={4}
          name = "preventionMeasures"
          onChange = {handleChange}
          value = {formData.preventionMeasures}>
          </textarea>

        <h3 className="text-lg font-semibold mt-6">Jména svědků úrazu, osobní číslo, popř: datum narození a adresa bydliště:</h3>
        <textarea 
          className="border w-full p-2 mb-4" 
          placeholder="Popis úrazu" 
          rows={4}
          name = "witnessInfo"
          onChange = {handleChange}
          value = {formData.witnessInfo}>
          </textarea>

        <h3 className="text-lg font-semibold mt-6">Jméno a přijmení nadřízeného:</h3>
        <textarea 
          className="border w-full p-2 mb-4" 
          placeholder="Popis úrazu" 
          rows={1}
          name = "supervisor"
          onChange = {handleChange}
          value = {formData.supervisor}>
          </textarea>
      </form>
      <Link to="/">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 w-[250px] mb-[2rem] mt-[1rem] rounded hover:bg-blue-700">
          Odeslat záznam
        </button>
        </Link>
    </div>
  );
};

export default InjuryForm;
