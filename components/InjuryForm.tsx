import React from 'react';

const InjuryForm = () => {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto mt-10 shadow-lg rounded-lg h-auto">
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Zaměstnavatel postiženého:</label>
            <input type="text" className="border w-full p-2 mb-4" placeholder="Zaměstnavatel"/>
          </div>
          <div>
            <label>Evidenční číslo úrazu:</label>
            <input type="text" className="border w-full p-2 mb-4" placeholder="Evidenční číslo"/>
          </div>

          <div>
            <label>Jméno a příjmení postiženého:</label>
            <input type="text" className="border w-full p-2 mb-4" placeholder="Jméno"/>
          </div>
          <div>
            <label>Datum narození:</label>
            <input type="date" className="border w-full p-2 mb-4"/>
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

        {/* Další sekce */}
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
        

        <h3 className="text-lg font-semibold mt-6">Co bylo zdrojem úrazu?</h3>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> Dopravní prostředek
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> Stroj a zařízení
          </label>
          {/* Další checkboxy zde */}
        </div>

        <h3 className="text-lg font-semibold mt-6">Popis úrazového děje:</h3>
        <textarea className="border w-full p-2 mb-4" placeholder="Popis úrazu" rows={4}></textarea>

        <h3 className="text-lg font-semibold mt-6">Jaké předpisy byly v souvislosti s úrazem porušeny a kým:</h3>
        <textarea className="border w-full p-2 mb-4" placeholder="Popis úrazu" rows={4}></textarea>

        <h3 className="text-lg font-semibold mt-6">Opatření přijatá k zabránění opakování pracovního úrazu:</h3>
        <textarea className="border w-full p-2 mb-4" placeholder="Popis úrazu" rows={4}></textarea>

        <h3 className="text-lg font-semibold mt-6">Jména svědků úrazu, osobní číslo, popř: datum narození a adresa bydliště:</h3>
        <textarea className="border w-full p-2 mb-4" placeholder="Popis úrazu" rows={4}></textarea>

        {/* Tlačítko na odeslání */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Odeslat záznam
        </button>
      </form>
    </div>
  );
};

export default InjuryForm;
