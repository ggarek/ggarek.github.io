const path = require('path');
const express = require('express');

const app = express();

const addr = '0.0.0.0';
const port = 16016;

app.get('/secure/source-maps/*', (req, res) => {
  const rest = req.path.split('/secure/source-maps/')[1];
  const p = path.join(__dirname, `dist/${rest}`);
  console.log('sending source-map: ', p);
  res.sendFile(p);
});

app.listen(port, addr, err => {
  if (err) {
    console.log('[source map server]: something bad has happened', err);
    return;
  }
  console.log(`[cui source map server]: listening on ${addr}:${port}`);
});
