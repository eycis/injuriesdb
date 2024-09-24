import React from 'react'

const BasicInfo = ({ formData, handleChange }: { formData: any, handleChange: any }) => (
    <div className="px-4">
    <div className="grid grid-cols-2 gap-4 px-4">
            <div>
            <label className='form-text'>Zaměstnavatel:</label>
            <input 
              type="text" 
              name = "employer"
              className="form-grid h-5"
              value = {formData.employer}
              onChange = {handleChange} 
              placeholder="Zaměstnavatel"/>
          </div>
          <div>
            <label className='form-text'>Provoz:</label>
            <input 
              type="text" 
              name = "employer"
              className="form-grid h-5"
              value = {formData.entity}
              onChange = {handleChange} 
              placeholder="Provoz"/>
          </div>
          <div>
            <label className='form-text'>Pojišťovna postiženého:</label>
            <input 
              type="text" 
              name = "insurance"
              className="form-grid h-5"
              value = {formData.insurance}
              onChange = {handleChange}
              placeholder="Evidenční číslo"/>
          </div>
          <div>
            <label className='form-text'>Jméno a příjmení postiženého:</label>
            <input 
              type="text" 
              className="form-grid h-5" 
              placeholder="Jméno"
              name = "name"
              onChange = {handleChange}
              value = {formData.name}/>
          </div>
          <div>
            <label className='form-text'>Datum narození:</label>
            <input 
              type="date" 
              className="form-grid h-5"
              name = "birthDate"
              onChange = {handleChange}
              value = {formData.birthDate}/>
          </div>
          <div>
            <label className='form-text'>Osobní číslo:</label>
            <input 
              type="text" 
              className="form-grid h-5" 
              placeholder="Osobní číslo"
              name = "personalNumber"
              onChange = {handleChange}
              value = {formData.personalNumber}/>
          </div>
          <div>
            <label className='form-text'>Bydliště postiženého:</label>
            <input 
              type="text" 
              className="form-grid h-5" 
              placeholder="bydliště"
              name = "address"
              onChange = {handleChange}
              value = {formData.address}/>
          </div>
          <div>
            <label className='form-text'>Pracovní pozice:</label>
            <input 
              type="text" 
              className="form-grid h-5" 
              placeholder="Pozice"
              name = "position"
              onChange = {handleChange}
              value = {formData.position}/>
          </div>
          <div>
            <label className='form-text'>Od začátku směny odpracováno:</label>
            <input 
              type="text" 
              className="form-grid h-5" 
              placeholder="Odpracované hodiny"
              name = "hoursWorked"
              onChange = {handleChange}
              value = {formData.hoursWorked}/>
          </div>
          <div >
            <label className='form-text'>Datum a čas úrazu:</label>
            <input 
              type="datetime-local" 
              className="form-grid h-5"
              name = "injuryDateTime"
              onChange = {handleChange}
              value = {formData.injuryDateTime}/>
          </div>
        </div>

        <div className="px-4">
        <h2 className="form-text">Druh zranění a zraněná část těla:</h2>
        <input type="text" className="form-grid h-5" placeholder="Popis zranění"/>
        <div className="grid grid-cols-4 gap-2 ">
        <div>
            <label className="form-text">Počet zraněných osob:</label>
            <input 
            type="text" 
            className="form-grid h-5" 
            placeholder=""
            name = "numberOfInjuredPeople"
            onChange = {handleChange}
            value = {formData.numberOfInjuredPeople}/>
        </div>
        <div>
            <label className="form-text">Ošetřen u lékaře:</label>
            <input 
            type="text" 
            className="form-grid h-5" 
            placeholder="Ano/Ne"
            name = "doctorVisit"
            onChange = {handleChange}
            value = {formData.doctorVisit}/>
        </div>
        <div>
            <label className="form-text">Zkouška na alkohol:</label>
            <input 
            type="text" 
            className="form-grid h-5" 
            placeholder="Ano/Ne"
            name = "alcoholTest"
            onChange = {handleChange}
            value = {formData.alcoholTest}/>
        </div>
        <div>
            <label className="form-text">Výsledek zkoušky:</label>
            <input 
            type="text" 
            className="form-grid h-5" 
            placeholder="Výsledek"
            name = "alcoholTestResult"
            onChange = {handleChange}
            value = {formData.alcoholTestResult}/>
        </div>
        </div>

        <h3 className="form-text">Druh pracovního úrazu:</h3>
        <div className="grid grid-cols-2 gap-1">
        <label className="flex items-center checkbox-label checkbox-label">
            <input 
            type="checkbox" 
            className="mr-2"
            name = "noWorkAbsence"
            //checked = {formData.noWorkAbsence}
            //onChange = {handleChange}
            /> 
            Bez pracovní neschopnosti
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> S pracovní neschopností 3 kalendářních dnů
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> S pracovní neschopností nad 3 kalendářní dny
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> S hospitalizací nad 5 dnů
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> Smrtelný pracovní úraz
        </label>
        </div>  
   

        <h3 className="form-text break-before-page">Co bylo zdrojem úrazu?</h3>
        <div className="grid grid-cols-2 gap-1">
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> Dopravní prostředek
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> průmyslové škodliviny
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> stroje a zařízení přenosná nebo mobilní
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> horké látky a předměty, oheň a výbušniny
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> materiál, břemena
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> stroje a zařízení stabilní
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> pád na rovině, z výšky, do hloubky, propadnutí
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> lidé, zvířata nebo přírodní živly
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> nástroj, přístroj, nářadí
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> elektrická energie
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> jiné
        </label>
        </div>

        <h3 className="form-text">Proč k úrazu došlo? Zaškrtněte příčinu:</h3>
        <div className="grid grid-cols- gap-1">
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> poruchy nebo vadný stav některého zdrojů úrazu
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> pro porušení předpisů vztahujících se k práce
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> pro špatně, nebo nedostatečné vyhodnocení rizika
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> pro nepředvídatelné riziko práce nebí selhání lidského
            činitele
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> pro nedostatečné osobní zajištění zaměstnance
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> stroje a zařízení stabilní
        </label>
        <label className="flex items-center checkbox-label checkbox-label">
            <input type="checkbox" className="mr-2"/> pro jiný, blíže nespecifikovaný důvod
        </label>
        </div>

        <h3 className="form-text">Činnost, při níž k úrazu došlo:</h3>
        <textarea 
        className="form-grid" 
        placeholder="Doplňte" 
        rows={1}
        name = "activity"
        onChange = {handleChange}
        value = {formData.activity}>
        </textarea>

        <h3 className="form-text">Místo úrazu:</h3>
        <textarea 
        className="form-grid" 
        placeholder="Doplňte" 
        rows={1}
        name = "location"
        onChange = {handleChange}
        value = {formData.location}>
        </textarea>

        <h3 className="form-text">Popis úrazového děje:</h3>
        <textarea 
        className="form-grid" 
        placeholder="Doplňte" 
        rows={1}
        name = "injuryEventDescription"
        onChange = {handleChange}
        value = {formData.injuryEventDescription}>
        </textarea>

        <h3 className="form-text break-before-page">Jaké předpisy byly v souvislosti s úrazem porušeny a kým:</h3>
        <textarea 
        className="form-grid" 
        placeholder="Doplňte"  
        rows={1}
        name = "violation"
        onChange = {handleChange}
        value = {formData.violation}>
        </textarea>

        <h3 className="form-text">Opatření přijatá k zabránění opakování pracovního úrazu:</h3>
        <textarea 
        className="form-grid" 
        placeholder="Doplňte" 
        rows={1}
        name = "preventionMeasures"
        onChange = {handleChange}
        value = {formData.preventionMeasures}>
        </textarea>

        <h3 className="form-text">Jména svědků úrazu, osobní číslo, popř: datum narození a adresa bydliště:</h3>
        <textarea 
        className="form-grid" 
        placeholder="Doplňte" 
        rows={1}
        name = "witnessInfo"
        onChange = {handleChange}
        value = {formData.witnessInfo}>
        </textarea>

        <h3 className="form-text">Zapsal: jméno, přijmení, funkce:</h3>
        <textarea 
        className="form-grid" 
        placeholder="Doplňte" 
        rows={1}
        name = "supervisor"
        onChange = {handleChange}
        value = {formData.supervisor}>
        </textarea>

        <h3 className="form-text">Zapsal: e-mail:</h3>
        <textarea 
        className="form-grid" 
        placeholder="Doplňte" 
        rows={1}
        name = "supervisorEmail"
        onChange = {handleChange}
        value = {formData.supervisorEmail}>
        </textarea>
    </div>
    </div>
);

export default BasicInfo