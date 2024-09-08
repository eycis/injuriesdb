import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

interface InjuryRecord {
  employer: string;
  name: string;
  injuryDate: string;
  injuryType: string;
  birthDate : string;
}

export const exportToExcel = async (data: InjuryRecord[], p0: string): Promise<void> => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Záznamy');

  worksheet.columns = [
    { header: 'Zaměstnavatel', key: 'employer', width: 30, style: { alignment: { wrapText: true } } },
    { header: 'Jméno', key: 'name', width: 30, style: { alignment: { wrapText: true } } },
    { header: 'Datum narození', key: 'birthDate', width: 30, style: { alignment: { wrapText: true } } },
    { header: 'Datum úrazu', key: 'injuryDate', width: 30, style: { alignment: { wrapText: true } } },
    { header: 'Typ úrazu', key: 'injuryType', width: 30, style: { alignment: { wrapText: true } } },
    { header: 'Pojišťovna postiženého', key: 'insurance', width: 30, style: { alignment: { wrapText: true } } },
  ];

  data.forEach(item => {
    worksheet.addRow({
      employer: item.employer,
      name: item.name,
      birthDate : item.birthDate,
      injuryDate: item.injuryDate,
      injuryType: item.injuryType,
    });
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, 'Záznamy_Urazu.xlsx');
};
