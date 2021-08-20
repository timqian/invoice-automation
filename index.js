require('dotenv').config()

const { GoogleSpreadsheet } = require('google-spreadsheet');


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
	console.log(doc);
	// await doc.updateProperties({ title: 'renamed doc' });
	
	// const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
	// console.log(sheet.title);
	// console.log(sheet.rowCount);
	
	// // adding / removing sheets
	// const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
	// await newSheet.delete();
}

updateSheet()