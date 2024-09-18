import { exportToExcel } from '@/Services/exportToExcelService';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormData } from '@/models/form';
  

const InjuryFormExample = () => {
  const [formData, setFormData] = useState({
    employer: 'ABC Corporation',
    insurance: 'XYZ Insurance',
    name: 'Jan Novák',
    birthDate: '1985-07-23',
    personalNumber: '123456',
    address: 'Praha 4, Česká republika',
    position: 'Technik',
    hoursWorked: '6 hodin',
    injuryDateTime: '2024-09-10T14:30',
    injuryDescription: 'Řezná rána na ruce',
    doctorVisit: 'Ano',
    alcoholTest: 'Ne',
    alcoholTestResult: 'Negativní',
    injuryType: '',
    injuryCause: '',
    activity: 'Údržba stroje',
    location: 'Praha, sklad',
    injuryEventDescription: 'Při údržbě stroje došlo k nečekanému spuštění.',
    violation: 'Porušení bezpečnostních předpisů.',
    preventionMeasures: 'Zvýšení kontroly bezpečnostních postupů.',
    witnessInfo: 'Petr Dvořák',
    supervisor: 'Anna Nováková',
    numberOfInjuredPeople: '1 osoba',
  });

    const [isAdmin, setIsAdmin] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

    return (
      <div>
      <div className="w-[100%] sticky z-[10000] top-0 h-[10vh] bg-[#141c27] shadow-md print:hidden">
       <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
           <Link to='/'>
             <button className="flex-[0.6] uppercase cursor-pointer text-[25px] text-white font-bold hover:text-blue-400 transition duration-300 focus:outline-none">
               Elektronická Kniha <span className="text-blue-400">Úrazů</span>
             </button>
           </Link>
           <div>
         <label htmlFor="adminToggle" className="text-white font-bold mr-2">Admin:</label>
           <input
             id="adminToggle"
             type="checkbox"
             checked={isAdmin}
             onChange={() => setIsAdmin(!isAdmin)}
             className="toggle-checkbox w-6 h-6"
           />
           </div>
        </div>
        </div>
        <div className="bg-white max-w-4xl mx-auto mt-10 pt-5 shadow-lg rounded-lg h-auto print:pt-0" >
        <div className="grid grid-cols-2 gap-4 px-[1rem]">
          <div>
            <label className='font-bold'>Pobočka:</label>
            <input 
              type="text" 
              name = "employer"
              className="border w-full p-2 mb-4"
              value = {formData.employer}
              disabled={!isAdmin}
              onChange={handleInputChange}
              placeholder="Pobočka"/>
          </div>
          <div>
            <label className='font-bold'>Pojišťovna postiženého:</label>
            <input 
              type="text" 
              name = "insurance"
              className="border w-full p-2 mb-4"
              value = {formData.insurance}
              onChange={handleInputChange}
              disabled={!isAdmin}
              placeholder="Evidenční číslo"/>
          </div>
          <div>
            <label className='font-bold'>Jméno a příjmení postiženého:</label>
            <input 
              type="text" 
              name = "name"
              className="border w-full p-2 mb-4" 
              value = {formData.name}
              disabled={!isAdmin}
              onChange={handleInputChange}
              placeholder="Jméno"/>
          </div>
          <div>
            <label className='font-bold'>Datum narození:</label>
            <input 
              type="date" 
              name = "birthDate"
              className="border w-full p-2 mb-4"
              value = {formData.birthDate}
              disabled={!isAdmin}
              onChange={handleInputChange}
              placeholder="Datum narození"/>
          </div>
          <div>
            <label className='font-bold'>Osobní číslo:</label>
            <input 
              type="text" 
              name="personalNumber" 
              className="border w-full p-2 mb-4" 
              value = {formData.personalNumber}
              disabled={!isAdmin}
              onChange={handleInputChange}
              placeholder="Osobní číslo"/>
          </div>
          <div>
            <label className='font-bold'>Bydliště postiženého:</label>
            <input 
              type="text" 
              name="address"
              className="border w-full p-2 mb-4" 
              value = {formData.address}
              disabled={!isAdmin}
              onChange={handleInputChange}
              placeholder="Bydliště"/>
          </div>
          <div>
            <label className='font-bold'>Pracovní pozice:</label>
            <input 
              type="text" 
              name="position" 
              className="border w-full p-2 mb-4" 
              value = {formData.position}
              disabled={!isAdmin}
              onChange={handleInputChange}
              placeholder="Pracovní pozice"/>
          </div>
          <div>
            <label className='font-bold'>Od začátku směny odpracováno:</label>
            <input 
              type="text" 
              name="hoursWorked" 
              className="border w-full p-2 mb-4" 
              value = {formData.hoursWorked}
              disabled={!isAdmin}
              onChange={handleInputChange}
              placeholder="Odpracované hodiny"/>
          </div>
          <div >
            <label className='font-bold'>Datum a čas úrazu:</label>
            <input 
              type="datetime-local" 
              name="injuryDateTime"
              className="border w-full p-2 mb-4"
              value = {formData.injuryDateTime}
              disabled={!isAdmin}
              onChange={handleInputChange}
              placeholder="Datum a čas úrazu"/>
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6 px-[1rem]">Druh zranění a zraněná část těla:</h2>
        <input type="text" className="border w-full p-2 mb-4 px-[1rem]" value="Řezná rána na ruce" placeholder="Popis zranění"/>
        
        <div className="grid grid-cols-4 gap-2 px-[1rem]">
        <div>
            <label>Počet zraněných osob:</label>
            <input 
            type="text" 
            name = "numberOfInjuredPeople"
            className="border w-full p-2 mb-4" 
            value = {formData.numberOfInjuredPeople}
            disabled={!isAdmin}
            onChange={handleInputChange}
            placeholder="Počet zraněných"/>
        </div>
        <div>
            <label>Ošetřen u lékaře:</label>
            <input 
            type="text" 
            name = "doctorVisit"
            className="border w-full p-2 mb-4" 
            value = {formData.doctorVisit}
            disabled={!isAdmin}
            onChange={handleInputChange}
            placeholder="Ano/Ne"/>
        </div>
        <div>
            <label>Zkouška na alkohol:</label>
            <input 
            type="text"
            name = "alcoholTest" 
            className="border w-full p-2 mb-4" 
            value = {formData.alcoholTest}
            disabled={!isAdmin}
            onChange={handleInputChange}
            placeholder="Ano/Ne"/>
        </div>
        <div>
            <label>Výsledek zkoušky:</label>
            <input 
            type="text" 
            name = "alcoholTestResult"
            className="border w-full p-2 mb-4" 
            value = {formData.alcoholTestResult}
            disabled={!isAdmin}
            onChange={handleInputChange}
            placeholder="Výsledek"/>
        </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3 px-[1rem]">Druh pracovního úrazu:</h3>
          <div className="grid grid-cols-2 gap-4 px-[1rem]">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked
                disabled={!isAdmin} 
              />
              Bez pracovní neschopnosti
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              S pracovní neschopností 3 kalendářních dnů
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              S pracovní neschopností nad 3 kalendářní dny
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              S hospitalizací nad 5 dnů
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              Smrtelný pracovní úraz
            </label>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-3 break-before-page px-[1rem]">Co bylo zdrojem úrazu?</h3>
          <div className="grid grid-cols-2 gap-4 px-[1rem]">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              Dopravní prostředek
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
                checked
              />
              průmyslové škodliviny
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              stroje a zařízení přenosná nebo mobilní
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              horké látky a předměty, oheň a výbušniny
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              materiál, břemena
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              stroje a zařízení stabilní
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              pád na rovině, z výšky, do hloubky, propadnutí
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              lidé, zvířata nebo přírodní živly
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              nástroj, přístroj, nářadí
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              elektrická energie
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              jiné
            </label>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-3 px-[1rem]">Proč k úrazu došlo?</h3>
          <div className="grid grid-cols-2 gap-4  px-[1rem] ">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              Porušení předpisů vztahujících se k práci
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              pro porušení předpisů vztahujících se k práci
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked
                disabled={!isAdmin}
              />
              pro špatně, nebo nedostatečné vyhodnocení rizika
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              pro nepředvídatelné riziko práce nebí selhání lidského činitele
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              pro nedostatečné osobní zajištění zaměstnance
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              stroje a zařízení stabilní
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              pro jiný, blíže nespecifikovaný důvod
            </label>
          </div>

       
        <div className="px-[1rem]">
        <h3 className="text-lg font-semibold mt-6 mb-3">Činnost, při níž k úrazu došlo:</h3>
        <textarea 
          className="border w-full p-2 mb-4 " 
          rows={1}
          name = "activity" 
          value = {formData.activity}
          disabled={!isAdmin}
          onChange={handleInputChange} 
          placeholder="Doplňte"/>

        <h3 className="text-lg font-semibold mt-6 px-[1rem]">Místo úrazu:</h3>
        <textarea 
          className="border w-full p-2 mb-4 px-[1rem]" 
          rows={1} 
          name= "location"
          value = {formData.location}
          disabled={!isAdmin}
          onChange={handleInputChange} 
          placeholder="Doplňte"/>

        <h3 className="text-lg font-semibold mt-6 px-[1rem]">Popis úrazového děje:</h3>
        <textarea 
          className="border w-full p-2 mb-4 px-[1rem]" 
          rows={4} 
          name = "injuryDescription"
          value = {formData.injuryDescription}
          disabled={!isAdmin}
          onChange={handleInputChange} 
          placeholder="Popis úrazu"/>

        <h3 className="text-lg font-semibold mt-6 break-before-page px-[1rem]">Jaké předpisy byly v souvislosti s úrazem porušeny a kým:</h3>
        <textarea 
          className="border w-full p-2 mb-4 px-[1rem]" 
          rows={4}
          name = "violation"
          value = {formData.violation}
          disabled={!isAdmin}
          onChange={handleInputChange}
          placeholder="Popis úrazu"/>

        <h3 className="text-lg font-semibold mt-6 px-[1rem]">Opatření přijatá k zabránění opakování pracovního úrazu:</h3>
        <textarea 
          className="border w-full p-2 mb-4 px-[1rem]" 
          rows={4} 
          name = "preventionMeasures"
          value = {formData.preventionMeasures}
          disabled={!isAdmin}
          onChange={handleInputChange}
          placeholder="Popis úrazu"/>

        <h3 className="text-lg font-semibold mt-6 px-[1rem]">Jména svědků úrazu:</h3>
        <textarea 
          className="border w-full p-2 mb-4 px-[1rem]" 
          rows={4} 
          name = "witnessInfo"
          value = {formData.witnessInfo}
          disabled={!isAdmin}
          onChange={handleInputChange} 
          placeholder="Popis úrazu"/>

        <h3 className="text-lg font-semibold mt-6 px-[1rem]">Jméno a přijmení nadřízeného:</h3>
        <textarea 
          className="border w-full p-2 mb-4 px-[1rem]" 
          rows={1} 
          name = "supervisor"
          value = {formData.supervisor}
          disabled={!isAdmin}
          onChange={handleInputChange}
          placeholder="Popis úrazu" 
          />
          </div>
    
    <div className='mb-12 print:hidden py-8 flex justify-center items-center'>
    {isAdmin && (
    <button 
        type="button" 
        className="save-button"
        onClick={() =>
          window.alert("Zápis byl uložen.")
        }>
        Potvrdit a uložit
    </button>    
    )} 
    {isAdmin && (
    <Link to='/injury-record'>
        <button 
            type="button" 
            className="action-button">
            Vytvořit záznam o úrazu
        </button>
    </Link>
    )}
    <button 
        type="button" 
        className="action-button"
        onClick={() => window.print()}>
        Vytisknout zápis v knize úrazů
    </button>
    </div>
    </div>
    </div>
);
};

export default InjuryFormExample
