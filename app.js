const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Example of a route to track a change.
app.post('/changes', (req, res) => {
  const change = req.body;
  console.log('Change received:', change);
  res.status(201).send('Change has been recorded.');
});

module.exports = app;