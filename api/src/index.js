const express = require('express');
const path = require('path');
const { getTeamsUsingGet } = require('./teams');
const { getGamesUsingGet } = require('./games');

const app = express();
app.disable('x-powered-by');

// OpenAPI
app.get('/schemas/v1/openapi.yaml', (req, res) => {
  res.sendFile(path.join(__dirname, 'openapi.yaml'));
});
app.get('/api/v1/teams', getTeamsUsingGet);
app.get('/api/v1/games', getGamesUsingGet);

// Webapp
const publicHtml = process.env.PUBLIC_HTML || path.join(__dirname, '..', '..', 'webapp', 'build');
app.get(/.*\.html/, async (req, res) => {
  res.sendFile(path.join(publicHtml, 'index.html'));
});
app.use(express.static(publicHtml));

module.exports.cupService = app;
