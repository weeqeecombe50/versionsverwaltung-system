const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Beispiel für eine Route, um eine Änderung zu verfolgen.
app.post('/changes', (req, res) => {
  const change = req.body;
  console.log('Änderung empfangen:', change);
  res.status(201).send('Änderung wurde erfasst.');
});

module.exports = app;