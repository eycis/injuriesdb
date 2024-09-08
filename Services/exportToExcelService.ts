import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

interface InjuryRecord {
  employer: string;
  name: string;
  injuryDateTime: string;
  injuryType: string;
  birthDate: string;
  insurance: string;
  witnessInfo: string;
  personalNumber: string;
  address: string;
  position: string;
  hoursWorked: string;
  injuryDescription: string;
  doctorVisit: string;
  alcoholTest: string;
  alcoholTestResult: string;
  injuryCause: string;
  activity: string;
  location: string;
  injuryEventDescription: string;
  violation: string;
  preventionMeasures: string;
  supervisor: string;
  numberOfInjuredPeople: string;
}

export const exportToExcel = async (data: InjuryRecord[], fileName: string): Promise<void> => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Záznamy');

  data.forEach(item => {
    const rows = [
      ['Pobočka: ', item.employer],
      ['Pojištovna: ', item.insurance],
      ['Jméno: ', item.name],
      ['Datum narození: ', item.birthDate],
      ['Osobní číslo: ', item.personalNumber],
      ['Bydliště postiženého: ', item.address],
      ['Pracovní pozice: ', item.position],
      ['Odpracované hodiny: ', item.hoursWorked],
      ['Čas a datum úrazu: ', item.injuryDateTime],
      ['Celkový počet zraněných: ', item.numberOfInjuredPeople],
      ['Návštěva u lékaře: ', item.doctorVisit],
      ['Test na alkohol: ', item.alcoholTest],
      ['Výsledek testu na alkohol: ', item.alcoholTestResult],
      ['Činnost při níž k úrazu došlo: ', item.activity],
      ['Místo úrazu: ', item.location],
      ['Popis úrazového děje: ', item.injuryDescription],
      ['Popis události: ', item.injuryEventDescription],
      ['Porušení předpisů, ke kterým došlo: ', item.violation],
      ['Nápravná opatření: ', item.preventionMeasures],
      ['Svědci: ', item.witnessInfo],
      ['Nadřízený: ', item.supervisor]
    //worksheet.addRow(['Typ zranění: ', item.injuryType]);
    //worksheet.addRow(['Příčina zranění: ', item.injuryCause]);
    ];
  
    rows.forEach((row, index) => {
        const addedRow = worksheet.addRow(row);
        
        // Nastavení tučného písma pro první sloupec
        addedRow.getCell(1).font = { bold: true };
      });

  });
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `${fileName}.xlsx`);
};
