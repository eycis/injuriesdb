import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

interface InjuryRecord {
  employer: string;
  name: string;
  injuryDate: string;
  injuryType: string;
  birthDate: string;
  insurance: string;
  witnessInfo: string;
}

export const exportToExcel = async (data: InjuryRecord[], fileName: string): Promise<void> => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Záznamy');

  data.forEach(item => {
    worksheet.addRow(['Zaměstnavatel', item.employer]);
    worksheet.addRow(['Jméno', item.name]);
    worksheet.addRow(['Datum narození', item.birthDate]);
    worksheet.addRow(['Datum úrazu', item.injuryDate]);
    worksheet.addRow(['Typ úrazu', item.injuryType]);
    worksheet.addRow(['Pojišťovna postiženého', item.insurance]);
    worksheet.addRow(['Svědci: ', item.witnessInfo]);
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `${fileName}.xlsx`);
};
