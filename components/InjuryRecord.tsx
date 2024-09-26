import React, { useState } from 'react'
import { InjuryRecordData } from '@/models/record';

export const InjuryRecord = () => {

  const [recordData, setRecordData] = useState<typeof InjuryRecordData>({
    ...InjuryRecordData
  });    

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
        const { name, value } = e.target;
        setRecordData((prevRecordData) => ({
          ...prevRecordData,
          [name]: value,
        }));
    };
  
  return (
    <div className="bg-white max-w-4xl mx-auto mt-7 pt-20 shadow-lg rounded-lg h-auto print:pt-0">
    <form>
        <h1 className="text-lg form-text uppercase mx-10 mb-2">
          Záznam o úrazu:
          </h1>
        <div className='px-4'>
        <label className=" text-sm">
          <input
            type="checkbox"
            className="mr-2"
          />
          Smrtelném
        </label>
        </div>
        <div className='px-4'>
        <label className="text-sm">
          <input
            type="checkbox"
            className="mr-2"
          />
          S hospitalizací delší než 5 dnů
        </label>
        </div >
        <div className='px-4'>
        <label className="text-sm">
          <input
            type="checkbox"
            className="mr-2"
          />
          Ostatním
        </label>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4">
        <div>
            <label className='form-text'>Evidenční číslo záznamu:</label> 
        </div>
        <div>
            <input 
              type="text" 
              name = "recordId"
              className="form-grid"
              placeholder="Doplňte"/>
        </div>
        <div>
            <label className='form-text'>Evidenční číslo zaměstnavatele:</label> 
        </div>
        <div>
            <input 
              type="text" 
              className="form-grid"
              value={recordData.employer}
              name= "employer"
              onChange={handleChange}
              placeholder="Doplňte"/>
        </div>
        </div>
        {/* --------- */}
          <label className='record-header'> A. Údaje o zaměstnavateli, u kterého je urázem postižený zaměstnanec v základním pracovněprávním vztahu</label>
          <div className="grid grid-cols-2 gap-1 px-4">
            <div>
              <label className="form-text">1. IČ:</label>
              <input
                type="text"
                name="IC" 
                className="form-grid" 
                onChange={handleChange}
                value={recordData.IC}/>

              <label className="form-text">Název zaměstnavatele a jeho sídlo:</label>
              <textarea 
                name="employerInfo" 
                className="form-grid"
                onChange={handleChange}
                value={recordData.employerInfo}
                rows={3}  />
            </div>
          <div>
            <label className='form-text'>2. Hlavní činnost (CZ-NACE), v jejímž rámci k úrazu došlo:</label>
            <input 
              type="text" 
              className="form-grid"
              onChange={handleChange}
              value={recordData.mainActivity}
              name= "mainActivity"/>
            <label className='form-text'>3. Místo, kde k úrazu došlo:</label>
            <input 
              type="text"
              name = "location"
              onChange={handleChange}
              value={recordData.location}
              className="form-grid" />
            <label className='form-text'>4. Bylo místo úrazu pravidelným pracovištěm úrazem postiženého zaměstnance:</label>
            <div className="grid grid-cols-2 gap-1">
            <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              Ano
            </label>
            </div>
            <div>
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
            </div>
            {/* ----- */}
            <label className='record-header'> B. Údaje o zaměstnavateli, u kterého k úrazu došlo (pokud se nejedná o zaměstnavatele uvedeného v části A záznamu)</label>
        <div className="grid grid-cols-2 gap-1 px-4">
          <div>
            <label className='form-text'>1. IČ:</label>
            <input
              type="text"
              name="ICB" 
              className="form-grid" 
              onChange={handleChange}
              value={recordData.ICB}
              />
          <label className='form-text'>Název zaměstnavatele a jeho sídlo (adresa):</label>
            <textarea  
                name="employerInfoB" 
                className="form-grid"
                onChange={handleChange}
                value={recordData.employerInfoB}
                rows={2} 
              />
          </div>
          <div className='grid grid-cols-1 px-4 '>
          <div>
            <label className='form-text'>2. Hlavní činnost (CZ-NACE), v jejímž rámci k úrazu došlo:</label>
            <input 
              type="text" 
              className="form-grid"
              onChange={handleChange}
              value={recordData.mainActivityB}
              name= "mainActivityB"/>
          </div>
          <div>
            <label className='form-text'>3. Místo, kde k úrazu došlo:</label>
            <input 
              type="text"
              name = "locationB"
              onChange={handleChange}
              value={recordData.locationB}
              className="form-grid" />
          </div>
          </div>
          </div>

        {/* ------ */}
        <label className='record-header'> C. Údaje o úrazem postiženém zaměstnanci</label>
        <div className="grid grid-cols-2 px-4">
          <div>
            <label className='form-text'>1. Jméno a přijmení:</label>
            <input 
              type="text"
              name = "name"
              className="form-grid" 
              value = "Pavel Moravec"/>
          </div>
          <div>
            <label className='form-text'>Pohlaví:</label>
            <div className="grid grid-cols-2 px-4">
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
            <label className='form-text'>2. Datum narození:</label>
            <input 
              type="text" 
              className="form-grid" 
              name= "birthDate"
              value = "1985-07-23"/>
          </div>
          <div>
            <label className='form-text'>3. Státní občanství:</label>
            <input 
              type="text" 
              className="form-grid" 
              name= "nationality"
              onChange={handleChange}
              value={recordData.nationality}/>
          </div>
          </div>
          <div className='px-4'>
            <label className='form-text'>4. Adresa pro doručování:</label>
            <input 
              type="text" 
              className="form-grid" 
              name= "deliveryAddress"
              onChange={handleChange}
              value={recordData.deliveryAddress}/>
          </div>
          <div className="grid grid-cols-2 gap-4 px-4">
          <div>
            <label className='form-text'>5. Klasifikace zaměstnání (CZ-ISCO):</label>
            <input 
              type="text" 
              className="form-grid" 
              name= ""/>
          </div>
          <div>
            <label className='form-text'>6. Činnost, při které k úrazu došlo:</label>
            <input 
              type="text" 
              className="form-grid" 
              name= "activity"
              value="Krájení"
              />
          </div>
          </div>
          <div className='px-4'>
            <label className='form-text'>7. Délka trvání základního pracovněprávního vztahu u zaměstnavatele:</label>
            <div className="grid grid-cols-4 gap-4 px-4 pt-3">
            <div className='pt-2'>
            <label  
              className='form-text'>Roků: </label></div>
            <div>
            <input 
              type="text" 
              className="form-grid" 
              name= "yearsWorked"
              onChange={handleChange}
              value={recordData.yearsWorked}/>
            </div>
            <div className='pt-2'>
             <label  className='form-text'>Měsíců:</label>
            </div>
            <div>
            <input 
              type="text" 
              className="form-grid" 
              name= "monthsWorked"
              onChange={handleChange}
              value={recordData.monthsWorked}/>
            </div>
            </div>
          </div>
          <div className='px-4'>
            <label className='form-text'>8. Úrazem postižený je:</label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
              />
              Zaměstnanec v pracovním poměru
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
              />
              zaměstnanec zaměstnaný na základě dohod o pracích konaných mimo pracovní poměr 
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
              />
              osoba vykonávající činnosti nebo poskytující služby mimo pracovněprávní vztahy (§ 12 zákona č. 309/2006 Sb.)
            </label>
          </div>
          <div className='px-4'>
            <label className='form-text'>9. Trvání pracovní neschopnosti následkem úrazu</label>
            <div className="grid grid-cols-6 gap-4">
            <label  
              className='form-text py-2'>od: </label>
            <input 
              type="text" 
              className="form-grid h-8"  
              name= "From"
              onChange={handleChange}
              value={recordData.From.toISOString().slice(0,10)}/>
             <label  className='form-text py-2' >do:</label>
            <input 
              type="text" 
              className="form-grid h-8" 
              name= "Until"
              onChange={handleChange}
              value={recordData.Until.toISOString().slice(0,10)}/>
             <label  className='form-text py-2'>celkem kalendářní dnů:</label>
            <input 
              type="text" 
              className="form-grid h-8" 
              name= "dayCount"
              onChange={handleChange}
              value={recordData.dayCount}/>
              </div>
          </div>

          <label className='record-header'>D. Údaje o úrazu</label>
          <div className="grid grid-cols-2 gap-0 px-4">
          <div className="grid grid-cols-2 gap-0 px-4">
            <div className='col-span-1'>
              <label className='form-text'>1. Datum úrazu:</label></div>
              <div className='colspan-1'>
              <input 
                type="date" 
                className="border w-full p-0"  
                name= "injuryDate"
                value="2024-06-06"/>
              </div>
              <div className="col-span-1">
              <label className='form-text'>Hodina úrazu:</label></div>
              <div className="col-span-1">
              <input 
                type="text" 
                className="border w-full p-0"  
                name="injuryTime"
                value="14:00"/>
              </div>
              <div className="col-span-1">
                <label className='form-text'>Datum úmrtí úrazem postiženého zaměstnance:</label></div>
                <div>
                <input 
                type="text" 
                className="border w-full" 
                name="dateOfDeath"
                value=" "
                //onChange={handleChange}
                //value={recordData.dateOfDeath}
                />
            </div>
            </div>
            <div className="grid grid-cols-2 px-4">
              <div className="col-span-2">
              <label className='form-text'>2. Počet hodin odpracovaných bezprostředně před vznikem úrazu:</label>
              <input 
                type="text" 
                className="form-grid"  
                name="hoursWorked"
                value="4"/>
            </div>    
            </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 px-4 mt-4">
              <div className="col-span-1">
                <label className="form-text">3. Druh zranění:</label>
                <div className="flex">
                  <input 
                    type="text" 
                    className="form-grid w-full" 
                    name="injuryType" 
                    value="Řezná rána na ruce" />
                  <div className="grid grid-cols-3 gap-0">
                    <div className="border border-black w-6 h-6"></div>
                    <div className="border border-black w-6 h-6"></div>
                    <div className="border border-black w-6 h-6"></div>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <label className="form-text">4. Zraněná část těla:</label>
                <div className="flex">
                  <input 
                    type="text" 
                    className="form-grid w-full" 
                    name="bodyPart" 
                    onChange={handleChange} value={recordData.bodyPart} />
                  <div className="grid grid-cols-2 gap-0">
                    <div className="border border-black w-6 h-6"></div>
                    <div className="border border-black w-6 h-6"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-1 px-4">
              <label className='form-text'>5. Počet zraněných osob:</label>
              <input 
                type="text" 
                className="form-grid"  
                name="numberOfInjuredPeople"
                value="1"/>
            </div>     

          <h3 className="form-text px-4">6. Co bylo zdrojem úrazu?</h3>
            <div className="grid grid-cols-2 gap-1 px-4">
            <label className="flex items-center checkbox-label">
                <input type="checkbox" className="mr-2" />
                Dopravní prostředek
              </label>
              <label className="flex items-center checkbox-label">
                <input type="checkbox" className="mr-2" />
                Stroje a zařízení přenosná nebo mobilní
              </label>
              <label className="flex items-center checkbox-label">
                <input type="checkbox" className="mr-2" checked/>
                Materiál, břemena, předměty (pád, přiražení, odlétnutí, náraz, zavalení)
              </label>
              <label className="flex items-center checkbox-label">
                <input type="checkbox" className="mr-2" />
                Pád na rovině, z výšky, do hloubky, propadnutí
              </label>
              <label className="flex items-center checkbox-label">
                <input type="checkbox" className="mr-2" />
                Nástroj, přístroj, nářadí
              </label>
              <label className="flex items-center checkbox-label">
                <input type="checkbox" className="mr-2" />
                Průmyslové škodliviny, chemické látky, biologické činitele
              </label>
              <label className="flex items-center checkbox-label">
                <input type="checkbox" className="mr-2" />
                Horké látky a předměty, oheň a výbušniny
              </label>
              <label className="flex items-center checkbox-label">
                <input type="checkbox" className="mr-2" />
                Stroje a zařízení stabilní
              </label>
              <label className="flex items-center checkbox-label">
                <input type="checkbox" className="mr-2" />
                Nástroj, přístroj, nářadí
              </label>
              <label className="flex items-center checkbox-label">
                <input type="checkbox" className="mr-2" />
                Lidé, zvířata nebo přírodní živly
              </label>
              <label className="flex items-center checkbox-label">
                <input type="checkbox" className="mr-2" />
                Elektrická energie
              </label>
              <label className="flex items-center checkbox-label">
                <input type="checkbox" className="mr-2" />
                Jiný, blíže nespecifikovaný zdroj
              </label>
              <div></div>
              <div className="flex justify-end">
                <div className="grid grid-cols-4 gap-0">
                  <div className="border border-black w-5 h-5"></div>
                  <div className="border border-black w-5 h-5"></div>
                  <div className="border border-black w-5 h-5"></div>
                  <div className="border border-black w-5 h-5"></div>
                </div>
              </div>
            </div>

          <h3 className="form-text px-4">Proč k úrazu došlo? (příčiny)</h3>
          <div className="grid grid-cols-2 gap-1 px-4">
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
              />
              Porušení předpisů vztahujících se k práci
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
              />
              pro porušení předpisů vztahujících se k práci
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
                checked
              />
              pro špatně, nebo nedostatečné vyhodnocení rizika
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
              />
              pro nepředvídatelné riziko práce nebí selhání lidského činitele
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
              />
              pro nedostatečné osobní zajištění zaměstnance
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
              />
              stroje a zařízení stabilní
            </label>
            <label className="flex items-center checkbox-label">
              <input
                type="checkbox"
                className="mr-2"
              />
              pro jiný, blíže nespecifikovaný důvod
            </label>
              <div className="flex justify-end  ml-auto">
                <div className="grid grid-cols-4 gap-0">
                  <div className="border border-black w-5 h-5"></div>
                  <div className="border border-black w-5 h-5"></div>
                </div>
            </div>
          </div>
          <div className='pt-6 px-4'>
            <label className='form-text'>8. Byla u úrazem postiženého zaměstnance provedena kontrola přítomnosti
              alkoholu nebo jiných návykových látek a pokud ano, s jakým výsledkem? 
            </label>
            <div className="grid grid-cols-4 gap-4">
            <label className="checkbox ">
              <input
                type="checkbox"
                className="mr-2"
                checked
              />
              ANO
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                className="mr-2"
              />
              NE
            </label>
            <label>Výsledek</label>
            <input 
            type="text" 
            className="form-grid h-8" 
            //name= "alcoholTestResult"
            //onChange={handleChange}
            //value={recordData.alcoholTestResult}
            value="Negativní"
            />
            </div>
        </div>
        <div className='py-3 px-4'>
        <label className='form-text'>9. Popis úrazového děje, rozvedení popisu místa, příčin a okolností, za nichž došlo k úrazu:</label>
        <textarea 
          className="form-grid" 
          name= "injuryEventDescription"
          onChange={handleChange}
          value={recordData.injuryEventDescription}
          placeholder='Doplňte'
          rows={10}/>
          <div className="flex justify-end">
            <div className="grid grid-cols-4 gap-0">
              <div className="border border-black w-5 h-5"></div>
              <div className="border border-black w-5 h-5"></div>
              <div className="border border-black w-5 h-5"></div>
              <div className="border border-black w-5 h-5"></div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="grid grid-cols-4 gap-0">
              <div className="border border-black w-5 h-5"></div>
              <div className="border border-black w-5 h-5"></div>
              <div className="border border-black w-5 h-5"></div>
              <div className="border border-black w-5 h-2.5"></div>
            </div>
          </div>
        <label className='form-text'>10. Uveďte, jaké předpisy byly v souvislosti s úrazem porušeny a kým, pokud jejich porušení do doby odeslání záznamu zjistěno:</label>
        <textarea 
          className="form-grid"  
          name= "violation"
          onChange={handleChange}
          value={recordData.violation} 
          placeholder='Doplňte'
          rows={4}/>
        <label className='form-text'>11. Opatření přijatá k zabránění opakování pracovního úrazu:</label>
        <textarea 
          className="form-grid" 
          name= "preventionMeasures"
          onChange={handleChange}
          value={recordData.preventionMeasures} 
          placeholder='Doplňte'
          rows={4}/>
        </div>
        <label className='record-header'> E. Vyjádření úrazem postiženého zaměstnance a svědků úrazu případně dalších osob</label>

        <div className="border border-black">
            <table className="w-full border-collapse border border-black">
              <thead>
              <tr>
                  <td className="h-2.5">
                    <input type="text" className="w-full" />
                  </td>
                </tr>
                <tr className="border border-black">
                  <th className="border border-black w-1/3"></th>
                  <th className="border border-black">datum</th>
                  <th className="border border-black">jméno a příjmení</th>
                  <th className="border border-black">podpis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black form-text ">Úrazem postižený zaměstnanec:</td>
                  <td className="border border-black">
                    <input type="text" className="w-full" />
                  </td>
                  <td className="border border-black">
                    <input type="text" className="w-full"  />
                  </td>
                  <td className="border border-black">
                    <input type="text" className="w-full"  />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black text-center form-text align-middle" rowSpan={3}>Svědci:</td>
                  <td className="border border-black">
                    <input type="text" className="w-full" />
                  </td>
                  <td className="border border-black">
                    <input type="text" className="w-full"  />
                  </td>
                  <td className="border border-black">
                    <input type="text" className="w-full"  />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black h-2.5">
                    <input type="text" className="w-full" />
                  </td>
                  <td className="border border-black h-2.5">
                    <input type="text" className="w-full"  />
                  </td>
                  <td className="border border-black h-2.5">
                    <input type="text" className="w-full"  />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black h-2.5">
                    <input type="text" className="w-full" />
                  </td>
                  <td className="border border-black h-2.5">
                    <input type="text" className="w-full"  />
                  </td>
                  <td className="border border-black h-2.5">
                    <input type="text" className="w-full"  />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black form-text">Zástupce zaměstnanců pro bezpečnost a ochranu zdraví při práci:</td>
                  <td className="border border-black">
                    <input type="text" className="w-full" />
                  </td>
                  <td className="border border-black">
                    <input type="text" className="w-full"  />
                  </td>
                  <td className="border border-black">
                    <input type="text" className="w-full"  />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black form-text">Za odborovou organizaci:</td>
                  <td className="border border-black">
                    <input type="text" className="w-full" />
                  </td>
                  <td className="border border-black">
                    <input type="text" className="w-full" />
                  </td>
                  <td className="border border-black">
                    <input type="text" className="w-full"  />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black form-text" rowSpan={2}>Za zaměstnavatele:</td>
                  <td className="border border-black text-center">
                    <input type="text" className="w-full border" />
                  </td>
                  <td className="border border-black text-center">
                    <input type="text" className="w-full border" />
                  </td>
                  <td className="border border-black text-center">
                    <input type="text" className="w-full border" />
                  </td>
                </tr>
                <tr>
                  <td className="text-left" colSpan={2}>
                    Pracovní zařazení
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        <div className='print:hidden px-4 pt-10'>
        <h3 className="form-text">Zapsal - jméno, přijmení, funkce</h3>
        <textarea className="form-grid" rows={1} value="Anna Nováková" placeholder="Doplňte"/>
   
        <h3 className="form-text">Zapsal - email:</h3>
        <textarea className="form-grid" name="mail"rows={1} value="example@gmail.com" placeholder="Doplňte"/>
        </div>   
    </form>
    <div className='mb-12 py-8 flex justify-center items-center print:hidden '>
        <button 
          type="submit" 
          className="bg-green-600 text-white mx-4 w-56 h-10 rounded hover:bg-blue-700"
          onClick = {() => {
            window.alert("Záznam o zranění byl uložen.")
            }}>
          Potvrdit a uložit
        </button>
        <button type="button" 
          className="bg-blue-500 text-white mx-4 w-60 h-10 rounded hover:bg-blue-700"
          onClick = {() => window.print()}>
          Vytisknout záznam o úrazu
        </button>
    </div>
    </div>

  )
}

export default InjuryRecord
