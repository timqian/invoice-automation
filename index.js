require('dotenv').config()

const dayjs = require('dayjs');
const { GoogleSpreadsheet } = require('google-spreadsheet');

const today = dayjs().format('MMM DD, YYYY');
const InvoiceNo = dayjs().format('YYYY-MM') + '-TQ';

async function updateSheet() {
	// Initialize the sheet - doc ID is the long id in the sheets URL
	const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
	// await doc.useServiceAccountAuth(require('./headllines-github-aaedb908d840.json'));
	// Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
	await doc.useServiceAccountAuth({
		client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
		// Ref: https://github.com/theoephraim/node-google-spreadsheet/issues/244#issuecomment-616031349
		private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
	});

	await doc.loadInfo(); // loads document properties and worksheets
	// console.log(doc);
	// await doc.updateProperties({ title: 'renamed doc' });

	const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
	console.log('Editing sheet:', sheet.title);

  await sheet.loadCells();
  // console.log(allCells, sheet);
	const NumberCell = sheet.getCellByA1('F10');
	NumberCell.value = InvoiceNo;
  const DateCell = sheet.getCellByA1('F11');
  DateCell.value = today;
	await sheet.saveUpdatedCells();
	// console.log(cellInvoiceNo.value);
	// console.log(sheet.rowCount);

	// // adding / removing sheets
	// const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
	// await newSheet.delete();

  // Download PDF

  // const downloadURL = 'https://docs.google.com/spreadsheets/d/1gFVeCV0C4UPkOrpZP7ZB5g0M42ddGYyZqwn3MI48h7E/export?format=pdf';

  // TODO send this email to me

}

updateSheet()