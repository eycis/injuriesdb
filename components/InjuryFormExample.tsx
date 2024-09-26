import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormData } from '@/models/form';
  

const InjuryFormExample = () => {
  const [formData, setFormData] = useState<typeof FormData>({
    recordId: 654116,
    employer: 'Zamestnavatel_vzor',
    entity: '654321',
    insurance: 'XYZ Insurance',
    name: 'Jan Novák',
    birthDate: new Date('1990-03-05'),
    personalNumber: 123456,
    address: 'Praha 4, Česká republika',
    position: 'Technik',
    hoursWorked: 6,
    injuryDateTime: new Date('2024-12-06T10:30:00'),
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
    numberOfInjuredPeople: 1,
    supervisorEmail: 'example@gmail.com',
    injuredBodypart:"Řezná rána na ruce",
  });

    const [isAdmin, setIsAdmin] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
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
             <button className="flex-[0.6] uppercase cursor-pointer text-[25px] text-white form-text hover:text-blue-400 transition duration-300 focus:outline-none">
               Elektronická Kniha <span className="text-blue-400">Úrazů</span>
             </button>
           </Link>
           <div>
         <label htmlFor="adminToggle" className="text-white form-text mr-2">Admin:</label>
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
        <div className="bg-white max-w-4xl mx-auto mt-1 pt-5 shadow-lg rounded-lg h-auto print:pt-0" >
        <div className="grid grid-cols-2 gap-0 px-4">
        <div>
            <label className='form-text'>Zaměstnavatel:</label>
            <input 
              type="text" 
              name = "employer"
              className="form-grid h-5"
              value = {formData.employer}
              disabled={!isAdmin}
              onChange={handleChange}
              placeholder="Zaměstnavatel"/>
          </div>
          <div>
            <label className='form-text'>Provoz:</label>
            <input 
              type="text" 
              name = "entity"
              className="form-grid h-5"
              value = {formData.entity}
              disabled={!isAdmin}
              onChange={handleChange}
              placeholder="Provoz"/>
          </div>
          <div>
            <label className='form-text'>Pojišťovna postiženého:</label>
            <input 
              type="text" 
              name = "insurance"
              className="form-grid h-5"
              value = {formData.insurance}
              onChange={handleChange}
              disabled={!isAdmin}
              placeholder="Evidenční číslo"/>
          </div>
          <div>
            <label className='form-text'>Jméno a příjmení postiženého:</label>
            <input 
              type="text" 
              name = "name"
              className="form-grid h-5" 
              value = {formData.name}
              disabled={!isAdmin}
              onChange={handleChange}
              placeholder="Jméno"/>
          </div>
          <div>
            <label className='form-text'>Datum narození:</label>
            <input 
              type="date" 
              name = "birthDate"
              className="form-grid h-5"
              value = {formData.birthDate.toISOString().slice(0,10)}
              disabled={!isAdmin}
              onChange={handleChange}
              placeholder="Datum narození"/>
          </div>
          <div>
            <label className='form-text'>Osobní číslo:</label>
            <input 
              type="text" 
              name="personalNumber" 
              className="form-grid h-5" 
              value = {formData.personalNumber}
              disabled={!isAdmin}
              onChange={handleChange}
              placeholder="Osobní číslo"/>
          </div>
          <div>
            <label className='form-text'>Bydliště postiženého:</label>
            <input 
              type="text" 
              name="address"
              className="form-grid h-5" 
              value = {formData.address}
              disabled={!isAdmin}
              onChange={handleChange}
              placeholder="Bydliště"/>
          </div>
          <div>
            <label className='form-text'>Pracovní pozice:</label>
            <input 
              type="text" 
              name="position" 
              className="form-grid h-5" 
              value = {formData.position}
              disabled={!isAdmin}
              onChange={handleChange}
              placeholder="Pracovní pozice"/>
          </div>
          <div>
            <label className='form-text'>Od začátku směny odpracováno:</label>
            <input 
              type="text" 
              name="hoursWorked" 
              className="form-grid h-5" 
              value = {formData.hoursWorked}
              disabled={!isAdmin}
              onChange={handleChange}
              placeholder="Odpracované hodiny"/>
          </div>
          <div >
            <label className='form-text'>Datum a čas úrazu:</label>
            <input 
              type="text" 
              name="injuryDateTime"
              className="form-grid h-5"
              value = {formData.injuryDateTime.toLocaleString()}
              disabled={!isAdmin}
              onChange={handleChange}
              placeholder="Datum a čas úrazu"/>
          </div>
        </div>

        <h2 className="form-text px-4">Druh zranění a zraněná část těla:</h2>
        <input 
          type="text" 
          className="form-grid h-5 px-4" 
          value={formData.injuredBodypart}
          disabled={!isAdmin} 
          name="injuredBodypart" 
          onChange={handleChange}
          placeholder="Popis zranění"/>
        
        <div className="grid grid-cols-4 gap-2 px-4">
        <div>
            <label className='form-text'>Počet zraněných osob:</label>
            <input 
            type="text" 
            name = "numberOfInjuredPeople"
            className="form-grid h-5" 
            value = {formData.numberOfInjuredPeople}
            disabled={!isAdmin}
            onChange={handleChange}
            placeholder="Počet zraněných"/>
        </div>
        <div>
            <label className='form-text' >Ošetřen u lékaře:</label>
            <input 
            type="text" 
            name = "doctorVisit"
            className="form-grid h-5" 
            value = {formData.doctorVisit}
            disabled={!isAdmin}
            onChange={handleChange}
            placeholder="Ano/Ne"/>
        </div>
        <div>
            <label className='form-text' >Zkouška na alkohol:</label>
            <input 
            type="text"
            name = "alcoholTest" 
            className="form-grid h-5" 
            value = {formData.alcoholTest}
            disabled={!isAdmin}
            onChange={handleChange}
            placeholder="Ano/Ne"/>
        </div>
        <div>
            <label className='form-text'>Výsledek zkoušky:</label>
            <input 
            type="text" 
            name = "alcoholTestResult"
            className="form-grid h-5" 
            value = {formData.alcoholTestResult}
            disabled={!isAdmin}
            onChange={handleChange}
            placeholder="Výsledek"/>
        </div>
        </div>

        <h3 className="form-text px-4">Druh pracovního úrazu:</h3>
          <div className="grid grid-cols-2 gap-0 px-4">
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                checked
                disabled={!isAdmin} 
              />
              Bez pracovní neschopnosti
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              S pracovní neschopností 3 kalendářních dnů
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              S pracovní neschopností nad 3 kalendářní dny
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              S hospitalizací nad 5 dnů
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              Smrtelný pracovní úraz
            </label>
          </div>

          <h3 className="form-text px-4">Co bylo zdrojem úrazu?</h3>
          <div className="grid grid-cols-2 gap-0 px-4">
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              Dopravní prostředek
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
                checked
              />
              průmyslové škodliviny
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              stroje a zařízení přenosná nebo mobilní
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              horké látky a předměty, oheň a výbušniny
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              materiál, břemena
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              stroje a zařízení stabilní
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              pád na rovině, z výšky, do hloubky, propadnutí
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              lidé, zvířata nebo přírodní živly
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              nástroj, přístroj, nářadí
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              elektrická energie
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              jiné
            </label>
          </div>

          <h3 className="form-text px-4">Proč k úrazu došlo?</h3>
          <div className="grid grid-cols-2 gap-0  px-4 ">
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              Porušení předpisů vztahujících se k práci
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              pro porušení předpisů vztahujících se k práci
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                checked
                disabled={!isAdmin}
              />
              pro špatně, nebo nedostatečné vyhodnocení rizika
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              pro nepředvídatelné riziko práce nebo selhání lidského činitele
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              pro nedostatečné osobní zajištění zaměstnance
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              stroje a zařízení stabilní
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                disabled={!isAdmin}
              />
              pro jiný, blíže nespecifikovaný důvod
            </label>
          </div>

       
        <div className="px-4">
        <h3 className="form-text">Činnost, při níž k úrazu došlo:</h3>
        <textarea 
          className="form-grid py-0 px-4" 
          rows={1}
          name = "activity" 
          value = {formData.activity}
          disabled={!isAdmin}
          onChange={handleChange} 
          placeholder="Doplňte"/>

        <h3 className="form-text">Místo úrazu:</h3>
        <textarea 
          className="form-grid px-4 py-0" 
          rows={1} 
          name= "location"
          value = {formData.location}
          disabled={!isAdmin}
          onChange={handleChange} 
          placeholder="Doplňte"/>

        <h3 className="form-text">Popis úrazového děje:</h3>
        <textarea 
          className="form-grid px-4 py-0" 
          rows={1} 
          name = "injuryDescription"
          value = {formData.injuryDescription}
          disabled={!isAdmin}
          onChange={handleChange} 
          placeholder="Popis úrazu"/>

        <h3 className="form-text">Jaké předpisy byly v souvislosti s úrazem porušeny a kým:</h3>
        <textarea 
          className="form-grid px-4 py-0" 
          rows={1}
          name = "violation"
          value = {formData.violation}
          disabled={!isAdmin}
          onChange={handleChange}
          placeholder="Popis úrazu"/>

        <h3 className="form-text">Opatření přijatá k zabránění opakování pracovního úrazu:</h3>
        <textarea 
          className="form-grid px-4 py-0" 
          rows={1} 
          name = "preventionMeasures"
          value = {formData.preventionMeasures}
          disabled={!isAdmin}
          onChange={handleChange}
          placeholder="Popis úrazu"/>

        <h3 className="form-text">Jména svědků úrazu:</h3>
        <textarea 
          className="form-grid px-4 py-0" 
          rows={1} 
          name = "witnessInfo"
          value = {formData.witnessInfo}
          disabled={!isAdmin}
          onChange={handleChange} 
          placeholder="Popis úrazu"/>

    
        <h3 className="form-text">Zapsal - jméno, přijmení, funkce:</h3>
        <textarea 
          className="form-grid px-4" 
          rows={1} 
          name = "supervisor"
          value = {formData.supervisor}
          disabled={!isAdmin}
          onChange={handleChange}
          placeholder="Popis úrazu" 
          />

        <h3 className="form-text print:hidden">Zapsal - e-mail:</h3>
        <textarea 
          className="form-grid px-4 print:hidden" 
          rows={1} 
          name = "supervisorEmail"
          value = {formData.supervisorEmail}
          disabled={!isAdmin}
          onChange={handleChange}
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
