import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { FormData } from '@/models/form'; 

export const exportBook = () => {

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Kniha úrazů');

4
  worksheet.columns = [
    { header: 'Pobočka', key: 'employer', width: 30 },
    { header: 'Pojišťovna postiženého', key: 'insurance', width: 30 },
    { header: 'Jméno', key: 'name', width: 30 },
    { header: 'Datum narození', key: 'birthDate', width: 20 },
    { header: 'Osobní číslo', key: 'personalNumber', width: 20 },
    { header: 'Bydliště postiženého', key: 'address', width: 40 },
    { header: 'Pracovní pozice', key: 'position', width: 30 },
    { header: 'Odpracované hodiny', key: 'hoursWorked', width: 20 },
    { header: 'Čas a datum úrazu', key: 'injuryDateTime', width: 30 },
    { header: 'Počet zraněných', key: 'numberOfInjuredPeople', width: 20 },
    { header: 'Návštěva u lékaře', key: 'doctorVisit', width: 20 },
    { header: 'Test na alkohol', key: 'alcoholTest', width: 20 },
    { header: 'Výsledek testu na alkohol', key: 'alcoholTestResult', width: 30 },
    { header: 'Činnost při níž k úrazu došlo', key: 'activity', width: 40 },
    { header: 'Místo úrazu', key: 'location', width: 30 },
    { header: 'Popis úrazového děje', key: 'injuryEventDescription', width: 40 },
    { header: 'Popis události', key: 'injuryDescription', width: 40 },
    { header: 'Porušení předpisů, ke kterým došlo', key: 'violation', width: 40 },
    { header: 'Nápravná opatření', key: 'preventionMeasures', width: 40 },
    { header: 'Svědci', key: 'witnessInfo', width: 40 },
    { header: 'Nadřízený', key: 'supervisor', width: 30 },
  ];

//tetsovací data:
  worksheet.addRows([
    {
      employer: 'ABC Corporation',
      insurance: 'XYZ Insurance',
      name: 'Jan Novák',
      birthDate: '1985-07-23',
      personalNumber: '123456',
      address: 'Praha 4, Česká republika',
      position: 'Technik',
      hoursWorked: '6 hodin',
      injuryDateTime: '2024-09-10T14:30',
      numberOfInjuredPeople: '1 osoba',
      doctorVisit: 'Ano',
      alcoholTest: 'Ne',
      alcoholTestResult: 'Negativní',
      activity: 'Údržba stroje',
      location: 'Praha, sklad',
      injuryEventDescription: 'Při údržbě stroje došlo k nečekanému spuštění.',
      injuryDescription: 'Řezná rána na ruce',
      violation: 'Porušení bezpečnostních předpisů',
      preventionMeasures: 'Zvýšení kontroly bezpečnostních postupů',
      witnessInfo: 'Petr Dvořák',
      supervisor: 'Anna Nováková',
    },
    {
      employer: 'DEF Industries',
      insurance: 'ABC Insurance',
      name: 'Petr Dvořák',
      birthDate: '1990-02-15',
      personalNumber: '654321',
      address: 'Brno, Česká republika',
      position: 'Inženýr',
      hoursWorked: '5 hodin',
      injuryDateTime: '2024-09-12T10:00',
      numberOfInjuredPeople: '2 osoby',
      doctorVisit: 'Ano',
      alcoholTest: 'Ano',
      alcoholTestResult: 'Pozitivní',
      activity: 'Oprava elektrického zařízení',
      location: 'Brno, výroba',
      injuryEventDescription: 'Došlo k úrazu elektrickým proudem při manipulaci s kabelem.',
      injuryDescription: 'Popáleniny na ruce',
      violation: 'Nevhodná ochrana proti úrazu elektrickým proudem',
      preventionMeasures: 'Instalace dalších ochranných prostředků',
      witnessInfo: 'Jiří Novák',
      supervisor: 'Pavel Horák',
    }
  ]);

  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, 'Záznamy.xlsx');
  });
};
