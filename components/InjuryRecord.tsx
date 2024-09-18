import React, { useState } from 'react'
import BasicInfo from './BasicFormInfo'
import { Link } from 'react-router-dom';
import { exportToExcel } from '@/Services/exportToExcelService';
import { FormData } from '@/models/form';

export const InjuryRecord = () => {
    const [FormData, setFormData] = useState({
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
      });
  

  return (
    <div className="bg-white max-w-4xl mx-auto mt-7 pt-20 shadow-lg rounded-lg h-auto print:pt-0">
    <form>
        <h1 className="text-lg font-bold uppercase px-[2rem] mb-[2rem]">Záznam o úrazu:</h1>
        <div className="px-[1rem]">
    <div className="grid grid-cols-2 gap-4 px-[1rem]">
        <div>
            <label className='font-bold'>Zaměstnavatel:</label>
            <input 
              type="text" 
              name = "employer"
              className="border w-full p-2 mb-4"
              value = "A"
              placeholder="Zaměstnavatel"/>
          </div>
          <div>
            <label className='font-bold'>Provoz:</label>
            <input 
              type="text" 
              name = "entity"
              className="border w-full p-2 mb-4"
              value = "ABC Corporation"
              placeholder="Provoz"/>
          </div>
          <div>
            <label className='font-bold'>Pojišťovna postiženého:</label>
            <input 
              type="text" 
              name = "insurance"
              className="border w-full p-2 mb-4"
              value = "XYZ Insurance"
              placeholder="Evidenční číslo"/>
          </div>
          <div>
            <label className='font-bold'>Jméno a příjmení postiženého:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              value = "Jan Novák"
              placeholder="Jméno"/>
          </div>
          <div>
            <label className='font-bold'>Datum narození:</label>
            <input 
              type="date" 
              className="border w-full p-2 mb-4"
              value = "1985-07-23"
              placeholder="Datum narození"/>
          </div>
          <div>
            <label className='font-bold'>Osobní číslo:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              value = "123456"
              placeholder="Osobní číslo"/>
          </div>
          <div>
            <label className='font-bold'>Bydliště postiženého:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              value = "Praha 4, Česká republika"
              placeholder="Bydliště"/>
          </div>
          <div>
            <label className='font-bold'>Pracovní pozice:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              value = "Technik"
              placeholder="Pracovní pozice"/>
          </div>
          <div>
            <label className='font-bold'>Od začátku směny odpracováno:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              value = "6 hodin"
              placeholder="Odpracované hodiny"/>
          </div>
          <div >
            <label className='font-bold'>Datum a čas úrazu:</label>
            <input 
              type="datetime-local" 
              className="border w-full p-2 mb-4"
              value = "2024-09-10T14:30"
              placeholder="Datum a čas úrazu"/>
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6">Druh zranění a zraněná část těla:</h2>
        <input type="text" className="border w-full p-2 mb-4" value="Řezná rána na ruce" placeholder="Popis zranění"/>
        
        <div className="grid grid-cols-4 gap-2">
        <div>
            <label>Počet zraněných osob:</label>
            <input 
            type="text" 
            className="border w-full p-2 mb-4" 
            value="1 osoba" 
            placeholder="Počet zraněných"/>
        </div>
        <div>
            <label>Ošetřen u lékaře:</label>
            <input 
            type="text" 
            className="border w-full p-2 mb-4" 
            value="Ano"
            placeholder="Ano/Ne"/>
        </div>
        <div>
            <label>Zkouška na alkohol:</label>
            <input 
            type="text" 
            className="border w-full p-2 mb-4" 
            value="Ne"
            placeholder="Ano/Ne"/>
        </div>
        <div>
            <label>Výsledek zkoušky:</label>
            <input 
            type="text" 
            className="border w-full p-2 mb-4" 
            value="Negativní"
            placeholder="Výsledek"/>
        </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Druh pracovního úrazu:</h3>
        <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked
              />
              Bez pracovní neschopnosti
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              S pracovní neschopností 3 kalendářních dnů
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              S pracovní neschopností nad 3 kalendářní dny
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              S hospitalizací nad 5 dnů
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              Smrtelný pracovní úraz
            </label>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-3 break-before-page">Co bylo zdrojem úrazu?</h3>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              Dopravní prostředek
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked
              />
              průmyslové škodliviny
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              stroje a zařízení přenosná nebo mobilní
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              horké látky a předměty, oheň a výbušniny
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              materiál, břemena
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              stroje a zařízení stabilní
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              pád na rovině, z výšky, do hloubky, propadnutí
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              lidé, zvířata nebo přírodní živly
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              nástroj, přístroj, nářadí
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              elektrická energie
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              jiné
            </label>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-3">Proč k úrazu došlo?</h3>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              Porušení předpisů vztahujících se k práci
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              pro porušení předpisů vztahujících se k práci
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked
              />
              pro špatně, nebo nedostatečné vyhodnocení rizika
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              pro nepředvídatelné riziko práce nebí selhání lidského činitele
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              pro nedostatečné osobní zajištění zaměstnance
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              stroje a zařízení stabilní
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              pro jiný, blíže nespecifikovaný důvod
            </label>
          </div>

        <h3 className="text-lg font-semibold mt-6 mb-3 ">Činnost, při níž k úrazu došlo:</h3>
        <textarea className="border w-full p-2 mb-4" rows={1} value="Údržba stroje" placeholder="Doplňte"/>

        <h3 className="text-lg font-semibold mt-6">Místo úrazu:</h3>
        <textarea className="border w-full p-2 mb-4" rows={1} value="Praha, sklad" placeholder="Doplňte"/>

        <h3 className="text-lg font-semibold mt-6">Popis úrazového děje:</h3>
        <textarea className="border w-full p-2 mb-4" rows={4} value="Při údržbě stroje došlo k nečekanému spuštění." placeholder="Popis úrazu"/>

        <h3 className="text-lg font-semibold mt-6 break-before-page">Jaké předpisy byly v souvislosti s úrazem porušeny a kým:</h3>
        <textarea className="border w-full p-2 mb-4" rows={4} value="Porušení bezpečnostních předpisů." placeholder="Doplňte"/>

        <h3 className="text-lg font-semibold mt-6">Opatření přijatá k zabránění opakování pracovního úrazu:</h3>
        <textarea className="border w-full p-2 mb-4" rows={4} value="Zvýšení kontroly bezpečnostních postupů." placeholder="Doplňte"/>

        <h3 className="text-lg font-semibold mt-6">Jména svědků úrazu:</h3>
        <textarea className="border w-full p-2 mb-4" rows={4} value="Petr Dvořák" placeholder="Doplňte"/>

        <h3 className="text-lg font-semibold mt-6">Zapsal - jméno, přijmení, funkce</h3>
        <textarea className="border w-full p-2 mb-4" rows={1} value="Anna Nováková" placeholder="Doplňte"/>
   
        <h3 className="text-lg font-semibold mt-6">Zapsal - email:</h3>
        <textarea className="border w-full p-2 mb-4" rows={1} value="example@gmail.com" placeholder="Doplňte"/>
        </div>    

        <div className="px-[1rem]">
        <h3 className="text-lg font-semibold mt-6">Dodatečná otázka č. 1:</h3>
        <textarea 
        className="border w-full p-2 mb-4" 
        placeholder="Doplňte" 
        rows={4}
        // name = "preventionMeasures"
        // onChange = {handleChange}
        // value = {formData.preventionMeasures}
        >
        </textarea>

        <h3 className="text-lg font-semibold mt-6 break-before-page">Dodatečná otázka č. 2:</h3>
        <textarea 
        className="border w-full p-2 mb-4" 
        placeholder="Doplňte"  
        rows={4}
        // name = "witnessInfo"
        // onChange = {handleChange}
        // value = {formData.witnessInfo}
        >
        </textarea>

        <h3 className="text-lg font-semibold mt-6">Dodatečná otázka č. 3:</h3>
        <textarea 
        className="border w-full p-2 mb-4" 
        placeholder="Doplňte" 
        rows={1}
        // name = "supervisor"
        // onChange = {handleChange}
        // value = {formData.supervisor}
        >
        </textarea>
        </div>
    </form>
    <div className='mb-[3rem] py-[2rem] flex justify-center items-center print:hidden '>
        <button 
          type="submit" 
          className="bg-green-600 text-white mx-[1rem] w-[200px] h-[40px] rounded hover:bg-blue-700"
          onClick = {() => {
            window.alert("Záznam o zranění byl uložen.")}}>
          Potvrdit a uložit
        </button>
        <button type="button" 
          className="bg-blue-500 text-white mx-[1rem] w-[200px] h-[40px] rounded hover:bg-blue-700"
          onClick = {() => window.print()}>
          Vytisknout záznam o úrazu
        </button>
    </div>
    </div>
  )
}

export default InjuryRecord
