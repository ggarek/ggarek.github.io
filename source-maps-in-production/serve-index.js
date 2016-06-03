const path = require('path');
const express = require('express');

const app = express();

const addr = '0.0.0.0';
const port = 8181;

app.use('/public', express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, addr, err => {
  if (err) {
    console.log('[index server]: something bad has happened', err);
    return;
  }
  console.log(`[index server]: listening on ${addr}:${port}`);
});
