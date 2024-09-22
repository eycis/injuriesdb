import React, { useState } from 'react';

const InjuryFormExample = () => {
    return (
        <div className="bg-white max-w-4xl mx-auto mt-7 pt-20 shadow-lg rounded-lg h-auto print:pt-0">
        <form>
            <h1 className="text-lg form-text uppercase px-[2rem] mb-[0.25rem]">
              Záznam o úrazu:
              </h1>
            <div className='px-[1rem]'>
            <label className="text-sm">
              <input
                type="checkbox"
                className="mr-2"
                disabled
                checked
              />
              Smrtelném
            </label>
            </div>
            <div className='px-[1rem]'>
            <label className="text-sm">
              <input
                type="checkbox"
                className="mr-2"
              />
              S hospitalizací delší než 5 dnů
            </label>
            </div>
            <div className='px-[1rem]'>
            <label className="text-sm">
              <input
                type="checkbox"
                className="mr-2"
                readOnly
              />
              Ostatním
            </label>
              </div>
            <div className="grid grid-cols-2 gap-4 px-[1rem]">
            <div>
                <label className='form-text'>Evidenční číslo záznamu:</label> 
            </div>
            <div>
                <input 
                  type="text" 
                  name = "recordId"
                  className="form-grid"
                  value = "156646143464"
                  readOnly
                  placeholder="Doplňte"/>
            </div>
            <div>
                <label className='form-text'>Evidenční číslo zaměstnavatele:</label> 
            </div>
            <div>
                <input 
                  type="text" 
                  name = "employer"
                  className="form-grid"
                  value = "Zamestnavatel_vzor"
                  readOnly
                  placeholder="Doplňte"/>
            </div>
            </div>
            {/* --------- */}
              <label className='record-header'> A. Údaje o zaměstnavateli, u kterého je urázem postižený zaměstnanec v základním pracovněprávním vztahu</label>
              <div className="grid grid-cols-2 gap-1 px-[1rem]">
                <div>
                  <label className="form-text">1. IČ:</label>
                  <input
                    type="text" 
                    className="form-grid" 
                    readOnly 
                    value="6543211" />
                  <label 
                    className="form-text">
                          Název zaměstnavatele a jeho sídlo:</label>
                  <textarea 
                    className="form-grid" 
                    readOnly 
                    rows={3} 
                    value="Zaměstnavatel_Vzor, Komenského 5 Praha 4" />
                </div>
              <div>
                <label className='form-text'>2. Hlavní činnost (CZ-NACE), v jejímž rámci k úrazu došlo:</label>
                <input 
                  type="text" 
                  className="form-grid"
                  readOnly
                  value = "Vzor"/>
                <label className='form-text'>3. Místo, kde k úrazu došlo:</label>
                <input 
                  type="text"
                  className="form-grid" 
                  disabled
                  value = "Kuchyň"/>
                <label className='form-text'>4. Bylo místo úrazu pravidelným pracovištěm úrazem postiženého zaměstnance:</label>
                <div className="grid grid-cols-2 gap-1]">
                <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                    checked
                  />
                  Ano
                </label>
                </div>
                <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  Ne
                </label>
                </div>
                </div>
                </div>
                </div>
                {/* ----- */}
                <label className='record-header'> B. Údaje o zaměstnavateli, u kterého k úrazu došlo (pokud se nejedná o zaměstnavatele uvedeného v části A záznamu)</label>
            <div className="grid grid-cols-2 gap-1 px-[1rem]">
              <div>
                <label className='form-text'>1. IČ:</label>
                <input
                  type="text"
                  className="form-grid"
                  readOnly
                  value = ""
                  />
              <label className='form-text'>Název zaměstnavatele a jeho sídlo (adresa):</label>
                <textarea  
                  name = "employerInfo"
                  className="form-grid"
                  rows={2}
                  readOnly
                  value = ""
                  />
              </div>
              <div className='grid grid-cols-1 px-[1rem]'>
              <div>
                <label className='form-text'>2. Hlavní činnost (CZ-NACE), v jejímž rámci k úrazu došlo:</label>
                <input 
                  type="text" 
                  className="form-grid"
                  readOnly
                  value = ""/>
              </div>
              <div>
                <label className='form-text'>3. Místo, kde k úrazu došlo:</label>
                <input 
                  type="text"
                  className="form-grid" 
                  readOnly
                  value = ""/>
              </div>
              </div>
              </div>
    
            {/* ------ */}
            <label className='record-header'> C. Údaje o úrazem postiženém zaměstnanci</label>
            <div className="grid grid-cols-2 px-[1rem]">
              <div>
                <label className='form-text'>1. Jméno a přijmení:</label>
                <input 
                  type="text"
                  className="form-grid" 
                  readOnly
                  value = "Pavel Moravec"/>
              </div>
              <div>
                <label className='form-text'>Pohlaví:</label>
                <div className="grid grid-cols-2 px-[1rem]">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                    checked
                  />
                  Muž
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  Žena
                </label>
                </div>
              </div>
              <div>
                <label className='form-text'>2. Datum narození:</label>
                <input 
                  type="date" 
                  className="form-grid" 
                  value = "1985-07-23"
                  readOnly/>
              </div>
              <div>
                <label className='form-text'>3. Státní občanství:</label>
                <input 
                  type="text" 
                  className="form-grid" 
                  value = "české"
                  readOnly/>
              </div>
              </div>
              <div className='px-[1rem]'>
                <label className='form-text'>4. Adresa pro doručování:</label>
                <input 
                  type="text" 
                  className="form-grid" 
                  value = "Jeronýmova 5, Praha 4"
                  readOnly/>
              </div>
              <div className="grid grid-cols-2 gap-4 px-[1rem] pt-3">
              <div>
                <label className='form-text'>5. Klasifikace zaměstnání (CZ-ISCO):</label>
                <input 
                  type="text" 
                  className="form-grid" 
                  value="Vzor"
                  readOnly/>
              </div>
              <div>
                <label className='form-text'>6. Činnost, při které k úrazu došlo:</label>
                <input 
                  type="text" 
                  className="form-grid" 
                  value= "Krájení zeleniny"
                  readOnly/>
              </div>
              </div>
              <div className='px-[1rem]'>
                <label className='form-text'>7. Délka trvání základního pracovněprávního vztahu u zaměstnavatele:</label>
                <div className="grid grid-cols-4 gap-4 px-[1rem]">
                <div>
                <label  className='form-text'>Roků: </label></div>
                <div>
                <input 
                  type="text" 
                  className="form-grid" 
                  value = "4"
                  readOnly/>
                </div>
                <div>
                 <label  className='form-text'>Měsíců:</label>
                </div>
                <div>
                <input 
                  type="text" 
                  className="form-grid" 
                  value = "5"
                  readOnly/>
                </div>
                </div>
              </div>
              <div className='px-[1rem]'>
                <label className='form-text'>8. Úrazem postižený je:</label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked
                    disabled
                  />
                  Zaměstnanec v pracovním poměru
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  zaměstnanec zaměstnaný na základě dohod o pracích konaných mimo pracovní poměr 
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  osoba vykonávající činnosti nebo poskytující služby mimo pracovněprávní vztahy (§ 12 zákona č. 309/2006 Sb.)
                </label>
              </div>
              <div className='px-[1rem]'>
                <label className='form-text'>9. Trvání pracovní neschopnosti následkem úrazu</label>
                <div className="grid grid-cols-6 gap-0">
                <label  className='form-text py-2'>od: </label>
                <input 
                  type="text" 
                  className="form-grid h-8"  
                  value = "1"
                  readOnly/>
                 <label  className='form-text py-2' >do:</label>
                <input 
                  type="text" 
                  className="form-grid h-8" 
                  value = "3"
                  readOnly/>
                 <label  className='form-text py-2'>celkem kalendářní dnů:</label>
                <input 
                  type="text" 
                  className="form-grid h-8" 
                  value = "3"
                  readOnly/>
                  </div>
              </div>
    
                <label className='record-header'>D. Údaje o úrazu</label>
                <div className="grid grid-cols-2 gap-0 px-[1rem]">
                <div className="grid grid-cols-2 gap-0 px-[1rem]">
                <div className='colspan-1'>
                <label  className='form-text'>1. Datum úrazu: </label></div>
                <div className='colspan-1'>
                <input 
                  type="date" 
                  className="border w-full"  
                  value = "2024-06-06"
                  readOnly/>
                  </div>
                <div className='colspan-1'>
                <label className='form-text'> Hodina úrazu:</label></div>
                <div className='col-span-1'>
                <input 
                  type="text" 
                  className="border w-full"  
                  value = "14:00"
                  readOnly/>
                  </div>
                <div className='colspan-1'>
                 <label className='form-text'>Datum úmrtí úrazem postiženého zaměstnance:</label></div>
                <div>
                <input 
                  type="text" 
                  className="border w-full" 
                  value = ""
                  readOnly/>
                </div>
                </div>
                <div className="grid grid-cols-2 px-[1rem]">
                  <div className="col-span-2">
                <label  className='form-text'>2. Počet hodin odpracovaných bezprostředně před vznikem úrazu: </label>
                <input 
                  type="text" 
                  className="form-grid"  
                  value = "4"
                  readOnly/>
                </div>
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4 px-[1rem] mt-4">
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
                    />
                  <div className="grid grid-cols-2 gap-0">
                    <div className="border border-black w-6 h-6"></div>
                    <div className="border border-black w-6 h-6"></div>
                  </div>
                </div>
              </div>
            </div>

                <div className='px-[1rem]'>
                <label  className='form-text'>5. Počet zraněných osob: </label>
                <input 
                  type="text" 
                  className="form-grid"  
                  value = "1"
                  readOnly/>
                </div>
    
                
              <h3 className="form-text px-[1rem]">Co bylo zdrojem úrazu?</h3>
              <div className="grid grid-cols-2 gap-1 px-[1rem]">
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  Dopravní prostředek
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked
                    disabled
                  />
                  Stroje a zařízení přenosná nebo mobilní
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  Materiál, břemena, předměty (pád, přiražení, odlétnutí, náraz, zavalení)
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  Pád na rovině, z výšky, do hloubky, propadnutí
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  Nástroj, přístroj, nářadí
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  Průmyslové škodliviny, chemické látky, biologické činitele
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  Horké látky a předměty, oheň a výbušniny
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  Stroje a zařízení stabilní
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  Nástroj, přístroj, nářadí
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  Lidé, zvířata nebo přírodní živly
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  Elektrická energie
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
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

    
              <h3 className="form-text px-[1rem]">Proč k úrazu došlo? (příčiny)</h3>
              <div className="grid grid-cols-2 gap-1 px-[1rem]">
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  Porušení předpisů vztahujících se k práci
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  pro porušení předpisů vztahujících se k práci
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked
                    disabled
                  />
                  pro špatně, nebo nedostatečné vyhodnocení rizika
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  pro nepředvídatelné riziko práce nebí selhání lidského činitele
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  pro nedostatečné osobní zajištění zaměstnance
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  stroje a zařízení stabilní
                </label>
                <label className="flex items-center checkbox-label">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
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
              <div className='px-[1rem]'>
                <label className='form-text'>8. Byla u úrazem postiženého zaměstnance provedena kontrola přítomnosti
                  alkoholu nebo jiných návykových látek a pokud ano, s jakým výsledkem? 
                </label>
                <div className="grid grid-cols-4 gap-0">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                    checked
                  />
                  ANO
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    className="mr-2"
                    disabled
                  />
                  NE
                </label>
                <label className=''>Výsledek</label>
                <input 
                type="text" 
                className="form-grid h-8 " 
                value="Negativní"/>
                </div>
            </div>
            <div className='px-[1rem]'>
            <label className='form-text'>9. Popis úrazového děje, rozvedení popisu místa, příčin a okolností, za nichž došlo k úrazu:</label>
            <textarea 
              className="form-grid" 
              value="Vzor" 
              readOnly 
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
            <label className='form-text break-before-page'>10. Uveďte, jaké předpisy byly v souvislosti s úrazem porušeny a kým, pokud jejich porušení do doby odeslání záznamu zjistěno:</label>
            <textarea className="form-grid" value="Vzor" readOnly rows={4}/>
            <label className='form-text'>11. Opatření přijatá k zabránění opakování pracovního úrazu:</label>
            <textarea className="form-grid" value="Vzor" readOnly rows={4}/>
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
                        <input type="text" value="5.5. 2024" readOnly className="w-full" />
                      </td>
                      <td className="border border-black">
                        <input type="text" value="Pavel Moravec" readOnly className="w-full"  />
                      </td>
                      <td className="border border-black">
                        <input type="text" readOnly className="w-full"  />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black text-center form-text align-middle" rowSpan={3}>Svědci:</td>
                      <td className="border border-black">
                        <input type="text"  value="5.5. 2024" readOnly className="w-full" />
                      </td>
                      <td className="border border-black">
                        <input type="text"  value="Petr Novák" readOnly className="w-full"  />
                      </td>
                      <td className="border border-black">
                        <input type="text" readOnly className="w-full"  />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black h-2.5">
                        <input type="text" readOnly  className="w-full" />
                      </td>
                      <td className="border border-black h-2.5">
                        <input type="text" readOnly  className="w-full"  />
                      </td>
                      <td className="border border-black h-2.5">
                        <input type="text"  readOnly className="w-full"  />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black h-2.5">
                        <input type="text" readOnly  className="w-full" />
                      </td>
                      <td className="border border-black h-2.5">
                        <input type="text"  readOnly className="w-full"  />
                      </td>
                      <td className="border border-black h-2.5">
                        <input type="text"  readOnly className="w-full"  />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black form-text">Zástupce zaměstnanců pro bezpečnost a ochranu zdraví při práci:</td>
                      <td className="border border-black">
                        <input type="text"  value="6.5.2024" readOnly className="w-full" />
                      </td>
                      <td className="border border-black">
                        <input type="text" readOnly value="Miroslav Novotný" className="w-full"  />
                      </td>
                      <td className="border border-black">
                        <input type="text" className="w-full"  />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black form-text">Za odborovou organizaci:</td>
                      <td className="border border-black">
                        <input type="text" value="6.5.2024" className="w-full" />
                      </td>
                      <td className="border border-black">
                        <input type="text" value="Pavel Bednář" className="w-full" />
                      </td>
                      <td className="border border-black">
                        <input type="text" readOnly className="w-full"  />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black form-text" rowSpan={2}>Za zaměstnavatele:</td>
                      <td className="border border-black text-center">
                        <input type="text" value="6.5.2024"readOnly className="w-full border" />
                      </td>
                      <td className="border border-black text-center">
                        <input type="text" value="Ivana Klimešová" readOnly className="w-full border" />
                      </td>
                      <td className="border border-black text-center">
                        <input type="text" readOnly className="w-full border" />
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
    
            <div className='print:hidden px-[1rem]'>
            <h3 className="form-text mt-10">Zapsal - jméno, přijmení, funkce</h3>
            <textarea className="form-grid" rows={1} readOnly value="Anna Nováková"/>
       
            <h3 className="form-text">Zapsal - email:</h3>
            <textarea className="form-grid" rows={1} readOnly value="example@gmail.com"/>
            </div>   
        </form>
    <div className='mb-[3rem] print:hidden py-[2rem] flex justify-center items-center'>
    <button type="button" 
          className="action-button"
          onClick = {() => window.print()}>
          Vytisknout záznam o úrazu
        </button>
    </div>
    </div>
);
};

export default InjuryFormExample
