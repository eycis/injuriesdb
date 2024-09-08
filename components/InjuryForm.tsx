import { exportToExcel } from '@/Services/exportToExcelService';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FormData {
  employer: string;
  insurance: string;
  name: string;
  birthDate: string;
  personalNumber: string;
  address: string;
  profession: string;
  hoursWorked: string;
  injuryDate: string;
  injuryDescription: string;
}


const InjuryForm = () => {
    
  const [formData, setFormData] = useState({
    employer: '',
    insurance: '',
    name: '',
    birthDate: '',
    personalNumber: '',
    address: '',
    profession: '',
    hoursWorked: '',
    injuryDate: '',
    injuryDescription: '',
    injuredCount: '',
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
    supervisor: ''
  });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleExport = () => {
    exportToExcel([formData], 'InjuryRecords');
  };

  return (
    <div className="bg-white p-8 max-w-4xl mx-auto mt-10 pt-20 shadow-lg rounded-lg h-auto">
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Zaměstnavatel postiženého:</label>
            <input 
              type="text" 
              name = "employer"
              className="border w-full p-2 mb-4"
              value = {formData.employer}
              onChange = {handleChange} 
              placeholder="Zaměstnavatel"/>
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
            <input type="text" className="border w-full p-2 mb-4" placeholder="Osobní číslo"/>
          </div>
          <div>
            <label>Bydliště postiženého:</label>
            <input type="text" className="border w-full p-2 mb-4" placeholder="bydliště"/>
          </div>
          <div>
            <label>Profese:</label>
            <input type="text" className="border w-full p-2 mb-4" placeholder="Profese"/>
          </div>
          <div>
            <label>Od začátku směny odpracováno:</label>
            <input type="text" className="border w-full p-2 mb-4" placeholder="Odpracované hodiny"/>
          </div>
          <div>
            <label>Datum a čas úrazu:</label>
            <input type="datetime-local" className="border w-full p-2 mb-4"/>
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6">Druh zranění a zraněná část těla:</h2>
        <input type="text" className="border w-full p-2 mb-4" placeholder="Popis zranění"/>
        <div className="grid grid-cols-4 gap-2">
          <div>
            <label>Počet zraněných osob:</label>
            <input type="text" className="border w-full p-2 mb-4" placeholder=""/>
          </div>
          <div>
            <label>Ošetřen u lékaře:</label>
            <input type="text" className="border w-full p-2 mb-4" placeholder="Ano/Ne"/>
          </div>
          <div>
            <label>Zkouška na alkohol:</label>
            <input type="text" className="border w-full p-2 mb-4" placeholder="Ano/Ne"/>
          </div>
          <div>
            <label>Výsledek zkoušky:</label>
            <input type="text" className="border w-full p-2 mb-4" placeholder=""/>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Druh pracovního úrazu:</h3>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> Bez pracovní neschopnosti
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
        <textarea className="border w-full p-2 mb-4" placeholder="Doplňte" rows={1}></textarea>

        <h3 className="text-lg font-semibold mt-6">Místo úrazu:</h3>
        <textarea className="border w-full p-2 mb-4" placeholder="Doplňte" rows={1}></textarea>

        <h3 className="text-lg font-semibold mt-6">Popis úrazového děje:</h3>
        <textarea className="border w-full p-2 mb-4" placeholder="Popis úrazu" rows={4}></textarea>

        <h3 className="text-lg font-semibold mt-6">Jaké předpisy byly v souvislosti s úrazem porušeny a kým:</h3>
        <textarea className="border w-full p-2 mb-4" placeholder="Popis úrazu" rows={4}></textarea>

        <h3 className="text-lg font-semibold mt-6">Opatření přijatá k zabránění opakování pracovního úrazu:</h3>
        <textarea className="border w-full p-2 mb-4" placeholder="Popis úrazu" rows={4}></textarea>

        <h3 className="text-lg font-semibold mt-6">Jména svědků úrazu, osobní číslo, popř: datum narození a adresa bydliště:</h3>
        <textarea className="border w-full p-2 mb-4" placeholder="Popis úrazu" rows={4}></textarea>

        <h3 className="text-lg font-semibold mt-6">Jméno a přijmení nadřízeného:</h3>
        <textarea className="border w-full p-2 mb-4" placeholder="Popis úrazu" rows={1}></textarea>
        <Link to="/">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Odeslat záznam
        </button>
        </Link>
        <button type="button" 
          className="bg-blue-500 text-white py-2 px-4 mx-[2rem] rounded hover:bg-blue-700"
          onClick = {() => window.print()}>
          Vytisknout záznam
        </button>
        <button type="button" 
          className="bg-blue-500 text-white py-2 px-4 mx-[1rem] rounded hover:bg-blue-700"
          onClick = {handleExport}>
          Exportovat do excelu
        </button>
        <button type="button" className="bg-blue-500 text-white py-2 px-4 mx-[1rem] rounded hover:bg-blue-700">
          Vytvořit záznam o úrazu
        </button>
      </form>
    </div>
  );
};

export default InjuryForm;
