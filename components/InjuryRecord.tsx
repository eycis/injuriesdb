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
        <h1 className="text-lg font-bold uppercase px-[2rem] mb-[0.5rem]">
          Záznam o úrazu:
          </h1>
        <div className="grid grid-cols-3 gap-4 px-[1rem] pb-[1rem]">
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
          <label className='record-header'> A. Údaje o zaměstnavateli, u kterého je urázem postižený zaměstnanec v základním pracovněprávním vztahu</label>
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
            <label className='record-header'> B. Údaje o zaměstnavateli, u kterého k úrazu došlo (pokud se nejedná o zaměstnavatele uvedeného v části A záznamu</label>
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
        <label className='record-header'> C. Údaje o úrazem postiženém zaměstnanci</label>
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
          <div className='px-1'>
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
          <div className='pt-5 px-2'>
            <label className='font-bold'>9. Trvání pracovní neschopnosti následkem úrazu</label>
            <div className="grid grid-cols-6 gap-1  pt-3">
            <label>od: </label>
            <input 
              type="text" 
              className="border w-full p-2 mb-2"  
              name= ""
              value = "4"/>
             <label>do:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-2" 
              name= ""
              value = "5"/>
             <label>celkem kalendářní dnů:</label>
            <input 
              type="text" 
              className="border w-full p-2 mb-2" 
              name= ""
              value = "5"/>
              </div>
          </div>

          <div className='pt-5 px-2'>
            <div className='pb-5'>
            <label className='record-header'>D. Údaje o úrazu</label>
            </div>
            <div className="grid grid-cols-2 gap-4 px-[1rem]">
            <div className="grid grid-cols-1 gap-4 px-[1rem]">
            <div>
            <label>1. Datum úrazu: </label>
            <input 
              type="text" 
              className="border w-full p-0 mb-2"  
              name= ""
              value = "4"/>
              </div>
            <div>
            <label> Hodina úrazu:</label>
            <input 
              type="text" 
              className="border w-full p-0 mb-2"  
              name= ""
              value = "4"/>
            </div>
            <div>
             <label>Datum úmrtí úrazem postiženého zaměstnance:</label>
            <input 
              type="text" 
              className="border w-full mb-2" 
              name= ""
              value = "5"/>
            </div>
            </div>
            <div>
            <label>2. Počet hodin odpracovaných bezprostředně před vznikem úrazu: </label>
            <input 
              type="text" 
              className="border w-full p-2 mb-2"  
              name= ""
              value = "4"/>
            </div>
            <div>
            <label>3. Druh zranění: </label>
            <input 
              type="text" 
              className="border w-full p-2 mb-2"  
              name= ""
              value = "4"/>
            </div>
            <div>
            <label>4. Zraněná část těla: </label>
            <input 
              type="text" 
              className="border w-full p-2 mb-2"  
              name= ""
              value = "4"/>
            </div>
            </div>
            <label>5. Počet zraněných osob: </label>
            <input 
              type="text" 
              className="border w-full p-2 mb-2"  
              name= ""
              value = "4"/>
            </div>

            
          <h3 className="text-lg font-semibold mt-6 mb-3">Co bylo zdrojem úrazu?</h3>
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

          <h3 className="text-lg font-semibold mt-6 mb-3">Proč k úrazu došlo? (příčiny)</h3>
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
          <div className='pt-6'>
            <label className='text-lg font-semibold mt-6 mb-3'>8. Byla u úrazem postiženého zaměstnance provedena kontrola přítomnosti
              alkoholu nebo jiných návykových látek a pokud ano, s jakým výsledkem? 
            </label>
            <div className="grid grid-cols-4 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              ANO
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              NE
            </label>
            <label className='py-4'>Výsledek</label>
            <input 
            type="text" 
            className="border w-full p-2 mb-4" 
            value="Negativní"/>
            </div>
        </div>
        <div className='py-3'>
        <label className='text-lg font-semibold mt-6 mb-3'>9. Popis úrazového děje, rozvedení popisu místa, příčin a okolností, za nichž došlo k úrazu:</label>
        <textarea className="border w-full p-2 mb-4" rows={6}/>
        <label className='text-lg font-semibold mt-6 mb-3'>10. Uveďte, jaké předpisy byly v souvislosti s úrazem porušeny a kým, pokud jejich porušení do doby odeslání záznamu zjistěno:</label>
        <textarea className="border w-full p-2 mb-4" rows={6}/>
        <label className='text-lg font-semibold mt-6 mb-3'>11. Opatření přijatá k zabránění opakování pracovního úrazu:</label>
        <textarea className="border w-full p-2 mb-4" rows={6}/>
        </div>
        <label className='record-header'> E. Vyjádření úrazem postiženého zaměstnance a svědků úrazu případně dalších osob</label>

        <div className="border border-black">
            <table className="w-full border-collapse border border-black">
              <thead>
                <tr className="border border-black">
                  <th className="border border-black w-1/3 p-2"></th>
                  <th className="border border-black p-2">datum</th>
                  <th className="border border-black p-2">jméno a příjmení</th>
                  <th className="border border-black p-2">podpis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-2">Úrazem postižený zaměstnanec:</td>
                  <td className="border border-black p-2">
                    <input type="date" className="w-full p-2" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full p-2" placeholder="Jméno a příjmení" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full p-2" placeholder="Podpis" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-center align-middle" rowSpan={4}>Svědci:</td>
                  <td className="border border-black p-2">
                    <input type="date" className="w-full p-2" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full p-2" placeholder="Jméno a příjmení" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full p-2" placeholder="Podpis" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 h-16">
                    <input type="date" className="w-full p-2" />
                  </td>
                  <td className="border border-black p-2 h-16">
                    <input type="text" className="w-full p-2" placeholder="Jméno a příjmení" />
                  </td>
                  <td className="border border-black p-2 h-16">
                    <input type="text" className="w-full p-2" placeholder="Podpis" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 h-16">
                    <input type="date" className="w-full p-2" />
                  </td>
                  <td className="border border-black p-2 h-16">
                    <input type="text" className="w-full p-2" placeholder="Jméno a příjmení" />
                  </td>
                  <td className="border border-black p-2 h-16">
                    <input type="text" className="w-full p-2" placeholder="Podpis" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 h-16">
                    <input type="date" className="w-full p-2" />
                  </td>
                  <td className="border border-black p-2 h-16">
                    <input type="text" className="w-full p-2" placeholder="Jméno a příjmení" />
                  </td>
                  <td className="border border-black p-2 h-16">
                    <input type="text" className="w-full p-2" placeholder="Podpis" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">Zástupce zaměstnanců pro bezpečnost a ochranu zdraví při práci:</td>
                  <td className="border border-black p-2">
                    <input type="date" className="w-full p-2" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full p-2" placeholder="Jméno a příjmení" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full p-2" placeholder="Podpis" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">Za odborovou organizaci:</td>
                  <td className="border border-black p-2">
                    <input type="date" className="w-full p-2" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full p-2" placeholder="Jméno a příjmení" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full p-2" placeholder="Podpis" />
                  </td>
                </tr>
              <tr>
              <td className="border border-black p-2" rowSpan={2}>Za zaměstnavatele:</td>
              <td className="border border-black p-2 text-center">
                <input type="date" className="w-full p-1 border" />
              </td>
              <td className="border border-black p-2 text-center">
                <input type="text" className="w-full p-1 border" placeholder="Jméno a přijmení" />
              </td>
              <td className="border border-black p-2 text-center">
                <input type="text" className="w-full p-1 border" placeholder="Podpis" />
              </td>
            </tr>
            <tr>
              <td className="border border-black p-2 text-center" colSpan={2}>
                <input type="text" className="w-full p-1 border" placeholder="Pracovní zařazení" />
              </td>
            </tr>
              </tbody>
            </table>
          </div>

        <h3 className="text-lg font-semibold mt-6 print:hidden">Zapsal - jméno, přijmení, funkce</h3>
        <textarea className="border w-full p-2 mb-4" rows={1} value="Anna Nováková" placeholder="Doplňte"/>
   
        <h3 className="text-lg font-semibold mt-6 print:hidden">Zapsal - email:</h3>
        <textarea className="border w-full p-2 mb-4" rows={1} value="example@gmail.com" placeholder="Doplňte"/>   
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
