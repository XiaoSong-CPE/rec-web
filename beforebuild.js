const XLSX = require('xlsx');
const fs = require('fs');

let xlsx = XLSX.readFile('./src/网站名称.xlsx');
xlsx = xlsx.Sheets[xlsx.SheetNames[0]];
xlsx = XLSX.utils.sheet_to_json(xlsx);
console.log(xlsx);
xlsx = JSON.stringify(xlsx)
fs.writeFileSync('./src/data.json',xlsx)