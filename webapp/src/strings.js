const sv = require('./strings_sv.json');

const lang = (key) => sv[key] || key;

module.exports = lang;
