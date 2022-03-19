const { google } = require('googleapis');

const sheets = google.sheets('v4');

const getSheetValues = async (ranges) => sheets.spreadsheets.values.batchGet({
  auth: process.env.SHEETS_API_KEY,
  spreadsheetId: '16ExfiFqE42bgYDkV7iZk8bcObO-Jn1jGyp2YIeHXgq0',
  ranges,
}).then((result) => result.data.valueRanges.map(({values}) => values));

module.exports = getSheetValues;
