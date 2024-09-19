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
        <h1 className="text-lg font-bold uppercase px-[2rem] mb-[2rem] pt-[2rem]">
          Záznam o úrazu:
          </h1>
        <div className="grid grid-cols-3 gap-4 px-[1rem] pb-[2rem]">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked
          />
          Smrtelném
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
          />
          S hospitalizací delší než 5 dnů
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
          />
          Ostatním
        </label>
          </div>
        <div className="grid grid-cols-2 gap-4 px-[1rem]">
        <div>
            <label className='font-bold'>Evidenční číslo záznamu:</label> 
        </div>
        <div>
            <input 
              type="text" 
              name = "recordId"
              className="border w-full p-2 mb-4"
              value = "A"
              placeholder="Doplňte"/>
        </div>
        <div>
            <label className='font-bold'>Evidenční číslo zaměstnavatele:</label> 
        </div>
        <div>
            <input 
              type="text" 
              name = "employer"
              className="border w-full p-2 mb-4"
              value = "A"
              placeholder="Doplňte"/>
        </div>
        </div>
        {/* --------- */}
          <label className='font-bold text-2xl'> A. Údaje o zaměstnavateli, u kterého je urázem postižený zaměstnanec v základním pracovněprávním vztahu</label>
        <div className="grid grid-cols-2 gap-4 px-[1rem] pt-3">
          <div>
          <div>
            <label className='font-bold'>1. IČ:</label>
            <textarea
              name = "ICO"
              className="border w-full p-2 mb-4"
              rows={2}
              value = "ABC Corporation"
              />
          </div>
          <div>
          <label className='font-bold'>Název zaměstnavatele a jeho sídlo (adresa):</label>
            <textarea  
              name = "employerInfo"
              className="border w-full p-2 mb-4"
              rows={8}
              value = "ABC Corporation"
              />
          </div>
          </div>
          <div className='grid grid-cols-1 gap-4 px-[1rem] '>
          <div>
            <label className='font-bold'>2. Hlavní činnost (CZ-NACE), v jejímž rámci k úrazu došlo:</label>
            <input 
              type="text" 
              name = "entityActivity"
              className="border w-full p-2 mb-4"
              value = "XYZ Insurance"/>
          </div>
          <div>
            <label className='font-bold'>3. Místo, kde k úrazu došlo:</label>
            <input 
              type="text"
              name = "location"
              className="border w-full p-2 mb-4" 
              value = "Kuchyň"/>
          </div>
          <div>
            <label className='font-bold'>Bylo místo úrazu pravidelným pracovištěm úrazem poatiženého zaměstnance:</label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              Ano
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              Ne
            </label>
            </div>
            </div>
            </div>
            {/* ----- */}
            <label className='font-bold text-2xl'> B. Údaje o zaměstnavateli, u kterého k úrazu došlo (pokud se nejedná o zaměstnavatele uvedeného v části A záznamu</label>
        <div className="grid grid-cols-2 gap-4 px-[1rem] pt-3">
          <div>
          <div>
            <label className='font-bold'>1. IČ:</label>
            <textarea
              name = "ICO"
              className="border w-full p-2 mb-4"
              rows={2}
              value = "ABC Corporation"
              />
          </div>
          <div>
          <label className='font-bold'>Název zaměstnavatele a jeho sídlo (adresa):</label>
            <textarea  
              name = "employerInfo"
              className="border w-full p-2 mb-4"
              rows={6}
              value = "ABC Corporation"
              />
          </div>
          </div>
          <div className='grid grid-cols-1 gap-4 px-[1rem] '>
          <div>
            <label className='font-bold'>2. Hlavní činnost (CZ-NACE), v jejímž rámci k úrazu došlo:</label>
            <input 
              type="text" 
              name = "entityActivity"
              className="border w-full p-2 mb-4"
              value = "XYZ Insurance"/>
          </div>
          <div>
            <label className='font-bold'>3. Místo, kde k úrazu došlo:</label>
            <input 
              type="text"
              name = "location"
              className="border w-full p-2 mb-4" 
              value = "Kuchyň"/>
          </div>
          </div>
          </div>

        {/* ------ */}
        <label className='font-bold text-2xl'> C. Údaje o úrazem postiženém zaměstnanci</label>
        <div className="grid grid-cols-2 gap-4 px-[1rem] pt-3">
          <div>
            <label className='font-bold'>1. Jméno a přijmení:</label>
            <input 
              type="text"
              name = "name"
              className="border w-full p-2 mb-4" 
              value = "123456"/>
          </div>
          <div>
            <label className='font-bold'>Pohlaví:</label>
            <div className="grid grid-cols-2 gap-4 px-[1rem] pt-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              Muž
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              Žena
            </label>
            </div>
          </div>
          <div>
            <label className='font-bold'>2. Datum narození:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              name= "birthDate"
              value = "Praha 4, Česká republika"/>
          </div>
          <div>
            <label className='font-bold'>3. Státní občanství:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              name= ""
              value = "české"/>
          </div>
          </div>
          <div>
            <label className='font-bold'>4. Adresa pro doručování:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              name= ""
              value = "Jeronýmova 5, Praha 4"/>
          </div>
          <div className="grid grid-cols-2 gap-4 px-[1rem] pt-3">
          <div>
            <label className='font-bold'>5. Klasifikace zaměstnání (CZ-ISCO):</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              name= ""/>
          </div>
          <div>
            <label className='font-bold'>6. Činnost, při které k úrazu došlo:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              name= ""/>
          </div>
          </div>
          <div>
            <label className='font-bold'>7. Délka trvání základního pracovněprávního vztahu u zaměstnavatele:</label>
            <div className="grid grid-cols-4 gap-4 px-[1rem] pt-3">
            <div className='pt-2'>
            <label>Roků: </label></div>
            <div>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              name= ""
              value = "4"/>
            </div>
            <div className='pt-2'>
             <label>Měsíců:</label>
            </div>
            <div>
            <input 
              type="text" 
              className="border w-full p-2 mb-4" 
              name= ""
              value = "5"/>
            </div>
            </div>
          </div>
          <div>
            <label className='font-bold'>8. Úrazem postižený je:</label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              Zaměstnanec v pracovním poměru
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              zaměstnanec zaměstnaný na základě dohod o pracích konaných mimo pracovní poměr 
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              osoba vykonávající činnosti nebo poskytující služby mimo pracovněprávní vztahy (§ 12 zákona č. 309/2006 Sb.)
            </label>
          </div>
          <div>
            <label className='font-bold'>9. Trvání pracovní neschopnosti následkem úrazu</label>
            <div className="grid grid-cols-6 gap-0 px-0 pt-3">
            <div className='pt-2'>
            <label>od: </label>
            </div>
            <div>
            <input 
              type="text" 
              className="border w-full p-2 mb-2"  
              name= ""
              value = "4"/>
            </div>
            <div className='pt-2'>
             <label>do:</label>
            </div>
            <div>
            <input 
              type="text" 
              className="border w-full p-2 mb-2" 
              name= ""
              value = "5"/>
            </div>
            <div className='pt-2'>
             <label>celkem kalendářní dnů:</label>
            </div>
            <div>
            <input 
              type="text" 
              className="border w-full p-2 mb-2" 
              name= ""
              value = "5"/>
            </div>
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
